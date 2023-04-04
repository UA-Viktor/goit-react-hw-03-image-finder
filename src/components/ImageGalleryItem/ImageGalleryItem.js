import React from 'react';
import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, webformatURL, onClick }) => (
  <ImageGalleryItemLi key={id}>
    <ImageGalleryItemImage src={webformatURL} alt={id} onClick={onClick} />
  </ImageGalleryItemLi>
);

export default ImageGalleryItem;
