import roktakImage from '../assets/img-projet1-raktak.jpeg'
import wernaImage from '../assets/weerna.jpg'
import diisooImage from '../assets/img-projet3-diisoo.jpeg'
import bmDigitalImage from '../assets/gestion_certif.png'

export const projectImages = {
  Rokotekk: roktakImage,
  WERNA: wernaImage,
  'ASC Disoo': diisooImage,
  'BM Digital': bmDigitalImage,
}

export const projectImageOptions = Object.keys(projectImages)

export function getProjectImage(project) {
  return project.imageData || projectImages[project.imageKey || project.name]
}