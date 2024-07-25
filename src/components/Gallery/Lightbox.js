import React from 'react';
import './Lightbox.css'

const Lightbox = ({ image, onClose }) => {
    return (
      <div className="lightbox-overlay" onClick={onClose}>
        <div className="lightbox-content">
          <img src={image.src} alt={image.alt} className="lightbox-image" />
          <div className="lightbox-caption">{image.caption}</div>
        </div>
      </div>
    );
  };

export default Lightbox;
