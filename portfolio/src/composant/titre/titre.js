import React, { useEffect, useState } from 'react';
import './titre.css';




const Titre = (props) => {
      
      return (
        <div className="titre">
            <span className='contenu_titre'>{props.message}</span>
        </div>
      );
}

export default Titre;
