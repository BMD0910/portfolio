import { Edit3, LogOut, Plus, Save, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projectImageOptions } from '../data/projectImages'
import { useProjects } from '../data/useProjects'

const ADMIN_PASSWORD = 'baye1touba'
const emptyProject = { name: '', slug: '', imageKey: projectImageOptions[0], imageData: '', externalUrl: '', type: '', details: '', tags: [], tone: 'mint' }

function makeSlug(name) {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function readImage(file, onLoad) {
  if (!file) return
  const reader = new FileReader()
  reader.addEventListener('load', () => onLoad(reader.result))
  reader.readAsDataURL(file)
}

export function AdminPage() {
  const { projects, setProjects } = useProjects()
  const [authenticated, setAuthenticated] = useState(() => window.sessionStorage.getItem('portfolio-admin') === 'true')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [editingSlug, setEditingSlug] = useState(null)
  const [form, setForm] = useState(emptyProject)

  function login(event) {
    event.preventDefault()
    if (password === ADMIN_PASSWORD) {
      window.sessionStorage.setItem('portfolio-admin', 'true')
      setAuthenticated(true)
      setError('')
    } else setError('Mot de passe incorrect.')
  }

  function logout() {
    window.sessionStorage.removeItem('portfolio-admin')
    setAuthenticated(false)
  }

  function startCreate() {
    setEditingSlug(null)
    setForm(emptyProject)
  }

  function startEdit(project) {
    setEditingSlug(project.slug)
    setForm({ ...project, tags: project.tags.join(', ') })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleImageUpload(event) {
    readImage(event.target.files[0], (imageData) => setForm((current) => ({ ...current, imageData })))
  }

  function saveProject(event) {
    event.preventDefault()
    const project = {
      ...form,
      slug: makeSlug(form.name),
      tags: (Array.isArray(form.tags) ? form.tags : form.tags.split(',')).map((tag) => tag.trim()).filter(Boolean),
    }
    if (!project.name || !project.type) return
    setProjects((current) => editingSlug ? current.map((item) => item.slug === editingSlug ? project : item) : [...current, project])
    startCreate()
  }

  function deleteProject(slug) {
    if (window.confirm('Supprimer ce projet ?')) setProjects((current) => current.filter((project) => project.slug !== slug))
  }

  if (!authenticated) return <main className="admin-login"><form className="admin-login-card" onSubmit={login}><Link className="brand" to="/"><span className="brand-mark">BMD</span><span className="brand-name">Baye Mor Diouf</span></Link><span className="section-kicker">Espace privé</span><h1>Back-office</h1><p>Connectez-vous pour gérer les projets du portfolio.</p><label>Mot de passe<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoFocus /></label>{error && <small className="admin-error">{error}</small>}<button className="primary-button" type="submit">Accéder au back-office</button><Link className="back-link" to="/">Retour au portfolio</Link></form></main>

  return <main className="admin-shell">
    <header className="admin-header"><div><span className="section-kicker">Espace privé</span><h1>Gestion des projets</h1><p>Les modifications sont enregistrées dans ce navigateur.</p></div><div className="admin-actions"><button className="outline-button" onClick={startCreate}><Plus size={15} /> Nouveau projet</button><button className="icon-button" onClick={logout} aria-label="Se déconnecter"><LogOut size={18} /></button></div></header>
    <form className="admin-form" onSubmit={saveProject}>
      <h2>{editingSlug ? 'Modifier le projet' : 'Ajouter un projet'}</h2>
      <label>Nom du projet<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Ex. Mon application" required /></label>
      <label>Image existante<select value={form.imageKey} onChange={(event) => setForm({ ...form, imageKey: event.target.value })}>{projectImageOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
      <label className="upload-field">Nouvelle image<input type="file" accept="image/png,image/jpeg,image/webp" onChange={handleImageUpload} /><small>Choisir un fichier remplace l’image existante après l’enregistrement.</small>{form.imageData && <img className="admin-image-preview" src={form.imageData} alt="Aperçu de la nouvelle image" />}</label>
      <label>Description courte<input value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })} placeholder="Présentez le projet en une phrase" required /></label>
      <label className="full-field">Lien à visiter<input type="url" value={form.externalUrl || ''} onChange={(event) => setForm({ ...form, externalUrl: event.target.value })} placeholder="https://mon-projet.com" /><small>Ce lien sera ouvert dans un nouvel onglet depuis la page détail.</small></label>
      <label className="full-field">Détails<textarea value={form.details} onChange={(event) => setForm({ ...form, details: event.target.value })} placeholder="Décrivez le projet..." rows="4" /></label>
      <label className="full-field">Technologies<input value={Array.isArray(form.tags) ? form.tags.join(', ') : form.tags} onChange={(event) => setForm({ ...form, tags: event.target.value })} placeholder="React, Laravel, MySQL" /></label>
      <label>Couleur<select value={form.tone} onChange={(event) => setForm({ ...form, tone: event.target.value })}><option value="mint">Mint</option><option value="green">Green</option><option value="coral">Coral</option><option value="blue">Blue</option></select></label>
      <div className="admin-form-actions"><button className="primary-button" type="submit"><Save size={15} /> Enregistrer</button><button className="outline-button" type="button" onClick={startCreate}>Annuler</button></div>
    </form>
    <section className="admin-project-list"><h2>Projets publiés ({projects.length})</h2>{projects.map((project) => <article className="admin-project-row" key={project.slug}><div><strong>{project.name}</strong><span>{project.type}</span></div><div><button className="icon-button" onClick={() => startEdit(project)} aria-label={`Modifier ${project.name}`}><Edit3 size={16} /></button><button className="icon-button danger-button" onClick={() => deleteProject(project.slug)} aria-label={`Supprimer ${project.name}`}><Trash2 size={16} /></button></div></article>)}</section>
  </main>
}
