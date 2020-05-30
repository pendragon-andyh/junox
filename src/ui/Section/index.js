import React from 'react'
import PropTypes from 'prop-types'
import { Column, Title, Row, LineStart, LineEnd, BottomBlock } from './elements'

Section.propTypes = {
  first: PropTypes.bool,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default function Section({ children, first, title }) {
  return (
    <Column first={first}>
      <Title>{title}</Title>
      <Row>
        <LineStart />
        {children}
        <LineEnd />
      </Row>
      <BottomBlock />
    </Column>
  )
}
