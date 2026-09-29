import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { useProjects } from '../data/useProjects'

export function ProjectsPage() {
  const { projects } = useProjects()
  return <div className="inner-page"><div className="inner-page-heading"><Link className="back-link" to="/"><ArrowLeft size={15} /> Retour à l’accueil</Link><span className="section-kicker">Toutes mes réalisations</span><h1>Mes <span>projets</span></h1><p>Découvrez l’ensemble des projets qui illustrent mon parcours, mes choix techniques et ma manière de construire des expériences utiles.</p></div><div className="all-project-grid">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div></div>
}