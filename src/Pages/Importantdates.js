import React from "react";
import { Link } from "react-router-dom";

export default function Importantdates() {
  return (
    <>
      <section className="awards-section">
        {/* HERO */}
        <div className="about-hero">
          <div className="about-overlay">
            <h1>Important Dates</h1>
            <p>
              <Link to="/">Home</Link> <span>•</span> Awards
            </p>
          </div>
        </div>

        <section className="important-dates">
          <div className="container">
            {/* Heading */}
            <div className="section-header">
              <h2>Important Dates</h2>
            </div>

            {/* Cards */}
            <div className="dates-grid">
              <div className="date-card">
                <h3>Registration Deadline</h3>
                <p>1<sup>st</sup> July 2026</p>
              </div>

              <div className="date-card">
                <h3>Abstract Submission</h3>
                <p>1<sup>st</sup> July  2026</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
