import React from 'react';
import './App.css';
import NavBar from './composant/nav-bar/nav-bar';
import Competence from './composant/competence/competence';
import Presentation from './composant/presentation/presentation';
import Etude from './composant/etude/etude';
import Projet from './composant/projet/projet';


function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Presentation></Presentation>
        <span className='blog-competence'>
           <Competence></Competence>
        </span>
        <span className='Etude'>
          <Etude></Etude>
        </span>
        <span className='Projet'>
          <Projet></Projet>
        </span>
        
    </div>
  );
}

export default App;
