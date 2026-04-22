import React from "react";
import UpdatedSoon from "../Component/UpdatedSoon";
import { Link } from "react-router-dom";

export default function Speakers() {
  return (
    <>
      <section className="committee-section">
        <div className="about-hero">
          <div className="about-overlay">
            <h1>Speakers</h1>
            <p>
              <Link to="/">Home</Link> <span>•</span> Speakers
            </p>
          </div>
        </div>
      </section>
      <section className="speakers-section">
        <div className="container">
          {/* HEADING */}
          <div className="section-header">
            <h2>Speakers</h2>
            <p>
              The conference brings together a distinguished group of speakers
              who are experts and leaders in their respective fields. These
              speakers include academicians, researchers, industry
              professionals, and thought leaders who possess extensive knowledge
              and experience.
            </p>
          </div>

          {/* GRID */}
          <div className="speakers-grid">
            {[
              {
                name: "Dr. Aminat Magomedova",
                role: "President Elect, ICN",
                img: "https://via.placeholder.com/300",
              },
              {
                name: "Dr. Sergey Chibisov",
                role: "Ex-President, ICN",
                img: "https://via.placeholder.com/300",
              },
              {
                name: "Dr. Adrian Isaza",
                role: "USA",
                img: "https://via.placeholder.com/300",
              },
              {
                name: "Dr. Lekh Juneja",
                role: "Japan",
                img: "https://via.placeholder.com/300",
              },
              {
                name: "Dr. Raimar Loebenberg",
                role: "Canada",
                img: "https://via.placeholder.com/300",
              },
              {
                name: "Dr. Elina Kharlitskaya",
                role: "FICN",
                img: "https://via.placeholder.com/300",
              },
            ].map((speaker, i) => (
              <div className="speaker-card" key={i}>
                {/* <div className="speaker-img">
                  <img src={speaker.img} alt={speaker.name} />
                </div> */}

                <div className="speaker-info">
                  <h3>{speaker.name}</h3>
                  <p>{speaker.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
