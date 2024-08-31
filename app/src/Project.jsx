import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './css/Project.css';
import p1 from '../public/project/apple.png'
import p2 from '../public/project/weatherapp.png'
import p3 from '../public/project/gesture.png'
import p4 from '../public/project/movieiot.png'
import p5 from '../public/project/docapp.png'
import p6 from '../public/project/glowbulb.png'
import p7 from '../public/project/portfolio.png'
import p8 from '../public/project/fashion.png'
import p9 from '../public/project/temp.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
gsap.registerPlugin(ScrollToPlugin);

// Array of project details
const projectDetails = [
  {
    id: 1,
    name: "APPLE CONE",
    image: p1,
    shortDesc: "An advanced React-based project setup with Vite, featuring GSAP animations, 3D modeling with Three.js, and TailwindCSS styling." ,
    details: "This project is a modern React-based application scaffolded with Vite, optimized for fast development and production builds. It includes powerful animation capabilities using GSAP and the @gsap/react library for seamless integration with React components. The 3D modeling is handled by the @react-three/fiber and @react-three/drei libraries, which leverage Three.js for rich, interactive 3D graphics. TailwindCSS is integrated for utility-first styling, providing a responsive and customizable design system. The project also uses ESLint for code linting, ensuring consistent code quality, and Vite for efficient bundling and development server features.",
    link:"https://github.com/ItachyBird/apple_clone",
  },

  {
    id: 2,
    name: "FASHION LANDING PAGE",
    image: p7,
    shortDesc: "A visually striking fashion landing page built with React, Vite, and styled using Tailwind CSS. It leverages FontAwesome for icons and GSAP for animations to create an engaging and modern user experience." ,
    details: "This project is a fashion landing page designed to captivate users with a stylish and interactive interface. It incorporates modern web development tools and libraries to deliver a seamless and dynamic experience.",
    link:"https://github.com/ItachyBird/fashion_landing_page", 
  },

  {
    id: 3,
    name: "SPACE THEME PORTFOLIO",
    image: p8,
    shortDesc: "A dynamic portfolio website built with React and Vite, featuring interactive 3D models, animations, and modern design elements. The site utilizes libraries like react-three for 3D effects, GSAP for animations, and Tailwind CSS for styling." ,
    details: "This project is a portfolio website designed to showcase personal or professional work with a modern and interactive user experience. The site leverages a range of advanced web technologies and libraries to create an engaging and visually appealing presentation.",
    link:"https://github.com/ItachyBird/spacefolio",
  },

  {
    id: 4,
    name: "Real time Weather-App",
    image: p2,
    shortDesc: "A React-based weather app that forecasts the weather for any city for the next 7 days, built with Vite and styled using TailwindCSS.",
    details: "This weather app is a modern React application designed to provide 7-day weather forecasts for any city. It leverages Vite for efficient development and production builds, ensuring fast load times and a smooth development experience. The app uses Axios for handling API requests to fetch weather data, making it easy to integrate with any weather API service. The user interface is styled with TailwindCSS, offering a responsive and visually appealing design. The app also includes ESLint for maintaining code quality and consistency throughout the development process.",
    link:"https://github.com/ItachyBird/weatherapp",
  },
  {
    id: 5,
    name: "ASL-Gesture Recoginsation ",
    image: p3,
    shortDesc: "A gesture recognition project using machine learning and deep learning techniques, involving model training with a Jupyter Notebook and real-time gesture detection via a Flask web application.",
    details: "This project focuses on recognizing gestures through computer vision and machine learning. It involves training a gesture recognition model using a Jupyter Notebook, where data is processed, and a deep learning model is trained using LSTM layers. The trained model is deployed through a Flask web application, which captures video in real-time, processes it using MediaPipe for feature extraction, and classifies gestures. The app provides a user-friendly web interface for live gesture detection.",
    link:"https://github.com/ItachyBird/Gesture-detection-asl",
  },
  {
    id: 6,
    name: "OTT-Platform",
    image: p4,
    shortDesc: "A Spring Boot-based OTT (Over-the-Top) platform project designed for web application development with MySQL database integration and support for deploying as a WAR file.",
    details: "This project is an OTT (Over-the-Top) platform built using Spring Boot, a powerful framework for developing Java-based web applications. It leverages Spring Boot's starters for web and data JPA functionalities, enabling rapid development of RESTful APIs and seamless database interactions with MySQL. The project is packaged as a WAR file, making it suitable for deployment on traditional servlet containers like Apache Tomcat. The Maven build tool manages dependencies and plugins, ensuring smooth development and deployment workflows.",
    link:"https://github.com/ItachyBird/ott",
  },
  {
    id: 7,
    name: "DOCTOR BOOKING SYSTEM",
    image: p5,
    shortDesc: "A comprehensive online doctor booking system developed using a MERN (MongoDB, Express, React, Node.js) stack, enabling users to book appointments, manage doctor profiles, and handle patient interactions seamlessly.",
    details: "This online doctor booking system is built on the MERN stack, featuring a Node.js backend with Express for routing and API creation, and MongoDB for managing user and appointment data. The backend includes essential packages like bcrypt for password hashing, jsonwebtoken for secure authentication, and mongoose for data modeling and interactions with MongoDB. The frontend is developed using React, with state management handled by Redux and styling provided by Ant Design (AntD). Axios is used for making HTTP requests, and React Router DOM is used for navigation between pages. The application also includes features like toast notifications for user feedback and Redux Toolkit for managing complex state logic efficiently.",
    link:"https://github.com/ItachyBird/doctor-booking-management",
  },
  {
    id: 8,
    name: "TEMPRATURE CONVERTER",
    image: p9,
    shortDesc: "A React-based temperature converter with 3D animations that converts between Celsius, Fahrenheit, and Kelvin.",
    details: "This React-based temperature converter features dynamic 3D animations to enhance user experience while converting temperatures between Celsius, Fahrenheit, and Kelvin. It combines interactive 3D graphics with an intuitive interface, allowing users to input a temperature in one unit and instantly view the corresponding values in the other two units. The tool’s visual appeal is heightened by its animated components, making the conversion process both engaging and informative.",
    link:"https://github.com/ItachyBird/temperature-converter",
  },

  {
    id: 9,
    name: "GLOW BULB",
    image: p6,
    shortDesc: "A glow bulb effect created with HTML and CSS that illuminates the bulb and reveals the screen when the switch is clicked.",
    details: "This project features an interactive glow bulb effect implemented using HTML and CSS. When the user clicks the switch, the bulb emits a glowing light, illuminating the screen and making it visible. The design leverages CSS animations and transitions to create a realistic lighting effect, enhancing the visual appeal and interactivity of the user interface. The switch toggles the bulb’s glow state, demonstrating a dynamic and engaging use of CSS for creating light effects.",
    link:"https://github.com/ItachyBird/glow-bulb",
  },

  // Add more projects as needed
];

