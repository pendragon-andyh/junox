import 'audioworklet-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { initAudio } from './audio'
import App from './ui/App'
import Splashscreen from './ui/Splashscreen'
import reset from 'styled-reset'
import 'react-piano/dist/styles.css'
import 'react-loader-spinner/dist/loader/css/Triangle.css'
import './ui/Piano/piano.css'

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }  
  body {
    font-family: 'Montserrat', sans-serif;
    user-select: none;
  }
  html, body, #root {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex: 1;
    background-color: #4a4950;
    color: #BFBFBF;
  }
  body, #root {
    flex-direction: column;
  }
`
// TODO: can/should this be refactored within a react component?
let synth = null
let audioContext = null

initAudio().then(({ synthNode, context }) => {
  synth = synthNode
  audioContext = context
  render()
})

function render() {
  return ReactDOM.render(
    <React.Fragment>
      <GlobalStyle />
      {synth ? (
        <App synth={synth} audioContext={audioContext} />
      ) : (
        <Splashscreen />
      )}
    </React.Fragment>,
    document.getElementById('root')
  )
}

render()
