import React from 'react'
import Section from '../Section'
import Slider from '../Slider'

export default React.memo(function HPF({ hpf, setValue }) {
  return (
    <Section title="HPF">
      <Slider label="FREQ" onChange={setValue('hpf')} step={0.33} value={hpf} />
    </Section>
  )
})
