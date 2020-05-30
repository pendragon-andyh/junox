import styled from 'styled-components'
import Led from '../Led'

export const OctaveWrapper = styled.div`
  align-items: center;
  border-right: 2px solid #121212;
  color: white;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  font-weight: 600;
  justify-content: center;
  padding-top: 10px;
  text-transform: uppercase;
  width: 150px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

export const MarginatedLed = styled(Led)`
  margin-left: 0.5rem;
`
