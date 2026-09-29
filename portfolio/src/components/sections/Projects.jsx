import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectCard } from '../ProjectCard'
import { useProjects } from '../../data/useProjects'

export function Projects() {
  const { projects } = useProjects()
  return <section className="content-section section-frame" id="projets"><div className="section-heading projects-heading"><div><span className="section-kicker">Quelques réalisations qui illustrent mes compétences et ma passion.</span><h2>Mes <span>projets</span></h2></div><Link className="outline-button" to="/projets">Voir tous les projets <ArrowUpRight size={15} /></Link></div><div className="project-grid">{projects.slice(0, 4).map((project) => <ProjectCard project={project} key={project.slug} />)}</div></section>
}