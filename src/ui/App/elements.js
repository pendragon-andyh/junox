import styled from 'styled-components'
import { Row } from '../Flexbox'

export const BlackRow = styled(Row)`
  background-color: #121212;
  height: 14px;
  width: 1000px;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
`

export const Copyright = styled.div`
  align-self: center;
  font-size: 12px;
  justify-self: center;
  margin-top: 0.25rem;
`
