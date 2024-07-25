import React from 'react';
import './GalleryCore.css'
import LazyLoad from 'react-lazyload';

export const GalleryCore = ({ images, onImageClick }) => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div className="image-wrapper" key={index} onClick={() => onImageClick(index)}>
          <LazyLoad key={index} height={200} offset={100}>
            <img
              src={image.src}
              alt={image.alt}
              className="image-item"
              loading="lazy" // For native lazy loading
            />
          </LazyLoad>
          <div className="image-caption">{image.caption}</div>
        </div>
      ))}
    </div>
  );
};

