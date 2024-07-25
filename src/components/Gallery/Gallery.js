import React, { useState } from 'react';
import { GalleryCore } from './GalleryCore';
import Lightbox from './Lightbox';

export const Gallery = ({ images}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handleNextImage = (nextImage) => {
    setSelectedImage(nextImage);
  };

  const handlePrevImage = (prevImage) => {
    setSelectedImage(prevImage);
  };

  return (
    <div>
      <GalleryCore images={images} onImageClick={handleImageClick} />
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          images={images}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
          autoplayTime={2000}
        />
      )}
    </div>
  );
};
