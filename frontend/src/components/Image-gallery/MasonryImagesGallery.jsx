import React, { useState } from 'react';
import galleryImages from './galleryImages';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import './image-description.css'; // Make sure to import your CSS file

const MasonryImagesGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (index) => {
        // Set the selected image based on the index clicked
        setSelectedImage(galleryImages[index]);
    };

    const closePopup = () => {
        // Clear the selected image
        setSelectedImage(null);
    };

    return (
        <div>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
                <Masonry gutter="1rem">
                    {galleryImages.map((item, index) => (
                        <div key={index}>
                            <img
                                className="masonry__img"
                                src={item}
                                alt=""
                                style={{ width: '100%', display: 'block', borderRadius: '10px', cursor: 'pointer' }}
                                onClick={() => handleImageClick(index)}
                            />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>

            {selectedImage && (
                <div className="image-popup">
                    <div className="popup-content">
                        <img className="popup-image" src={selectedImage} alt="" />
                        <div className="popup-description">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce auctor, urna a tristique euismod, lorem sapien convallis diam,
                                at malesuada erat leo id lorem.
                            </p>
                        </div>
                        <button className="close-button" onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MasonryImagesGallery;
