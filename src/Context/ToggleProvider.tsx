import { createContext, useContext, useState } from 'react'

const ToggleContext = createContext(1 as any)

export function useToggle() {
  return useContext(ToggleContext)
}

export default function ToggleProvider({ children }:any) {
  const [Darkbackground, setDarkBackground] = useState(true)
  const [textColor, setTextColor] = useState(true)

  const bgtoggle = () => {
    setDarkBackground(!Darkbackground)
    setTextColor(!textColor)
  }

  return (
    <ToggleContext.Provider value={{ Darkbackground, textColor, bgtoggle }}>
      {children}
    </ToggleContext.Provider>
  )
}