import React, { useState, useRef } from 'react';
import './css/fandv.css';

const Fandv = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='fandvwrap' onClick={handlePlayPause} style={{ cursor: 'pointer' }}>
      <div className='top-text'>"Think outside the box? I didn’t even know there was a box."</div>
      <video ref={videoRef} src="./public/carvideo.mp4" playsInline>
        Your browser does not support the video tag.
      </video>
      <div className='hover-text'>Click to Play the Video</div>
    </div>
  );
}

export default Fandv;
