import styled from 'styled-components'
import { Row } from '../Flexbox'

export const TopRow = styled(Row)`
  align-items: center;
  background-color: #232326;
  height: 120px;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const Spacer = styled.div`
  flex: 1;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Logo = styled.div`
  align-self: flex-end;
  font-family: Righteous;
  font-size: 36px;
  font-weight: 600;
  margin-right: 1rem;
`
