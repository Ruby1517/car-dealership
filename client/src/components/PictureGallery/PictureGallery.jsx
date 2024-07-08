import React, {useState} from 'react'


const PictureGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleImageClick = (image) => {
        setSelectedImage(image)
    }

    const handlePrevClick = () => {
        const currentIndex = images.indexOf(selectedImage);
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setSelectedImage(images[newIndex]);
    }

    const handleNextClick = () => {
        const currentIndex = images.indexOf(selectedImage);
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setSelectedImage(images[newIndex]);
    }



  return (    
        <div className="pitcure-gallery">
            <div className="gallery-main">
                <img src={selectedImage} alt="selected" />
                <button onClick={handlePrevClick}>Previos</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
            <div className="thumbnail-gallery">
                {images.map((image, index) => (
                    <img 
                        key={index}
                        src={image}
                        slt={`Thumbnail ${index}`}
                        onClick={()=> handleImageClick(image)}
                    />
                ))}
            </div>
        </div>
  )
                    
}

export default PictureGallery
