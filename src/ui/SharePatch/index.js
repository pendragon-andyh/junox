import React from 'react'
import LZ from 'lz-string'
import copy from 'copy-to-clipboard'
import { SimpleRow } from '../Flexbox'
import { Button } from '../Button'

export default React.memo(function SharePatch({ patch }) {
  const sharePatch = () => {
    const patchBase64 = LZ.compressToBase64(JSON.stringify(patch))
    window.location.hash = patchBase64
    copy(window.location.href)
    alert('Copied to clipboard')
  }
  return (
    <SimpleRow centered marginated>
      <Button onClick={sharePatch}>SHARE PATCH</Button>
    </SimpleRow>
  )
})
