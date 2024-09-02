import React from 'react';
import { Canvas } from '@react-three/fiber';
import Spacebg from './assets/Spacebg';
import './App.css';
import { OrbitControls } from '@react-three/drei';
import Header from './Header';
import Aboutme from './Aboutme';
import Techstack from './Techstack';
import Project from './Project';
import Medoc from './Medoc';
import Footer from './Footer';
import Fandv from './Fandv';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="canvas-container">
        <Canvas>
          <OrbitControls
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={0}
            enableZoom={false}
          />
          <Spacebg />
        </Canvas>
      </div>
      <div className="content">
       
        <div id="about"  className='portf'>WELCOME TO MY PORTFOLIO</div>
        <div className="pageabout"> 
          <Aboutme />
        </div>
        <div id="medoc" className="page">
          <Medoc />
        </div>
        <div id="techstack" className="page">
          <Techstack />
        </div>

        <div className="page">
          <Fandv />
        </div>
        
        <div id="projects" className='projecthead'>PROJECT</div>
        <div className="page1">
          <Project />
        </div>



        <Footer />
        {/* Add more pages as needed */}
      </div>
      
    </div>
  );
}

export default App;
