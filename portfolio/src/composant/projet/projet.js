import React , { useEffect, useState }  from 'react';

import { PROJETS } from './liste-projet';
import './projet.css';
import Titre from '../titre/titre';
import ProjetComposant from './projet-composant';



const Projet = () => {
    const [projets , setProjets] = useState([]) ;

    useEffect(() => {   
      setProjets(PROJETS) 
    }, []);
        
    return (
      <div className="blog-projet">
          <Titre  message='Projets' className='titre1'></Titre>

            <div className='projets'>
                {projets.slice(0, 4).map((projet, index) => (
                  <ProjetComposant projet={projet} key={index}></ProjetComposant>
                ))}
            </div>
      </div>
    );
}

export default Projet;
