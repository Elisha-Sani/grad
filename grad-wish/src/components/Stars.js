import React, { useState, useEffect } from 'react';
import '../styles/Stars.css';

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStars([...stars, { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }]);
    }, 100);

    return () => clearInterval(intervalId);
  }, [stars]);

  return (
    <div className="stars">
      {stars.map((star, index) => (
        <div key={index} className="star" style={{ left: star.x, top: star.y }}></div>
      ))}
    </div>
  );
};

export default Stars;