import React from 'react'
import Loader from 'react-loader-spinner'
import { Container, Logo, Label } from './elements'

export default function SplashScreen() {
  return (
    <Container>
      <Logo>JUNOX</Logo>
      <Loader type="Triangle" color="#121212" height="100" width="100" />
      <Label>loading...</Label>
    </Container>
  )
}
