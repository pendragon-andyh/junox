import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  align-items: center;
  background-color: #c0cf35;
  box-shadow: inset 0 3px 0 3px #c0cf35;
  color: #2f3409;
  display: flex;
  flex-direction: row;
  height: 76px;
  justify-content: center;
  padding-top: 4px;
  position: relative;
  width: 736px;
`

export const LCDBorderTop = styled.div`
  background-color: #99a52a;
  height: 3px;
  width: 100%;
`
export const LCDBorderSide = styled.div`
  background-color: #99a52a;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 3px;
`
