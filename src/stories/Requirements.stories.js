import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
import { Gallery } from '../components/Gallery/Gallery';
import image1 from '../../public/images/img-1.jpg'
import image2 from '../../public/images/channelLogo.png'
import image3 from '../../public/images/model_plot.png'
import image4 from '../../public/images/Screenshot 2024-07-21 104258.png'


const stories = storiesOf('App Test', module);

stories.add('App', () => {
 
  const images = [
    { src: image1, alt: 'Image 1', caption: 'test1 caption' },
    { src: image2, alt: 'Image 2', caption: 'test1 caption' },
    { src: image3, alt: 'Image 1', caption: 'test1 caption' },
    { src: image4, alt: 'Image 1', caption: 'test1 caption' },
    { src: image3, alt: 'Image 1', caption: 'test1 caption' },
    { src: image2, alt: 'Image 2', caption: 'test1 caption' },
    { src: image1, alt: 'Image 1', caption: 'test1 caption' },
    { src: image4, alt: 'Image 1', caption: 'test1 caption' },
    { src: image1, alt: 'Image 1', caption: 'test1 caption' },
    { src: image2, alt: 'Image 2', caption: 'test1 caption' },
    { src: image3, alt: 'Image 1', caption: 'test1 caption' },
    { src: image4, alt: 'Image 1', caption: 'test1 caption' },
    // Add more images as needed
  ];

  return (
    <div>
      <Gallery images={images}/>
    </div>
  );
});
