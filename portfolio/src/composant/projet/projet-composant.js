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
               <span className='titre-projet'>Le titre de notre Projet de classe</span>
               <span className='description-projet'>
               Pour ajouter une ombre à une carte 
               (comme dans le style des slides ou 
               cartes modernes), vous pouvez utiliser
                la propriété CSS box-shadow
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
                  <span></span>
               </span>
           </span>
           
        </div>
      );
}

export default ProjetComposant;
