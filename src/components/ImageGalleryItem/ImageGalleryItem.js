import React from 'react';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => (
  <li
    key={id}
    className="gallery-item"
    style={{ objectFit: 'cover', width: '300px', height: '200px' }}
  >
    <img src={webformatURL} href={largeImageURL} alt={id} />
  </li>
);

export default ImageGalleryItem;