const ProjectCard = ({ name, image, shortDesc, details, link }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.02,
      rotationY: 10,
      boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)',
      duration: 0.6,
      ease: 'power2.out',
      transformStyle: 'preserve-3d',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      rotationY: 0,
      boxShadow: '0 0 0 rgba(0, 255, 255, 0)',
      duration: 0.6,
      ease: 'power2.out',
      transformStyle: 'preserve-3d',
    });
  };

  return (
    <div
      className="project-card"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="front-pic" style={{ backgroundImage: `url(${image})` }}></div>
          <div className="front-info">
            <h3>{name}</h3>
            <p>{shortDesc}</p>
            
          </div>
        </div>
        <div className="card-back">
          <p>{details}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className='gitbutton'>Github</button>
          </a>
          
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const scrollRef = useRef(null);

  React.useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleScroll = (event) => {
      event.preventDefault();

      const scrollAmount = event.deltaY * 1.5;
      const cardWidth = scrollContainer.firstChild.offsetWidth + parseFloat(getComputedStyle(scrollContainer.firstChild).marginRight);
      const newScrollLeft = scrollContainer.scrollLeft + scrollAmount;
      const index = Math.round(newScrollLeft / cardWidth);

      gsap.to(scrollContainer, {
        scrollTo: { x: index * cardWidth },
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const addEventListeners = () => {
      scrollContainer.addEventListener('wheel', handleScroll, { passive: false });
    };

    const removeEventListeners = () => {
      scrollContainer.removeEventListener('wheel', handleScroll);
    };

    if (scrollContainer) {
      addEventListeners();
    }

    return () => {
      if (scrollContainer) {
        removeEventListeners();
      }
    };
  }, []);

  const scrollTo = (direction) => {
    const scrollContainer = scrollRef.current;
    const cardWidth = scrollContainer.firstChild.offsetWidth + parseFloat(getComputedStyle(scrollContainer.firstChild).marginRight);
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

    gsap.to(scrollContainer, {
      scrollLeft: scrollContainer.scrollLeft + scrollAmount,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const cards = projectDetails.map((project) => (
    <ProjectCard 
      key={project.id} 
      name={project.name} 
      image={project.image} 
      shortDesc={project.shortDesc} 
      details={project.details} 
      link={project.link} 
    />
  ));

  return (
    <div className="project-container">
      <button className="scroll-button left" onClick={() => scrollTo('left')}><i className="fas fa-chevron-left"></i></button>
      <div className="scrolling-wrapper" ref={scrollRef}>
        {cards}
      </div>
      <button className="scroll-button right" onClick={() => scrollTo('right')}> <i className="fas fa-chevron-right"></i></button>
    </div>
  );
};

export default Project;
