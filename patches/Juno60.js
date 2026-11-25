const fs = require('node:fs')

const lines = fs.readFileSync('patches/Juno60.csv', 'utf8').trim().split(/\r?\n/)
const headers = lines[0].split(',')
const results = lines.slice(1).map((line) => {
  const values = line.split(',')
  const row = {}
  for (let i = 0; i < headers.length; i++) {
    row[headers[i]] = values[i]
  }
  return row
})

toJSON(results)

function toSlider(value) {
  return Math.round(2 * Number.parseFloat(value)) / 20
}

function toInteger(value) {
  return Number.parseInt(value)
}

function toBoolean(value) {
  return Boolean(Number.parseInt(value))
}

function toJSON(results) {
    const rangeMap = { N: 1, D: 0.5 }
    const formatted = results
        .filter((patch) => !Number.isNaN(Number.parseInt(patch['Number'])))
        .map((patch, i) => {
            return {
                name: patch['Name'],
                vca: toSlider(patch['VCA Value']) + 0.5,
                vcaType: patch['VCA Dir'] === 'G' ? 'gate' : 'env',
                lfo: {
                    autoTrigger: patch['LFO Trigger'] === 'A',
                    frequency: toSlider(patch['LFO Rate']),
                    delay: toSlider(patch['LFO Delay']),
                },
                dco: {
                    range: rangeMap[patch.Range] ?? 2,
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
    fs.writeFileSync('src/patches.js', `export const Juno60FactoryPatchesA = ${JSON.stringify(formatted, null, 2)}\n`)
}
