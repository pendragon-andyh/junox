import React, { useState } from 'react'
import Piano from '../Piano'
import OctaveSelector from '../OctaveSelector'
import { Button } from '../Button'
import LFO from '../LFO'
import DCO from '../DCO'
import TopBar from '../TopBar'
import { Column, Row } from '../Flexbox'
import patches from '../../junox/patches'
import usePatchUrl from './usePatchUrl'
import useSynth from './useSynth'
import HPF from '../HPF'
import VCF from '../VCF'
import VCA from '../VCA'
import ENV from '../ENV'
import Chorus from '../Chorus'
import SharePatch from '../SharePatch'
import { BlackRow, Container, Copyright } from './elements'

export default function App({ synth, audioContext }) {
  const [octave, setOctave] = useState(-12)
  const [lastNoteOn, setLastNoteOn] = useState(69)

  const {
    lfoRelease,
    lfoTrigger,
    noteOff,
    noteOn,
    patch,
    setPatch,
    setSynthPatchValue,
    setSynthValue,
  } = useSynth(synth, setLastNoteOn)

  usePatchUrl(setSynthPatchValue)

  return (
    <Container>
      <TopBar
        audioContext={audioContext}
        lastNoteOn={lastNoteOn}
        noteOff={noteOff}
        noteOn={noteOn}
        patches={patches}
        setPatch={setPatch}
        synth={synth}
      />
      <Row first centered>
        <LFO
          autoTrigger={patch.lfo.autoTrigger}
          delay={patch.lfo.delay}
          frequency={patch.lfo.frequency}
          lfoRelease={lfoRelease}
          lfoTrigger={lfoTrigger}
          setValue={setSynthValue}
        />
        <DCO
          lfo={patch.dco.lfo}
          pwmMod={patch.dco.pwmMod}
          noise={patch.dco.noise}
          pulse={patch.dco.pulse}
          pwm={patch.dco.pwm}
          range={patch.dco.range}
          saw={patch.dco.saw}
          setValue={setSynthValue}
          sub={patch.dco.sub}
          subAmount={patch.dco.subAmount}
        />
        <HPF hpf={patch.hpf} setValue={setSynthValue} />
      </Row>
      <Row centered>
        <VCF
          envMod={patch.vcf.envMod}
          frequency={patch.vcf.frequency}
          keyMod={patch.vcf.keyMod}
          lfoMod={patch.vcf.lfoMod}
          modPositive={patch.vcf.modPositive}
          resonance={patch.vcf.resonance}
          setValue={setSynthValue}
          type={patch.vcf.type}
        />
        <VCA vca={patch.vca} vcaType={patch.vcaType} setValue={setSynthValue} />
        <ENV
          attack={patch.env.attack}
          decay={patch.env.decay}
          release={patch.env.release}
          setValue={setSynthValue}
          sustain={patch.env.sustain}
        />
        <Chorus chorus={patch.chorus} setValue={setSynthValue} />
      </Row>
      <BlackRow />
      <Row>
        <Column style={{ height: 175 }}>
          <OctaveSelector octave={octave} setOctave={setOctave} />
          <Button
            style={{ marginTop: 10 }}
            onClick={() => console.log(JSON.stringify(patch))}
          >
            dump
          </Button>
          <SharePatch patch={patch} />
        </Column>
        <Piano octave={octave} noteOn={noteOn} noteOff={noteOff} />
      </Row>
      <Copyright>
        Chrome 66+ ONLY - Copyright d.zannotti@me.com - 2019
      </Copyright>
    </Container>
  )
}
