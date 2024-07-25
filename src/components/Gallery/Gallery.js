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

  return (
    <div>
      <GalleryCore images={images} onImageClick={handleImageClick} />
      {selectedImage && <Lightbox image={selectedImage} onClose={handleCloseLightbox} />}
    </div>
  );
};
