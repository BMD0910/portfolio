import React from 'react';
import Lottie from 'lottie-react';
import Cloud from './../../asset/svg/cloud2.json' ; 
import './competence.css';
import Titre from '../titre/titre';




const Competence = () => {
      
      return (
        <div className="blog-competence">
            <Titre  message='Competence' className='titre1'></Titre>
            <span className='Competence'>
              <span className='competence'>
                  <ul>
                    <li>
                        <span className='point'></span>
                        <span className='titre-competence'>Langages de programmation :  </span>
                        <span className='detail-competence'>Java,#C, PythonCreativity</span>
                    </li>
                    <li>
                        <span className='point'></span>
                        <span className='titre-competence'>Développement Web : </span>
                        <span className='detail-competence'> HTML, CSS ,JavaScript</span>
                    </li>
                    <li>
                        <span className='point'></span>
                        <span className='titre-competence'>Administration de bases de données : </span>
                        <span className='detail-competence'> SQL, MySQL</span>-
                    </li>
                    <li>
                        <span className='point'></span>
                        <span className='titre-competence'>Administration système : </span>
                        <span className='detail-competence'> Windows, Linux</span>
                    </li>
                    <li>
                        <span className='point'></span>  
                        <span className='titre-competence'>Services réseau</span>
                        <span className='detail-competence'></span>
                    </li>
                    <li>
                        <span className='point'></span>
                        <span className='titre-competence'>Utilisation de React , Spring-boot , Django et Angular</span>
                        <span className='detail-competence'></span>
                    </li>
                    <li>
                        <span className='point'></span>
                        <span className='titre-competence'>Utilisation de l’outil de design Figma</span>
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
