import React from 'react'
import Section from '../Section'
import Slider from '../Slider'

export default React.memo(function ENV({
  attack,
  decay,
  sustain,
  release,
  setValue
}) {
  return (
    <Section title="ENV">
      <Slider label="A" onChange={setValue('env.attack')} value={attack} />
      <Slider label="D" onChange={setValue('env.decay')} value={decay} />
      <Slider label="S" onChange={setValue('env.sustain')} value={sustain} />
      <Slider label="R" onChange={setValue('env.release')} value={release} />
    </Section>
  )
})
