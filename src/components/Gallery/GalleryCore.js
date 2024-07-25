import React from 'react';
import './GalleryCore.css'

export const GalleryCore = ({ images, onImageClick }) => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="image-item"
          onClick={() => onImageClick(index)}
        />
      ))}
    </div>
  );
};

