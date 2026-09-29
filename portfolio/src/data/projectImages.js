import roktakImage from '../assets/img-projet1-raktak.jpeg'
import wernaImage from '../assets/img-projet2-weerna.jpeg'
import diisooImage from '../assets/img-projet3-diisoo.jpeg'
import bmDigitalImage from '../assets/img-projet4-bmdigta.jpeg'

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