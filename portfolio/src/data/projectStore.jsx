import { projects } from './portfolio'
import { ProjectContext } from './ProjectContext'

export function ProjectProvider({ children }) {
  return <ProjectContext.Provider value={{ projects }}>{children}</ProjectContext.Provider>
}
