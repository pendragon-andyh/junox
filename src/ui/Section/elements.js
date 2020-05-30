import styled from 'styled-components'

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  height: 230px;
  margin-top: 3px;
`

export const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const Title = styled.div`
  align-items: center;
  background-color: #a40000;
  color: white;
  display: flex;
  font-weight: 600;
  height: 1.7rem;
  justify-content: center;
  margin-left: 1px;
  text-transform: uppercase;
  width: calc(100% - 2px);
`

export const BottomBlock = styled.div`
  background-color: #a40000;
  color: white;
  display: flex;
  height: 0.5rem;
  width: calc(100% - 2px);
`

export const Line = styled.div`
  background-color: white;
  height: 100%;
  width: 1px;
`

export const LineStart = styled(Line)`
  align-self: flex-start;
  margin-right: 10px;
`

export const LineEnd = styled(Line)`
  align-self: flex-end;
  margin-left: 10px;
`
