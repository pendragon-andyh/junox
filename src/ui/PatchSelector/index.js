import React, { useState } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 0,
    boxShadow: 'none',
    fontFamily: 'Orbitron',
    fontWeight: 600,
    marginRight: '1rem',
    width: 400,
    ':hover': {
      borderColor: 'transparent',
    },
    ':active': {
      borderColor: 'transparent',
    },
  }),
  input: (provided) => ({ ...provided, color: '#2f3409' }),
  placeholder: (provided) => ({
    ...provided,
    color: '#2f3409',
    textTransform: 'uppercase',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#2f3409',
    ':hover': { color: 'inerhit' },
  }),
  indicatorContainer: (provided) => ({ ...provided, color: '#2f3409' }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 0,
    backgroundColor: '#cee048',
  }),
  menuList: (provided) => ({
    ...provided,
    textTransform: 'uppercase',
    fontFamily: 'Orbitron',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#2f3409',
    textTransform: 'uppercase',
  }),
  option: (provided, { isSelected }) => ({
    ...provided,
    backgroundColor: isSelected ? '#2f3409' : 'transparent',
    color: isSelected ? '#c0cf35' : 'inherit',
    ':hover': {
      backgroundColor: '#2f3409',
      color: '#c0cf35',
    },
    ':active': {
      backgroundColor: '#2f3409',
      color: '#c0cf35',
    },
  }),
}

PatchSelector.propTypes = {
  patches: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPatch: PropTypes.func.isRequired,
}

export default function PatchSelector({ patches, setPatch }) {
  const [selectedPatch, selectPatch] = useState(0)
  const options = patches.map(({ name }, idx) => ({ value: idx, label: name }))
  return (
    <Select
      options={options}
      styles={customStyles}
      value={options[selectedPatch]}
      onChange={({ value }) => {
        setPatch(value)
        selectPatch(value)
      }}
    />
  )
}
