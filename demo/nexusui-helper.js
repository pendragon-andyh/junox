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
  }

  /**
   * @property {Map} - List of "controls", keyed by their ```controlId``` identifiers.
   */
  controls = {}

  /**
   * Create a slider control.
   * @param {any} controlId - Unique name for the radio-button-group control.
   * @param {string} title - Title of control.
   * @param {string} htmlId - Target HTML element id.
   * @param {Function} onControlChange - Function to be called when the value changes.
   */
  createSlider(controlId, title, htmlId, onControlChange) {
    const digitsControl = document.createElement('span')
    digitsControl.innerText = '0.0'

    const control = new this.nexus.Slider(htmlId, {
      size: [40, 150],
      min: 0,
      max: 10,
      step: 0.1,
    }).on('change', (v) => {
      digitsControl.innerText = v.toFixed(1)
      onControlChange && onControlChange(controlId, v)
    })

    // Insert the "digits" span just above the slider.
    control.parent.parentElement.insertBefore(digitsControl, control.parent)

    // Decorate the Nexus UI control with useful information.
    control.controlId = controlId
    control.title = title
    control.canBindToMidiControl = true

    // Tweak the SVG emitted from NexusUI.
    for (let el of control.element.children) {
      el.style.stroke = '#669'
      el.style.strokeWidth = '1'
    }
    control.element.children[1].style.fill = 'rgba(0, 123, 255, 0.5)'
    control.element.children[2].style.stroke = 'rgb(50, 50, 50)'

    // Add to the controls collection.
    this.controls[controlId] = control

    return control
  }

  /**
   * Create a bend-lever control.
   * @param {any} controlId - Unique name for the radio-button-group control.
   * @param {string} title - Title of control.
   * @param {string} htmlId - Target HTML element id.
   * @param {Function} onControlChange - Function to be called when the value changes.
   */
  createBendLever(controlId, title, htmlId, onControlChange) {
    const control = new this.nexus.Pan(htmlId, {
      size: [50, 200],
      min: -10,
      max: +10,
      step: 0.11,
    }).on('change', (v) => {
      onControlChange && onControlChange(controlId, v)
    })

    // Decorate the Nexus UI control with useful information.
    control.controlId = controlId
    control.title = title
    control.canBindToMidiControl = false

    // Tweak the SVG emitted from NexusUI.
    control.element.children[0].style.stroke = '#669'
    control.element.children[0].style.strokeWidth = '1'
    control.element.children[1].style.stroke = 'rgb(50, 50, 50)'
    control.element.children[1].style.strokeWidth = '1'

    // Add to the controls collection.
    this.controls[controlId] = control

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
    this.controls[controlId] = wrapper

    return wrapper
  }
}
