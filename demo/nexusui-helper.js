/**
 * Opinionated helper class for building synthesizer control panels using Nexus UI.
 */
export class NexusUIHelper {
  /**
   * @constructor
   * @param {Nexus} nexus - Instance of Nexus.
   */
  constructor(nexus) {
    this.nexus = nexus

    /**
     * @property {Array} - List of "controls", keyed by their ```controlId``` identifiers.
     */
    this.controls = []

    /**
     * @property Global defalts for controls.
     */
    this.defaults = {
      slider: {
        size: [40, 150],
        showValue: true,
        minValue: 0.0,
        maxValue: 10.0,
        step: 0.1,
        initialValue: 0.0,
        isCentred: false,
      },
    }
  }

  /**
   * Create a slider control.
   * @param {any} controlId - Unique name for the radio-button-group control.
   * @param {string} title - Title of control.
   * @param {string} htmlId - Target HTML element id.
   * @param {Function} onControlChange - Function to be called when the value changes.
   */
  createSlider(controlId, title, htmlId, onControlChange, defaults) {
    // Coalesce defaults into a single class.
    defaults = {
      ...this.defaults.slider,
      ...defaults,
    }

    // Create the required control.
    const control = new this.nexus.Slider(htmlId, {
      size: defaults.size,
      min: defaults.minValue,
      max: defaults.maxValue,
      step: defaults.step,
      value: defaults.initialValue,
    })

    // Tweak the SVG emitted from NexusUI.
    for (let el of control.element.children) {
      el.style.stroke = '#669'
      el.style.strokeWidth = '1'
    }
    if (defaults.isCentred) {
      // Offset-from-centre slider (so hide the track).
      control.element.children[1].style.fill = 'rgba(0, 123, 255, 0.0)'
    } else {
      // Normal slider (zero to maxValue).
      control.element.children[1].style.fill = 'rgba(0, 123, 255, 0.5)'
    }
    control.element.children[2].style.stroke = 'rgb(50, 50, 50)'

    // Insert the "digits" span just above the slider.
    let digitsControl
    const dp = defaults.step < 1 ? 1 : 0
    if (defaults.showValue) {
      digitsControl = document.createElement('span')

      const maxDigits = Math.max(defaults.minValue.toFixed(1).length, defaults.maxValue.toFixed(dp).length)
      digitsControl.className = 'digits-' + maxDigits

      digitsControl.innerText = defaults.initialValue.toFixed(dp)
      control.parent.parentElement.appendChild(digitsControl)
    }

    // Respond to changes.
    control.on('change', (v) => {
      if (digitsControl) {
        digitsControl.innerText = v.toFixed(dp)
      }
      onControlChange && onControlChange(controlId, v)
    })

    // Decorate the Nexus UI control with useful information.
    control.controlId = controlId
    control.title = title
    control.onMidiControllerChange = (value) => {
      const midiFactor = (defaults.maxValue - defaults.minValue) / 127
      control.value = defaults.minValue + value * midiFactor
    }

    // Add to the controls collection.
    if (Number.isInteger(controlId)) {
      this.controls[controlId] = control
    }

    return control
  }

  /**
   * Create a toggle-switch control.
   * @param {any} controlId - Unique name for the radio-button-group control.
   * @param {string} title - Title of control.
   * @param {string} htmlId - Target HTML element id.
   * @param {Function} onControlChange - Function to be called when the value changes.
   */
  createToggle(controlId, title, htmlId, onControlChange) {
    const control = new this.nexus.Button(htmlId, { size: [30, 30], mode: 'toggle' }).on('change', (v) => {
      onControlChange && onControlChange(controlId, v)
    })

    // Decorate the Nexus UI control with useful information.
    control.controlId = controlId
    control.title = title
    Object.defineProperty(control, 'value', {
      get: () => (control.state ? 1 : 0),
      set: (v) => {
        control.state = v === 1
      },
    })

    // Extend the clickable area to the parent element.
    control.parent.parentElement.addEventListener('click', function () {
      control.flip()
    })

    // Add to the controls collection.
    if (Number.isInteger(controlId)) {
      this.controls[controlId] = control
    }

    return control
  }

  /**
   * Create a radio-button group.
   * @param {any} controlId - Unique name for the radio-button-group control.
   * @param {string} title - Title of control.
   * @param {Map} keyToIdMap - Object containing mapping between values and HTML element ids.
   * @param {Function} onControlChange - Function to be called when the value changes.
   */
  createRadioButtonGroup(controlId, title, keyToIdMap, onControlChange) {
    // Value of the control group.
    let value = null

    // Foreach of the specified radio-button values ...
    const keyToNexusElementMap = {}
    for (let v of Object.keys(keyToIdMap)) {
      // Create a NexusUI button.
      const vcopy = v
      const control = new this.nexus.Button(keyToIdMap[vcopy], { size: [30, 30], mode: 'toggle' })
      keyToNexusElementMap[v] = control

      // If this is the first radio-button then assume that is initially the selected one.
      if (value === null) {
        control.state = true
        value = v
      }

      // If the button is clicked then handle the processing.
      // eslint-disable-next-line no-loop-func
      control.on('change', (state) => {
        if (state ^ (value === vcopy)) {
          setValue(vcopy)
          onControlChange && onControlChange(controlId, value)
        }
      })

      // Extend the clickable area to the parent element.
      control.parent.parentElement.addEventListener('click', function () {
        control.flip()
      })
    }

    // Internal function for setting the value of the radio-button group.
    function setValue(newValue) {
      if (keyToNexusElementMap[newValue] !== undefined) {
        value = newValue
        for (let v of Object.keys(keyToIdMap)) {
          const newState = v === newValue
          if (keyToNexusElementMap[v].state !== newState) {
            keyToNexusElementMap[v].state = newState
          }
        }
      }
    }

    // Create a wrapper object to the caller to allow future manipulation.
    const wrapper = {
      controlId,
      title,
      controls: keyToNexusElementMap,
    }
    Object.defineProperty(wrapper, 'value', {
      get: () => value,
      set: (v) => setValue(v),
    })

    // Add to the controls collection.
    if (Number.isInteger(controlId)) {
      this.controls[controlId] = wrapper
    }

    return wrapper
  }
}
