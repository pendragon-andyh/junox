import styled from 'styled-components'

export const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SimpleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.centered ? 'center' : 'flex-start')};
  margin-top: ${(props) => (props.marginated ? '10px' : '0')};
`

export const Row = styled(SimpleRow)`
  background-color: #2b2c2e;
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  padding-bottom: ${(props) => (props.first ? '3px' : '0')};
  width: 1100px;
`
