import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGallerys } from './ImageGallery.styled';

const ImageGallery = ({ images, onImageClick }) => (
  <ImageGallerys>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        onClick={() => onImageClick(largeImageURL)}
      />
    ))}
  </ImageGallerys>
);

export default ImageGallery;
