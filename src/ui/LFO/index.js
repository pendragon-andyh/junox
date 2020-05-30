import React from 'react'
import Section from '../Section'
import Slider from '../Slider'
import ButtonLED from '../ButtonLED'
import { Column } from '../Flexbox'

export default React.memo(function LFO({
  autoTrigger,
  delay,
  frequency,
  lfoRelease,
  lfoTrigger,
  setValue
}) {
  return (
    <Section title="LFO">
      <Slider
        label="FREQ"
        onChange={setValue('lfo.frequency')}
        value={frequency}
      />
      <Slider label="DELAY" onChange={setValue('lfo.delay')} value={delay} />
      <Column>
        <ButtonLED
          active={autoTrigger}
          label="Auto"
          toggle={setValue('lfo.autoTrigger', true)}
        />
        <ButtonLED
          active={!autoTrigger}
          label="Man"
          toggle={setValue('lfo.autoTrigger', false)}
        />
      </Column>
      <ButtonLED
        hideLed
        label="TRG"
        onMouseDown={lfoTrigger}
        onMouseUp={lfoRelease}
      />
    </Section>
  )
})
