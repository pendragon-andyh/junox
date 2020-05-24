import React from 'react'
import Section from '../Section'
import Slider from '../Slider'
import ButtonLED, { AfterButtonLED } from '../ButtonLED'

export default React.memo(function DCO({
  range,
  lfo,
  pwm,
  pwmMod,
  pulse,
  saw,
  sub,
  subAmount,
  noise,
  setValue,
}) {
  return (
    <Section title="DCO">
      <ButtonLED active={range === 0.5} label="16'" toggle={setValue('dco.range', 0.5)} />
      <ButtonLED active={range === 1} label="8'" toggle={setValue('dco.range', 1)} />
      <ButtonLED active={range === 2} label="4'" toggle={setValue('dco.range', 2)} />
      <AfterButtonLED />
      <Slider label="LFO" value={lfo} onChange={setValue('dco.lfo')} />
      <Slider label="PWM" value={pwm} onChange={setValue('dco.pwm')} />
      <ButtonLED active={pwmMod === 'l'} label="LFO" toggle={setValue('dco.pwmMod', 'l')} />
      <ButtonLED active={pwmMod === 'm'} label="Man" toggle={setValue('dco.pwmMod', 'm')} />
      <ButtonLED active={pwmMod === 'e'} label="Env" toggle={setValue('dco.pwmMod', 'e')} />
      <AfterButtonLED />

      <ButtonLED
        active={pulse}
        label="PULSE"
        spaced
        toggle={setValue('dco.pulse')}
        variant="white"
      />
      <ButtonLED active={saw} label="SAW" spaced toggle={setValue('dco.saw')} variant="yellow" />
      <ButtonLED active={sub} label="SUB" spaced toggle={setValue('dco.sub')} variant="orange" />
      <AfterButtonLED />
      <Slider label="SUB" onChange={setValue('dco.subAmount')} value={subAmount} />
      <Slider label="NOISE" value={noise} onChange={setValue('dco.noise')} />
    </Section>
  )
})
