import { useEffect, useState } from 'react'
import { projects as defaultProjects } from './portfolio'
import { ProjectContext } from './ProjectContext'

const STORAGE_KEY = 'baye-portfolio-projects'

function getStoredProjects() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : defaultProjects
  } catch {
    return defaultProjects
  }
}

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState(getStoredProjects)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
  }, [projects])

  return <ProjectContext.Provider value={{ projects, setProjects }}>{children}</ProjectContext.Provider>
}
