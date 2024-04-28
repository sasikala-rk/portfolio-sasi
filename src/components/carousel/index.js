import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle click on image
  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  // Function to close the popup modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="carousel">
      <div className="grid-container">
        {images.map((image, index) => (
          <div className="grid-item" key={index} onClick={() => handleImageClick(index)}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedImage} alt="Selected Image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
