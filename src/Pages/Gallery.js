import React, { useState } from "react";
import { Link } from "react-router-dom";

/* =========================
   GALLERY COLLECTIONS
========================= */

const galleryCollections = [
  {
    title: "Makhachkala City",
    cover: require("../Assets/Images/Makhalakaimages/GalleryImg1.png"),

    images: [
      require("../Assets/Images/Makhalakaimages/GalleryImg1.png"),
      require("../Assets/Images/Makhalakaimages/GalleryImg2.png"),
      require("../Assets/Images/Makhalakaimages/GalleryImg3.png"),
      require("../Assets/Images/Makhalakaimages/GalleryImg4.png"),
    ],
  },

  {
    title: "Conference Venue",
    cover: require("../Assets/Images/Makhalakaimages/GalleryImg5.jpeg"),

    images: [
      require("../Assets/Images/Makhalakaimages/GalleryImg5.jpeg"),
      require("../Assets/Images/Makhalakaimages/GalleryImg6.jpeg"),
      require("../Assets/Images/Makhalakaimages/GalleryImg7.jpeg"),
      require("../Assets/Images/Makhalakaimages/GalleryImg8.jpeg"),
    ],
  },

  {
    title: "Tourism & Culture",
    cover: require("../Assets/Images/Makhalakaimages/Makhachkalaleft.jpg"),

    images: [
      require("../Assets/Images/Makhalakaimages/Makhachkalaleft.jpg"),
      require("../Assets/Images/Makhalakaimages/mainslider3.png"),
      require("../Assets/Images/Makhalakaimages/makhachkalaBuilding.png"),
    ],
  },
];

export default function Gallery() {

  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  /* OPEN IMAGE */
  const openImage = (index) => {
    setCurrentIndex(index);
  };

  /* CLOSE MODAL */
  const closeImage = () => {
    setCurrentIndex(null);
  };

  /* NEXT */
  const nextImage = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % selectedAlbum.images.length
    );
  };

  /* PREV */
  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? selectedAlbum.images.length - 1
        : prev - 1
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

      {/* =========================
          ALBUM LIST
      ========================= */}
      {!selectedAlbum && (
        <section className="gallery-section">
          <div className="container">

            <div className="gallery-albums">

              {galleryCollections.map((album, index) => (

                <div
                  key={index}
                  className="album-card"
                  onClick={() => setSelectedAlbum(album)}
                >

                  <img src={album.cover} alt={album.title} />

                  <div className="album-overlay">
                    <h3>{album.title}</h3>

                    <span>
                      {album.images.length} Photos
                    </span>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>
      )}

      {/* =========================
          INSIDE ALBUM
      ========================= */}
      {selectedAlbum && (
        <section className="gallery-section">
          <div className="container">

            <div className="album-header">

              <button
                className="back-btn"
                onClick={() => setSelectedAlbum(null)}
              >
                ← Back to Albums
              </button>

              <h2>{selectedAlbum.title}</h2>

            </div>

            <div className="gallery-grid">

              {selectedAlbum.images.map((img, index) => (

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
      )}

      {/* =========================
          MODAL
      ========================= */}
      {currentIndex !== null && selectedAlbum && (

        <div className="gallery-modal">

          <span className="close" onClick={closeImage}>
            ×
          </span>

          <button className="prev" onClick={prevImage}>
            ❮
          </button>

          <img
            src={selectedAlbum.images[currentIndex]}
            alt="preview"
          />

          <button className="next" onClick={nextImage}>
            ❯
          </button>

        </div>
      )}
    </>
  );
}
