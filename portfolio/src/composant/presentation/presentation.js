import React, { useEffect, useState } from 'react';
import './presentation.css';
import { Facebook, X , LinkedIn} from '@mui/icons-material';
import profil from './../../../src/asset/img/profil2.jpeg' ;
import cv from './../../../src/asset/mon_cv.pdf'



const Presentation = () => {

      const handleClick = () => {
        
        window.open(cv, '_blank');
      };
      
      return (
        <div className="presentation" id='propos'>
            <div className='description-profil'>
                <span className='nom'>Baye mor Diouf</span>
                <span className='fontion'>
                  Développeur full-stack 
                </span>
                <span className='detail'>
                  Développeur full-stack titulaire d'une licence en ingénierie informatique,
                  je dispose de compétences variées en programmation, technologies web,
                  bases de données, administration système et réseau. Mon expérience inclut
                  également l'utilisation de frameworks modernes et d'outils de conception, 
                  me permettant de développer des solutions efficaces et adaptées à divers 
                  besoins.
                  <h5>Téléphone : 77 104 42 13</h5>
                  <h5>Email : bmd09102000@gmail.com</h5>
                </span>
                <span className='btn-description'>
                    <span className='btn-description1' onClick={handleClick}>Curriculum vitae</span>
                    <a className='btn-description2'href="https://wa.me/771044213" target="_blank">WhatsApp</a>
                </span> 
                <span className='btn-reseaux'> 
                  <span className='msg'> Follow me on : </span>
                  
                  <a className='icon-reseau' href='https://www.facebook.com/bayemor.diouf.52?locale=fr_FR' target="_blank"><Facebook sx={{fontSize : "2em" , color:"#01be96" }}></Facebook></a>
                  <a className='icon-reseau' href='https://x.com/Baye_mor_Diouf' target="_blank"><X sx={{fontSize : "2em" , color:"#01be96" }}></X></a>
                  <a className='icon-reseau' href='https://www.linkedin.com/in/baye-mor-diouf-394a402a5' target="_blank"><LinkedIn sx={{fontSize : "2em" , color:"#01be96" }}></LinkedIn></a>
                </span>
            </div>
            <div className='img-profil'>
                <img src={profil}></img>
            </div>
            
        </div>
      );
}

export default Presentation;
