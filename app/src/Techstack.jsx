import React, { useState, useRef, Suspense } from 'react';
import './css/TechStack.css';
import { gsap } from 'gsap';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import blender from '../public/icons/blender.png';
import c from '../public/icons/c.png';
import css from '../public/icons/css.jpeg'; 
import exjs from '../public/icons/exjs.png';
import framermotion from '../public/icons/framermotion.svg';
import gsapIcon from '../public/icons/gsap.png';
import html from '../public/icons/html.png';
import java from '../public/icons/java.png';
import js from '../public/icons/javascript.png';
import nodejs from '../public/icons/js.png';
import linux from '../public/icons/linux.png';
import mongodb from '../public/icons/mongodb.png';
import python from '../public/icons/python.png';
import react from '../public/icons/react.png';
import solidity from '../public/icons/solidity.jpeg';
import springboot from '../public/icons/springboot.png';
import sql from '../public/icons/sql.png';
import tailwind from '../public/icons/tailwind.png';
import threejs from '../public/icons/threejs.png';
import jupytor from '../public/icons/jupytor.png';
import tensorflow from '../public/icons/tensorflow.png'
const LaptopModel = () => {
  const { scene } = useGLTF('/laptop.glb');
  const laptopRef = useRef();

  useFrame(() => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y += 0.01;
    }
  });

  scene.position.set(0, -2, 0);
  return <primitive ref={laptopRef} object={scene} scale={[0.6, 0.6, 0.6]} />;
};

const Techstack = () => {
  const [showIcons, setShowIcons] = useState(false);
  const iconsRef = useRef(null);

  const handleClick = () => {
    setShowIcons(prevState => !prevState);
  };

  React.useEffect(() => {
    if (iconsRef.current) {
      gsap.to(iconsRef.current, {
        opacity: showIcons ? 1 : 0,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.1,
      });
    }
  }, [showIcons]);

  return (
    <div className='wraptechpage'>
      <div className="t">TECH STACK
      <div className='t-text'>Click to see the tech stacks</div>
      </div>
      <div className="techstack" onClick={handleClick}>
        <div className="central-text">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} intensity={3} />
              <pointLight position={[-5, 5, -5]} intensity={10} />
              <spotLight
                position={[0, 10, 0]}
                angle={Math.PI / 6}
                penumbra={1}
                intensity={1000}
                distance={20}
                decay={2}
                color={"#00008B"}
                castShadow
              />
              <OrbitControls enableZoom={false} />
              <LaptopModel />
            </Suspense>
          </Canvas>
        </div>
        <div className="tech-icons" ref={iconsRef}>
          <div className="tech-icon"><img src={react} alt="React" /></div>
          <div className="tech-icon"><img src={js} alt="JavaScript" /></div>
          <div className="tech-icon"><img src={html} alt="HTML" /></div>
          <div className="tech-icon"><img src={css} alt="CSS" /></div>
          <div className="tech-icon"><img src={nodejs} alt="Node.js" /></div>
          <div className="tech-icon"><img src={python} alt="Python" /></div>
          <div className="tech-icon"><img src={java} alt="Java" /></div>
          <div className="tech-icon"><img src={solidity} alt="Solidity" /></div>
          <div className="tech-icon"><img src={blender} alt="Blender" /></div>
          <div className="tech-icon"><img src={gsapIcon} alt="GSAP" /></div>
          <div className="tech-icon"><img src={threejs} alt="Three.js" /></div>
          <div className="tech-icon"><img src={tailwind} alt="Tailwind" /></div>
          <div className="tech-icon"><img src={c} alt="C" /></div>
          <div className="tech-icon"><img src={sql} alt="SQL" /></div>
          <div className="tech-icon"><img src={mongodb} alt="MongoDB" /></div>
          <div className="tech-icon"><img src={exjs} alt="Express.js" /></div>
          <div className="tech-icon"><img src={linux} alt="linux" /></div>
          <div className="tech-icon"><img src={framermotion} alt="Framermotion" /></div>
          <div className="tech-icon"><img src={springboot} alt="Springboot" /></div>
          <div className="tech-icon"><img src={sql} alt="sql" /></div>
          <div className="tech-icon"><img src={jupytor} alt="jupytor" /></div>
          <div className="tech-icon"><img src={tensorflow} alt="tensorflow" /></div>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
