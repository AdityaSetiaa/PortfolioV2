import { createContext, useContext, useState } from 'react'

const ProjectToggleContext = createContext(1 as any)

export function useFolder() {
  return useContext(ProjectToggleContext)
}

export default function ProjectProvider({ children }:any) {
  const [Open, setOpen] = useState(true)
  const OpenToggle = () => {
    setOpen(!Open)
  }

  return (
    <ProjectToggleContext.Provider value={{ Open, OpenToggle }}>
      {children}
    </ProjectToggleContext.Provider>
  )
}