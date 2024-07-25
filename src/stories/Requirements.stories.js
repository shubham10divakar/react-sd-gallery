import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
import { Gallery } from '../components/Gallery/Gallery';
import image1 from '../../public/images/img-1.jpg'
import image2 from '../../public/images/channelLogo.png'


const stories = storiesOf('App Test', module);

stories.add('App', () => {
 
  const images = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image1, alt: 'Image 1' },
    { src: image1, alt: 'Image 1' },
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image1, alt: 'Image 1' },
    { src: image1, alt: 'Image 1' },
    // Add more images as needed
  ];

  return (
    <div>
      <Gallery images={images}/>
    </div>
  );
});
