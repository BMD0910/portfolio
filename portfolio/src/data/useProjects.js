import { useContext } from 'react'
import { ProjectContext } from './ProjectContext'

export function useProjects() {
  return useContext(ProjectContext)
}
