import styled from 'styled-components'
import LedLight from '../Led'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-left: 0.5rem;
`

export const Label = styled.div`
  color: #cfcfcf;
  font-weight: 600;
  height: 1.25rem;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
  margin-top: 0.75rem;
  text-transform: uppercase;
`

export const Led = styled(LedLight)`
  margin-bottom: 0.5rem;
`

export const Spacer = styled.div`
  flex: 1;
`

export const AfterButtonLED = styled.div`
  height: 100%;
  width: 20px;
`
