import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 60px;
`

const Spacer = styled.div`
  flex: 1 1 auto;
`

const SliderTrackWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SliderTrackLabel = styled.div`
  align-items: center;
  color: #cfcfcf;
  display: flex;
  flex-direction: row;
  font-weight: 600;
  height: 1.25rem;
  justify-content: center;
  line-height: 1.25rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

const ThumbContainer = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 2px;
  display: flex;
  height: 22px;
  width: 44px;
`

const ThumbMarker = styled.div`
  background-color: white;
  flex-grow: 0;
  flex-shrink: 0;
  height: 2px;
  width: 100%;
`

const FaderMarks = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 31px;
`

const FaderMark = styled.div`
  background-color: white;
  height: ${props => (props.bold ? '2px' : '1px')};
  margin-bottom: 3px;
  width: 100%;
`

export const SliderThumb = React.memo(function SliderThumb(props) {
  return (
    <ThumbContainer {...props}>
      <ThumbMarker />
    </ThumbContainer>
  )
})

export const SliderTrackRange = React.memo(function SliderTrackRange({
  children,
  label,
  props
}) {
  const faders = (
    <FaderMarks>
      <FaderMark bold />
      <Spacer />
      <FaderMark />
      <Spacer />
      <FaderMark />
      <Spacer />
      <FaderMark bold />
      <Spacer />
      <FaderMark />
      <Spacer />
      <FaderMark />
      <Spacer />
      <FaderMark bold />
    </FaderMarks>
  )

  return (
    <SliderTrackWrapper>
      <SliderTrackLabel>{label}</SliderTrackLabel>
      <SliderTrackContainer
        onMouseDown={props.onMouseDown}
        onTouchStart={props.onTouchStart}
        style={props.style}
      >
        {faders}
        <SliderTrack ref={props.ref}>{children}</SliderTrack>
        {faders}
      </SliderTrackContainer>
    </SliderTrackWrapper>
  )
})

const SliderTrackContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 140px;
  width: 70px;
`
const SliderTrack = styled.div`
  background-color: #000000;
  border-radius: 2px;
  height: 135px;
  width: 7px;
`
