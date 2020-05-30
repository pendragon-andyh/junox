import React from 'react'
import Section from '../Section'
import Slider from '../Slider'
import { Column } from '../Flexbox'
import ButtonLED, { AfterButtonLED } from '../ButtonLED'
import { VCF_MOOG, VCF_DIODELADDER } from '../../junox/constants'

export default React.memo(function VCF({
  envMod,
  frequency,
  keyMod,
  lfoMod,
  modPositive,
  resonance,
  setValue,
  type
}) {
  const toggleFilterType = val => (val ? VCF_MOOG : VCF_DIODELADDER)
  return (
    <Section title="VCF">
      <Slider
        label="FREQ"
        onChange={setValue('vcf.frequency')}
        value={frequency}
      />
      <Slider
        label="RES"
        onChange={setValue('vcf.resonance')}
        value={resonance}
      />
      <Column>
        <ButtonLED
          active={modPositive}
          label="+"
          toggle={setValue('vcf.modPositive')}
        />
        <ButtonLED
          active={type === VCF_MOOG}
          label="moog"
          toggle={setValue('vcf.type', undefined, toggleFilterType)}
        />
      </Column>
      <AfterButtonLED />
      <Slider label="ENV" onChange={setValue('vcf.envMod')} value={envMod} />
      <Slider label="LFO" onChange={setValue('vcf.lfoMod')} value={lfoMod} />
      <Slider label="KEY" onChange={setValue('vcf.keyMod')} value={keyMod} />
    </Section>
  )
})
