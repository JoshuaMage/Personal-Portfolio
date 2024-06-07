import React, { useState } from 'react';
import "./PortfolioSelection-CSS/Carousel.css";

const Portfolioimg = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="carousel-content">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className="carousel-button next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Portfolioimg;
