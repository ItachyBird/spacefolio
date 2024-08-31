import React, { useEffect } from 'react';
import { gsap, TimelineMax } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import './css/Aboutme.css'; // Import CSS for the About section
import { FaGithub, FaLinkedin, FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './App.css';

gsap.registerPlugin(TextPlugin);

const About = () => {
  useEffect(() => {
    // Text animation for the first line
    gsap.fromTo(
      '.line1',
      { text: '' },
      { text: 'Hey there! I am Soumyadip Debnath,', duration: 3, ease: 'none' }
    );

    // Animation for the static part "I am a"
    gsap.fromTo(
      '.static-text',
      { text: '' },
      { text: 'a passionate ', duration: 3, ease: 'none', delay: 3 }
    );

    // Animation for looping professions in the second line
    const professions = ['Web Developer', 'Designer', 'Creator', 'Engineer','Gamer','Artist'];
    const tl = new TimelineMax({ repeat: -1, delay: 6 }); // Delay to start after the static text
    professions.forEach((profession) => {
      tl.to('.profession', { text: profession, duration: 2, ease: 'none' })
        .to('.profession', { text: '', duration: 1, ease: 'none', delay: 0.5 }); // Add 0.5s delay before the next profession
    });

    // Text animation for the third line
    gsap.fromTo(
      '.line3',
      { text: '' },
      { text: 'one line of code at a time.<br /> Let\'s build something amazing together <br /> reach out and let\'s make it happen!', duration: 5, ease: 'none', delay: 10 }
    );

    // Icon animation
    gsap.fromTo(
      '.social-icons a',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.5, delay: 17 }
    );
  }, []);

  return (
    <div className="aboutme">
      <p className='line1'></p>
      <p className='line2'>
        <span className="static-text"></span><span className="profession"></span>
      </p>
      <p className='line3'></p>
      <div className="social-icons">
        <a href="https://github.com/ItachyBird?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/soumyadip-debnath-04459a231/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/imperfectly_perfect_z?igsh=ZmUyOHpoc2JhZDNn" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://x.com/itachybird?t=Qmeb86jABjNGaQPbgxjWRw&s=08" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="mailto:soumyadipdebnath242@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a> {/* Add email icon here */}
      </div>
    </div>
  );
}

export default About;
