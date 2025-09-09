import React from 'react'
import { useToggle } from '../Context/ToggleProvider'

function ToggleButton() {
  const { bgtoggle } = useToggle()

  return (
    <button onClick={bgtoggle}>
      Toggle Background
    </button>
  )
}

export default ToggleButton