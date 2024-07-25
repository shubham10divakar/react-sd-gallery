import React, { useState } from 'react';
import './Lightbox.css';

const Lightbox = ({ image, images, onClose, onNext, onPrev }) => {
  const [currentIndex, setCurrentIndex] = useState(images.indexOf(image));

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    onNext(images[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    onPrev(images[prevIndex]);
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content">
        <button className="arrow arrow-left" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
          &lt;
        </button>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="lightbox-image" />
        <div className="lightbox-caption">{images[currentIndex].caption}</div>
        <button className="arrow arrow-right" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
