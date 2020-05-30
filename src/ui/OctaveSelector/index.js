import React from 'react'
import Led from '../Led'
import { Button } from '../Button'
import { OctaveWrapper, Row, MarginatedLed } from './elements'

export default React.memo(function OctaveSelector({ octave, setOctave }) {
  const clamp = v => Math.max(-24, Math.min(v, 24))
  const changeOctave = direction => v =>
    setOctave(clamp(octave + 12 * direction))
  return (
    <OctaveWrapper>
      Octave
      <Row>
        <Led active={octave === -24} />
        <MarginatedLed active={octave === -12} />
        <MarginatedLed active={octave === 0} />
        <MarginatedLed active={octave === 12} />
        <MarginatedLed active={octave === 24} />
      </Row>
      <Row>
        <Button onClick={changeOctave(-1)}>&lt;</Button>
        <Button style={{ marginLeft: '0.5rem' }} onClick={changeOctave(1)}>
          &gt;
        </Button>
      </Row>
    </OctaveWrapper>
  )
})
