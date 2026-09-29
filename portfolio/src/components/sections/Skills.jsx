import { Code2, Database, Smartphone, Terminal } from 'lucide-react'
import { skillGroups } from '../../data/portfolio'

import cLogo from '../../assets/image/5-c.png'
import javaLogo from '../../assets/image/2-java.png'
import springLogo from '../../assets/image/2-spring.png'
import htmlLogo from '../../assets/image/3-html.png'
import canvaLogo from '../../assets/image/6-canva.png'
import cssLogo from '../../assets/image/6-css.png'
import djangoLogo from '../../assets/image/6-django.png'
import dockerLogo from '../../assets/image/6-docker.png'
import figmaLogo from '../../assets/image/6-figma.png'
import flutterLogo from '../../assets/image/6-flutter.png'
import gitLogo from '../../assets/image/6-git.png'
import reactNativeLogo from '../../assets/image/6-react-native.png'
import linuxLogo from '../../assets/image/1-linux.png'
import javascriptLogo from '../../assets/image/7-js.png'
import microsoftLogo from '../../assets/image/7-microsoft.png'
import mysqlLogo from '../../assets/image/7-mysql.png'
import pascalLogo from '../../assets/image/7-pascal.png'
import postmanLogo from '../../assets/image/7-postman.png'
import pythonLogo from '../../assets/image/7-python.png'
import reactLogo from '../../assets/image/7-reactjs.png'
import vscodeLogo from '../../assets/image/7-vscode.png'

const icons = [Code2, Database, Smartphone, Terminal]

const skillLogos = {
  Java: javaLogo,
  C: cLogo,
  Python: pythonLogo,
  Pascal: pascalLogo,
  HTML: htmlLogo,
  CSS3: cssLogo,
  JavaScript: javascriptLogo,
  MySQL: mysqlLogo,
  'Spring Boot': springLogo,
  Django: djangoLogo,
  React: reactLogo,
  Flutter: flutterLogo,
  'React Native': reactNativeLogo,
  Figma: figmaLogo,
  Canva: canvaLogo,
  Git: gitLogo,
  Docker: dockerLogo,
  Linux: linuxLogo,
  Windows: microsoftLogo,
  'VS Code': vscodeLogo,
  Postman: postmanLogo,
}

export function Skills() {
  return <section className="content-section section-frame" id="competences"><div className="section-heading"><div><span className="section-kicker">Ce que je maîtrise</span><h2>Mes <span>compétences</span></h2><p>Des technologies modernes pour des solutions performantes.</p></div></div><div className="skill-grid">{skillGroups.map((group, index) => { const Icon = icons[index]; return <article className="skill-card" key={group.title}><Icon className="skill-card-icon" size={18} /><h3>{group.title}</h3><div className="skill-items">{group.skills.map((skill) => <span key={skill}>{skillLogos[skill] ? <img className="skill-logo" src={skillLogos[skill]} alt="" /> : <i className={`skill-dot dot-${index}`} />}{skill}</span>)}</div></article> })}</div></section>
}