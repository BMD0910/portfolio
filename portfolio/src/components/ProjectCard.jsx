import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getProjectImage } from '../data/projectImages'

export function ProjectCard({ project }) {
  return <Link className="project-card" to={`/projets/${project.slug}`}><div className={`project-thumb ${project.tone}`}><img src={getProjectImage(project)} alt={`Aperçu du projet ${project.name}`} /><span>Voir le projet</span><ExternalLink size={17} /></div><div className="project-body"><div><h3>{project.name}</h3><ArrowUpRight size={16} /></div><p>{project.type}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></Link>
}