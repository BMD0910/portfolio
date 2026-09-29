import { ArrowDownToLine, Menu, Moon } from 'lucide-react'
import { Link } from 'react-router-dom'
import cvFile from '../../assets/CV-Baye-mor-Diouf.pdf'

const links = [['Accueil', '#accueil'], ['À propos', '#a-propos'], ['Compétences', '#competences'], ['Projets', '#projets'], ['Formation', '#formation'], ['Parcours', '#parcours'], ['Contact', '#contact']]

export function Navbar() {
  return <header className="topbar"><Link className="brand" to="/" aria-label="Accueil, Baye Mor Diouf"><span className="brand-mark">BMD</span><span className="brand-name">Baye Mor Diouf</span></Link><nav className="desktop-nav" aria-label="Navigation principale">{links.map(([label, href], index) => <a className={index === 0 ? 'active' : ''} href={`/${href}`} key={label}>{label}</a>)}</nav><div className="nav-actions"><button className="icon-button" aria-label="Changer le thème"><Moon size={15} /></button><a className="cv-button" href={cvFile} target="_blank" rel="noreferrer"><ArrowDownToLine size={14} /> Télécharger mon CV</a><button className="menu-button icon-button" aria-label="Ouvrir le menu"><Menu size={19} /></button></div></header>
}