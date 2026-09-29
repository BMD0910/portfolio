import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useProjects } from '../data/useProjects'
import { getProjectImage } from '../data/projectImages'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const { projects } = useProjects()
  const project = projects.find((item) => item.slug === slug)

  if (!project) return <div className="inner-page not-found"><h1>Projet introuvable</h1><Link className="primary-button" to="/projets"><ArrowLeft size={15} /> Voir tous les projets</Link></div>

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length]
  return <div className="inner-page project-detail"><Link className="back-link" to="/projets"><ArrowLeft size={15} /> Tous les projets</Link><div className={`detail-hero ${project.tone}`}><img src={getProjectImage(project)} alt={`Vue détaillée du projet ${project.name}`} /></div><div className="detail-content"><div><span className="section-kicker">Étude de projet</span><h1>{project.name}</h1><p className="detail-lead">{project.type}</p><p>{project.details}</p><div className="tag-list detail-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><aside className="detail-aside"><span>Technologies</span>{project.tags.map((tag) => <b key={tag}>{tag}</b>)}{project.externalUrl && <a className="primary-button visit-button" href={project.externalUrl} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Visiter le projet</a>}<a className="outline-button" href="/#contact"><ExternalLink size={15} /> Discuter d’un projet</a></aside></div><div className="next-project"><span>Projet suivant</span><Link to={`/projets/${nextProject.slug}`}>{nextProject.name} <ArrowLeft size={15} /></Link></div></div>
}