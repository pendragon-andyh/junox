import { useEffect } from 'react'
import LZ from 'lz-string'
import { get } from 'lodash'

export default function usePatchUrl(setSynthPatchValue) {
  useEffect(() => {
    if (!window.location.hash) {
      return
    }
    const patchJSON = JSON.parse(
      LZ.decompressFromBase64(window.location.hash.slice(1))
    )
    const nested = ['lfo', 'env', 'dco', 'vcf']
    const paths = Object.keys(patchJSON).filter(key => !nested.includes(key))
    const allPaths = paths
      .concat(
        nested.map(nestedKey =>
          Object.keys(patchJSON[nestedKey]).map(key => `${nestedKey}.${key}`)
        )
      )
      .reduce((out, current) => {
        if (Array.isArray(current)) {
          return out.concat(current)
        }
        out.push(current)
        return out
      }, [])
    allPaths.forEach(path => setSynthPatchValue(path, get(patchJSON, path)))
  })
}
