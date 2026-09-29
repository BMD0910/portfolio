import { Mail } from 'lucide-react'
import { socialLinks } from '../../data/portfolio'

export function Footer() {
  return <footer className="footer"><div className="footer-top">
            <a className="brand" href="#accueil">
                <span className="brand-mark">BMD</span>
                <span className="brand-name">Baye Mor Diouf<small>Développeur Full-Stack & Mobile</small></span>
            </a><div className="footer-links">
            <a href="#accueil">Accueil</a>
            <a href="#a-propos">À propos</a>
            <a href="#competences">Compétences</a>
            <a href="#projets">Projets</a>
            <a href="#formation">Formation</a>
            <a href="#contact">Contact</a>
        </div>
        <div className="social-list">
            {socialLinks.map((item) => (
                <a key={item.label} href="#contact" aria-label={item.label}>
                    {item.short}
                </a>
            ))}
        </div>
    </div>
    <div className="footer-bottom">
        <span>© 2025 Baye Mor Diouf. Tous droits réservés.</span>
        <span>
            <Mail size={12} /> Made with <b>♥</b> by BMD
        </span>
    </div>
</footer>
}
