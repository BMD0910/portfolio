import React from 'react';

import './etude.css';
import Titre from '../titre/titre';




const Etude = () => {
      
      return (
        <div className="blog-etude">
            <Titre  message='Etude' className='titre1'></Titre>
            <ul className='etudes'>
                <li className='etude'>
                   <span className='entete'><span className='point'></span><span className='date-etude'>En cour</span></span>
                   <span className='titre-etude'>Master en Systeme d'information</span>
                   <span className='cotenue-etude'>Universite Alione Diop de Bambey</span>
                </li>
                <li className='etude'>
                   <span className='entete'><span className='point'></span><span className='date-etude'>2021-2024</span></span> 
                   <span className='titre-etude'>Licence en ingenieurie informatique</span>
                   <span className='cotenue-etude'>Universite Assane Seck de ziguinchor</span>
                </li>
                <li className='etude'>
                   <span className='entete'><span className='point'></span><span className='date-etude'>2019-2020</span></span>
                   <span className='titre-etude'>Bacalaurea serie s2</span>
                   <span className='cotenue-etude'>Lycee seydina limamoulaye</span>
                </li>
            </ul>
        </div>
      );
}

export default Etude;
