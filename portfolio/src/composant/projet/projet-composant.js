import React from 'react';

import './projet-composant.css';





const ProjetComposant = (props) => {
      
      return (
        <div className="projet">
           <span className='image-projet' style={{backgroundImage: `url('${props.projet.image}')`,
                  backgroundSize: 'cover' ,
                  backgroundPosition: 'center',
                }}>
           </span>
           <span className='contenue-projet'>
               <span className='titre-projet'>{props.projet.name}</span>
               <span className='description-projet'>
                   {props.projet.description}
               </span>
               <span className='bas-projet'>
                  <span className='outils'>
                    {props.projet.outils.slice(0, 2).map((logo, index) => (     
                      <span className='logo-outils' key={index} style={{backgroundImage: `url('${logo}')`,
                              backgroundSize: 'cover' ,
                              backgroundPosition: 'center',
                            }}>
                      </span>
                    ))} 
                  </span>
                  <a href={props.projet.lien} className='boutton-projet'>
                      Voir +
                  </a>
               </span>
              
           </span>
           
        </div>
      );
}

export default ProjetComposant;
