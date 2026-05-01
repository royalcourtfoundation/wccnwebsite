import React, { useState } from "react";
import { Link } from "react-router-dom";

// 👉 Default images (replace later)
const images = [
  require("../Assets/Images/Makhalakaimages/GalleryImg1.png"),
  require("../Assets/Images/Makhalakaimages/GalleryImg2.png"),
  require("../Assets/Images/Makhalakaimages/GalleryImg3.png"),
  require("../Assets/Images/Makhalakaimages/GalleryImg4.png"),
  require("../Assets/Images/Makhalakaimages/Makhachkalaleft.jpg"),
  require("../Assets/Images/Makhalakaimages/mainslider1.jpeg"),
  require("../Assets/Images/Makhalakaimages/mainslider2.jpeg"),
  require("../Assets/Images/Makhalakaimages/mainslider3.png"),
  require("../Assets/Images/Makhalakaimages/mainslider3_.jpeg"),
  require("../Assets/Images/Makhalakaimages/makhachkalaBuilding.png"),
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* HERO */}
      <section className="about-section">
        <div className="about-hero">
          <div className="about-overlay">
            <h1>Gallery</h1>
            <p>
              <Link to="/">Home</Link> <span>•</span> Gallery
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {images.map((img, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openImage(index)}
              >
                <img src={img} alt="gallery" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL VIEW */}
      {currentIndex !== null && (
        <div className="gallery-modal">
          <span className="close" onClick={closeImage}>×</span>

          <button className="prev" onClick={prevImage}>❮</button>

          <img src={images[currentIndex]} alt="preview" />

          <button className="next" onClick={nextImage}>❯</button>
        </div>
      )}
    </>
  );
}
