import React from 'react'
import PropTypes from 'prop-types'
import { EmptyButton } from '../Button'
import { Wrapper, Label, Led, Spacer } from './elements'
export { AfterButtonLED } from './elements'

ButtonLED.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string.isRequired,
  spaced: PropTypes.bool,
  toggle: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  hideLed: PropTypes.bool,
  small: PropTypes.bool
}

export default function ButtonLED({
  active,
  label,
  spaced,
  toggle,
  hideLed,
  small,
  variant,
  onMouseDown,
  onMouseUp
}) {
  const onClick =
    (!onMouseDown || !onMouseUp) && toggle ? () => toggle(!active) : undefined
  return (
    <Wrapper>
      <Label>{label}</Label>
      {spaced && <Spacer />}
      {!hideLed && <Led active={active} />}
      <EmptyButton
        onClick={onClick}
        small={small}
        variant={variant}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
      />
      {spaced && <Spacer />}
    </Wrapper>
  )
}
