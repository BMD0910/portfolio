import React, { useEffect, useState } from 'react';
import './presentation.css';
import { Facebook, X , LinkedIn} from '@mui/icons-material';
import profil from './../../../src/asset/img/profil1.jpg' ;
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
                     Con más de 1 año de experiencia en la creación
                     de experiencias web atractivas y funcionales. 
                     Experto en tecnologías front-end, incluyendo HTML5,
                     CSS3, JavaScript y frameworks como React, Next.js, Astro.
                     Capaz de traducir diseños creativos en código interactivo 
                     y optimizar la velocidad y el rendimiento del sitio web.
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
