import React, { useState } from 'react';
import './Gallery.css';

const breeds = ['All', 'Holstein', 'Girlando', 'Jersey', 'Gir'];

const images = [
  { src: 'holstein1.jpg', breed: 'Holstein' },
  { src: 'girlando1.jpg', breed: 'Girlando' },
  { src: 'jersey1.jpg', breed: 'Jersey' },
  { src: 'gir1.jpg', breed: 'Gir' },
  { src: 'holstein2.jpg', breed: 'Holstein' },
  { src: 'girlando2.jpg', breed: 'Girlando' },
  { src: 'jersey2.jpg', breed: 'Jersey' },
  { src: 'gir2.jpg', breed: 'Gir' },
];

const Gallery = () => {
  const [selectedBreed, setSelectedBreed] = useState('All');

  const filteredImages =
    selectedBreed === 'All'
      ? images
      : images.filter((img) => img.breed === selectedBreed);

  return (
    <div className="gallery-container">
      <h2>Cattle Gallery</h2>
      <div className="breed-buttons">
        {breeds.map((breed) => (
          <button
            key={breed}
            className={selectedBreed === breed ? 'active' : ''}
            onClick={() => setSelectedBreed(breed)}
          >
            {breed}
          </button>
        ))}
      </div>
      <div className="image-grid">
        {filteredImages.map((img, index) => (
          <div key={index} className="image-card">
            <img src={img.src} alt={`${img.breed} ${index + 1}`} />
            <p>{img.breed}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
