import React from 'react'
import LCD from '../LCD'
import PatchSelector from '../PatchSelector'
import MIDIController from '../MIDIController'
import { SimpleRow } from '../Flexbox'
import Record from '../Record'
import { FixedSizeButton } from '../Button'
import { AfterButtonLED } from '../ButtonLED'
import { TopRow, Spacer, LogoContainer, Logo } from './elements'

export default function TopBar({ audioContext, noteOff, noteOn, patches, setPatch, synth }) {
  return (
    <TopRow>
      <LCD>
        <PatchSelector patches={patches} setPatch={setPatch} />
      </LCD>
      <Spacer />
      <LogoContainer>
        <Logo>JUNOX</Logo>
        <MIDIController noteOn={noteOn} noteOff={noteOff} />
        <SimpleRow centered marginated>
          <FixedSizeButton onClick={() => synth.panic()}>Panic</FixedSizeButton>
          <AfterButtonLED />
          <Record audioContext={audioContext} outNode={synth} />
        </SimpleRow>
      </LogoContainer>
    </TopRow>
  )
}
