import styled from 'styled-components'

const LED = styled.div`
  background-color: ${props => (props.active ? '#ff0000' : '#260000')};
  box-shadow: ${props =>
    props.active
      ? 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px'
      : 'none'};
  border-radius: 10px;
  border: 1px solid black;
  height: 10px;
  width: 10px;
`

export default LED
