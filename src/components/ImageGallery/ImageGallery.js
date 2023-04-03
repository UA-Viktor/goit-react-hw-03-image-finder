import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ fotos }) => (
  <ul
    className="gallery"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
  >
    {fotos.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);

export default ImageGallery;
