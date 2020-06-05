const csv = require('csv-parser')
const fs = require('fs')
const results = []

fs.createReadStream('patches/Juno60.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    toJSON(results)
  })

function toSlider(value) {
  return Math.round(2 * parseFloat(value)) / 20
}

function toInteger(value) {
  return parseInt(value)
}

function toBoolean(value) {
  return Boolean(parseInt(value))
}

function toJSON(results) {
  const formatted = results
    .filter((patch) => !isNaN(parseInt(patch['Number'])))
    .map((patch, i) => {
      return {
        name: patch['Name'],
        // this is a bit fudged, unsure what negative values do?
        vca: toSlider(patch['VCA Value'] + 5),
        vcaType: patch['VCA Dir'] === 'G' ? 'gate' : 'env',
        lfo: {
          autoTrigger: patch['LFO Trigger'] === 'A',
          frequency: toSlider(patch['LFO Rate']),
          delay: toSlider(patch['LFO Delay']),
        },
        dco: {
          range: 1,
          saw: toBoolean(patch['DCO Saw']),
          pulse: toBoolean(patch['DCO Pulse']),
          sub: toBoolean(patch['DCO Sub Enabled']),
          subAmount: toSlider(patch['DCO Sub']),
          noise: toSlider(patch['DCO Noise']),
          pwm: toSlider(patch['DCO PWM']),
          pwmMod: patch['DCO Lfo Mod'].toLowerCase(),
          lfo: toSlider(patch['DCO Lfo']),
        },
        hpf: toSlider(toSlider(patch['HPF']) * 33.333),
        vcf: {
          type: 'moog',
          frequency: toSlider(patch['VCF Freq']),
          resonance: toSlider(patch['VCF Res']),
          modPositive: patch['VCF Dir'] === 'N',
          envMod: toSlider(patch['VCF Env']),
          lfoMod: toSlider(patch['VCF LFO']),
          keyMod: toSlider(patch['VCF Key']),
        },
        env: {
          attack: toSlider(patch['ENV Attack']),
          decay: toSlider(patch['ENV Decay']),
          sustain: toSlider(patch['ENV Sustain']),
          release: toSlider(patch['ENV Release']),
        },
        chorus: toInteger(patch['Chorus']),
      }
    })
  console.log(formatted)
  fs.writeFileSync('src/patches.js', `export default ${JSON.stringify(formatted)}`)
}
