import React from 'react';
import './css/Medoc.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import threejs from '../public/icons/threejs.png';
import me from '../public/me.jpeg';

// Component for loading and displaying a 3D model
const Model3D = () => {
  const { scene } = useGLTF('/IRONGIANT.glb'); // Replace with your 3D model path

  // Detect screen width and set scale accordingly
  const isMobile = window.innerWidth <= 600;

  // Adjust the scale based on whether the user is on mobile or desktop
  const scale = isMobile ? 0.6 : 0.6;

  // Center the model and move it down
  scene.position.set(0, -3, 0);
  scene.scale.set(scale, scale, scale);
  scene.rotation.y = Math.PI / -2;

  return <primitive object={scene} />;
};

const Medoc = () => {
  return (
    <div className='medocwrap'>
      <div className='leftmedoc'>
        <div className='headmedoc'>KNOW ABOUT ME</div>
        <div className='infoheadmedoc'>
          <p>Hey there, I’m Soumyadip Debnath, a student on a quest to master the art of coding, web development, and blockchain technology. Just like in any tactical challenge where precision and strategy are key, I bring a calculated approach to my work, blending creativity with technical skill.</p>
          <p>I completed my schooling at LIONS CALCUTTA GREATER VIDYA MANDIR and am now leveling up at FUTURE INSTITUTE OF TECHNOLOGY, exploring the vast map of life and technology. Currently, I’m working on projects like advanced web development, skin disease detection using machine learning, etc., where I’m deploying my skills in machine learning, Three.js, and all other advanced web development libraries, Solidity, and smart contracts to achieve victory.</p>
          <p>When I’m not coding or studying, you’ll find me in the game zone, strategizing and enjoying my favorite hobby, gaming. My mission? To innovate and create experiences that leave a lasting impact. Ready to connect and discuss new ideas or collaborations? Let’s make some magic happen!</p>
        </div>
        <div className='myprofilepic'>
          <img src={me} alt="Profile" />
        </div>
      </div>
      <div className='rightmedoc' style={{ position: 'relative' }}>
        <Canvas>
          <Suspense fallback={null}>
            {/* Ambient light for general illumination */}
            <ambientLight intensity={1} />

            {/* Directional light for more defined shadows and highlights */}
            <directionalLight 
              position={[5, 10, 5]} 
              intensity={5} 
              castShadow
              shadow-mapSize-width={512} 
              shadow-mapSize-height={512} 
            />

            {/* Spot light for a focused, cone-shaped light effect */}
            <spotLight 
              position={[0, 0, 0]} 
              angle={Math.PI / 6} 
              penumbra={1} 
              intensity={100} 
              castShadow
              shadow-mapSize-width={512} 
              shadow-mapSize-height={512} 
            />

            {/* Additional spot light to cover more angles */}
            <spotLight 
              position={[5, 10, -5]} 
              angle={Math.PI / 6} 
              penumbra={1} 
              intensity={100} 
              castShadow
              shadow-mapSize-width={512} 
              shadow-mapSize-height={512} 
            />

            {/* Spot light from the back of the model */}
            <spotLight 
              position={[5, 10, -5]}  // Positioned behind the model
              angle={Math.PI / 6} 
              penumbra={1} 
              intensity={1} 
              castShadow
              shadow-mapSize-width={512} 
              shadow-mapSize-height={512} 
            />

            {/* Controls for orbiting the model */}
            <OrbitControls
              enableZoom={false} // Disable zoom
              enablePan={false} // Disable panning
              enableRotate={true} // Enable rotation
              maxPolarAngle={Math.PI / 2} // Limit vertical movement
              minPolarAngle={Math.PI / 3} // Adjust as needed
            />

            {/* 3D model */}
            <Model3D />
          </Suspense>
          {/* Set the camera position and orientation */}
          <perspectiveCamera position={[5, 1, 0]} />
        </Canvas>

        {/* Buttons on top of the canvas */}
        <a 
          href="#projects" 
          className='scroll-button up-button'
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L5 12H19L12 5Z" fill="currentColor"/>
          </svg>
        </a>
        
        <a 
          href="#techstack" 
          className='scroll-button down-button'
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19L19 12H5L12 19Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Medoc;
