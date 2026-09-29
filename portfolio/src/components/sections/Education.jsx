import { GraduationCap } from 'lucide-react'
import formationImage from '../../assets/img_formation.jpeg'

const education = [['2026', 'Master 2 Systèmes d’Information (à venir)', 'Université Alioune Diop de Bambey (UADB)', 'Mémoire : Télémédecine + IA médicale (Python / TensorFlow)'], ['2025', 'Master 1 Systèmes d’Information', 'Université Alioune Diop de Bambey (UADB)', 'Attestation à collecter prochainement'], ['2024', 'Licence en Ingénierie Informatique', 'Université Abdou Sek de Ziguinchor (UASZ)', 'Préspécialité par le Master Informatique - Génie Logiciel']]

export function Education() {
  return <section className="education content-section section-frame" id="formation"><div className="education-copy"><div className="section-heading"><span className="section-kicker">Un parcours d’apprentissage continu</span><h2>Ma <span>formation</span></h2></div><div className="timeline">{education.map(([year, title, school, detail]) => <div className="timeline-item" key={year}><span className="timeline-year">{year}</span><div><h3>{title}</h3><p>{school}</p><small>{detail}</small></div></div>)}</div></div><div className="education-media" style={{ '--education-image': `url(${formationImage})` }}><GraduationCap size={28} /><b>La formation est la clé<br />de chaque grande réussite.</b></div></section>
}