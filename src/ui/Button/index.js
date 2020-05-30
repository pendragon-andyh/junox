import styled from 'styled-components'

function buttonColor(color) {
  if (color === 'white') {
    return '#FEFEFC'
  } else if (color === 'yellow') {
    return '#FFFD76'
  } else if (color === 'orange') {
    return '#FE9C5B'
  }
  return '#323232'
}

export const Button = styled.div`
  align-items: center;
  background-color: ${props => buttonColor(props.variant)};
  border-radius: 4px;
  border: 1px solid black;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 13px;
  font-weight: 600;
  justify-content: center;
  padding: 0.5rem;
  text-transform: uppercase;
  &:active {
    background-color: #121212;
  }
`

export const FixedSizeButton = styled(Button)`
  width: 100px;
`

export const EmptyButton = styled(Button)`
  height: ${props => (props.small ? '1.5rem' : '2rem')};
  width: ${props => (props.small ? '1.5rem' : '2.4rem')};
`
