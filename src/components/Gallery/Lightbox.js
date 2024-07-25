import React, { useState } from 'react';
import './Lightbox.css';

const Lightbox = ({ image, images, onClose, onNext, onPrev }) => {
  const [currentIndex, setCurrentIndex] = useState(images.indexOf(image));
  const [zoom, setZoom] = useState(1);

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

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
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
