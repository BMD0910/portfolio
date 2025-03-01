import React from 'react';
import Lottie from 'lottie-react';
import Cloud from './../../asset/svg/cloud2.json' ; 
import './competence.css';
import Titre from '../titre/titre';




const Competence = () => {
      
      return (
        <div className="blog-competence" id='competence'>
            <Titre  message='Compétence' className='titre1'></Titre>
            <span className='Competence'>
              <span className='competence'>
                  <ul>
                    <li>
                        <span className='point'></span>
                        <span className='titre-competence'>Langages de programmation :  </span>
                        <span className='detail-competence'> Java , C , Python , Dart </span>
                    </li>
                    <li>
                        <span className='point'></span>
                        <span className='titre-competence'>Développement Web : </span>
                        <span className='detail-competence'> HTML , CSS , JavaScript , scss</span>
                    </li>
                    <li>
                        <span className='point'></span>
                        <span className='titre-competence'>Administration de bases de données : </span>
                        <span className='detail-competence'> SQL ( MySQL , MariaDB )</span>
                    </li>
                    <li>
                        <span className='point'></span>
                        <span className='titre-competence'>Administration des systèmes : </span>
                        <span className='detail-competence'> Windows , Linux</span>
                    </li>
                    <li>
                        <span className='point'></span>  
                        <span className='titre-competence'>Services réseau : DNS , dhcp , ftp , ssh</span>
                        <span className='detail-competence'></span>
                    </li>
                    <li>
                        <span className='point'></span>
                        <span className='titre-competence'>Utilisation de React , Spring-boot , Django et Angular</span>
                        <span className='detail-competence'></span>
                    </li>
                    <li>
                        <span className='point'></span>
                        <span className='titre-competence'>Utilisation de Figma et canva</span>
                        <span className='detail-competence'></span>
                    </li>
                    
                  </ul>
              </span>
              <span className='svg1'>
                  <Lottie animationData={Cloud} style={{ width : '25vw'}} ></Lottie>
              </span>
              
            </span>
        </div>
      );
}

export default Competence;
