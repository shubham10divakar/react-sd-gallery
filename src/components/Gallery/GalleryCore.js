import React from 'react';
import './GalleryCore.css'

export const GalleryCore = ({ images, onImageClick }) => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div className="image-wrapper" key={index} onClick={() => onImageClick(index)}>
          <img
            src={image.src}
            alt={image.alt}
            className="image-item"
            loading="lazy" // For native lazy loading
          />
          <div className="image-caption">{image.caption}</div>
        </div>
      ))}
    </div>
  );
};

