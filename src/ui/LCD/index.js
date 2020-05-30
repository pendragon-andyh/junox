import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Container, LCDBorderSide, LCDBorderTop } from './elements'

LCD.propTypes = {
  children: PropTypes.node.isRequired
}

export default function LCD({ children }) {
  return (
    <Wrapper>
      <LCDBorderTop />
      <Container>
        {children}
        <LCDBorderSide />
      </Container>
    </Wrapper>
  )
}
