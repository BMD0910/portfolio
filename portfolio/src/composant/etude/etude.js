import React from 'react';

import './etude.css';
import Titre from '../titre/titre';




const Etude = () => {
      
      return (
        <div className="blog-etude" id='etude'>
            <Titre  message='Études' className='titre1'></Titre>
            <ul className='etudes'>
                <li className='etude'>
                   <span className='entete'><span className='point'></span><span className='date-etude'>En cour</span></span>
                   <span className='titre-etude'>Master en Systeme d'information</span>
                   <span className='cotenue-etude'>Université Alione Diop de Bambey</span>
                </li>
                <li className='etude'>
                   <span className='entete'><span className='point'></span><span className='date-etude'>2021-2024</span></span> 
                   <span className='titre-etude'>Licence en ingénieurie informatique</span>
                   <span className='cotenue-etude'>Université Assane Seck de ziguinchor</span>
                </li>
                <li className='etude'>
                   <span className='entete'><span className='point'></span><span className='date-etude'>2019-2020</span></span>
                   <span className='titre-etude'>Bacalauréa serie s2</span>
                   <span className='cotenue-etude'>Lycée seydina limamoulaye</span>
                </li>
            </ul>
        </div>
      );
}

export default Etude;
