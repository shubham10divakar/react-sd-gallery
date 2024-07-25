import React, { useState, useRef, useEffect } from 'react';
import './Lightbox.css';

const Lightbox = ({ image, images, onClose, onNext, onPrev, autoplayTime = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(images.indexOf(image));
  const [zoom, setZoom] = useState(1);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const lightboxRef = useRef(null);

  useEffect(() => {
    let intervalId;
    if (isAutoplay) {
      intervalId = setInterval(() => {
        handleNext();
      }, autoplayTime);
    }
    return () => clearInterval(intervalId);
  }, [isAutoplay, currentIndex, autoplayTime]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    onNext(images[nextIndex]);
    setZoom(1); // Reset zoom on image change
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    onPrev(images[prevIndex]);
    setZoom(1); // Reset zoom on image change
  };

  const handleZoomIn = () => {
    setZoom(prevZoom => Math.min(prevZoom + 0.2, 3)); // Max zoom level
  };

  const handleZoomOut = () => {
    setZoom(prevZoom => Math.max(prevZoom - 0.2, 1)); // Min zoom level
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setZoom(1); // Reset zoom on thumbnail click
  };

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      lightboxRef.current.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const toggleAutoplay = () => {
    setIsAutoplay(prev => !prev);
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()} ref={lightboxRef}>
        <button className="arrow arrow-left" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
          &lt;
        </button>
        <div className="lightbox-image-container">
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt} 
            className="lightbox-image" 
            style={{ transform: `scale(${zoom})` }} 
          />
        </div>
        <div className="lightbox-caption">{images[currentIndex].caption}</div>
        <button className="arrow arrow-right" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
          &gt;
        </button>
        <div className="zoom-controls">
          <button onClick={handleZoomIn}>+</button>
          <button onClick={handleZoomOut}>-</button>
          <button onClick={handleFullScreen}>⤢</button>
          <button onClick={toggleAutoplay}>
            {isAutoplay ? 'Pause' : 'Play'}
          </button>
        </div>
        <div className="thumbnail-container">
          {images.map((thumb, index) => (
            <img
              key={index}
              src={thumb.thumbnail || thumb.src}
              alt={thumb.alt_thumbnail || thumb.alt}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
