import { BriefcaseBusiness, Code2, GraduationCap, Star, Timer } from 'lucide-react'
import parcoursImage from '../../assets/img_parcour.jpeg'

const metrics = [[Code2, '5+', 'Projets réalisés'], [GraduationCap, '1', 'Formation en cours'], [BriefcaseBusiness, '1', 'Stage effectué'], [Timer, '2 ans', "D'expérience"], [Star, '100%', 'Motivation']]

export function Metrics() { return <section className="metrics section-frame" id="parcours" style={{ '--metrics-image': `url(${parcoursImage})` }}><div className="metrics-copy"><span className="section-kicker">Quelques repères de mon expérience.</span><h2>Mon parcours <span>en chiffres</span></h2></div><div className="metrics-grid">{metrics.map(([Icon, value, label]) => <div className="metric" key={label}><Icon size={20} /><strong>{value}</strong><span>{label}</span></div>)}</div><p className="quote">« Le code est ma façon<br /> de créer un meilleur avenir. »</p></section> }