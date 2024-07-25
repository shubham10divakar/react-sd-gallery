import React from 'react';

const Lightbox = ({ image, onClose }) => {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <img src={image.src} alt={image.alt} className="lightbox-image" />
    </div>
  );
};

export default Lightbox;
