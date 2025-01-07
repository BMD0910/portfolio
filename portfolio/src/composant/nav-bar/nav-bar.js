import React, { useEffect, useState } from 'react';
import './nav-bar.css';



const NavBar = () => {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
       
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 300) {
        // L'utilisateur fait défiler vers le bas et a dépassé 300 pixels
        setShowNavbar(false);
      } else if (scrollTop < lastScrollTop) {
        // L'utilisateur fait défiler vers le haut
        setShowNavbar(true);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'event listener à la destruction du composant
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);


  // const $menu = document.querySelector(".nav");
  // const $menuDrop = document.querySelector(".menu-drop");
  // const $btnmenu = document.querySelector(".btn-menu");
  // const $linea1 = document.querySelector("#linea1");
  // const $linea2 = document.querySelector("#linea2");
  // const $linea3 = document.querySelector("#linea3");

  // $btnmenu.addEventListener("click", () => {
  //   $linea1.classList.toggle("activelinea1__bars-menu");
  //   $linea2.classList.toggle("activelinea2__bars-menu");
  //   $linea3.classList.toggle("activelinea3__bars-menu");
  //   $menu.classList.toggle("menu-activado");
  //   $menuDrop.classList.toggle("activa-menu-drop");
  // });

  // $menuDrop.addEventListener("click", () => {
  //   $linea1.classList.toggle("activelinea1__bars-menu");
  //   $linea2.classList.toggle("activelinea2__bars-menu");
  //   $linea3.classList.toggle("activelinea3__bars-menu");
  //   $menu.classList.toggle("menu-activado");
  //   $menuDrop.classList.toggle("activa-menu-drop");
  // });

  
 
      
      return (
        <div className={` navBar  ${showNavbar ? 'show' : 'hide'}`}>
          <header class="header">
            <h1 id="inicio">Portfolio</h1>
            <nav class="nav">
              <ul class="ul-nav">
                <a href="#propos">
                  <li class="li-nav">À propos de moi</li>
                </a>

                <a href="#competence">
                  <li class="li-nav">Compétences</li>
                </a>

                <a href="#etude">
                  <li class="li-nav">Études</li>
                </a>

                <a href="#projet">
                  <li class="li-nav">Projets</li>
                </a>
                {/* <a href="#sobremi">
                  <li class="li-nav">À propos de moi</li>
                </a>

                <a href="#contacto">
                  <li class="li-nav">Contact</li>
                </a> */}
              </ul>
            </nav>
            {/* <div class="container-bnt-menu">
              <div class="btn-menu">
                <span class="linea-menu" id="linea1"></span>
                <span class="linea-menu" id="linea2"></span>
                <span class="linea-menu" id="linea3"></span>
              </div>
            </div> */}


          </header>

        </div>
      );
}

export default NavBar;
