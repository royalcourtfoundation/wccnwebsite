import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <>
      <section className="about-section">

        {/* HERO BANNER */}
        <div className="about-hero">
          <div className="about-overlay">
            <h1>About The Conference</h1>
            <p><Link to='/'>Home </Link><span>•</span>
             <Link to='/aboutus'>About Us</Link>
             </p>
          </div>
        </div>

        {/* INTRO */}
        <div className="about-container">
          <h2>
            Advancing Global Nutrition & Health Innovation
          </h2>

          <p>
            The 29th World Congress on Clinical Nutrition (WCCN) is an
            internationally recognized platform that brings together leading
            scientists, healthcare professionals, researchers, and industry
            experts from across the globe.
          </p>

          <p>
            This prestigious event, to be held in Makhachkala, Dagestan,
            Russia, aims to promote the integration of clinical nutrition,
            functional foods, nutraceuticals, and modern healthcare
            technologies for disease prevention and health promotion.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="about-highlights">
          <div className="highlight-box">
            <h3>🌍 Global Collaboration</h3>
            <p>Connect with experts from over 50+ countries.</p>
          </div>

          <div className="highlight-box">
            <h3>🧪 Scientific Research</h3>
            <p>Latest innovations in nutrition, medicine & health.</p>
          </div>

          <div className="highlight-box">
            <h3>🏥 Clinical Integration</h3>
            <p>Bridging research with real-world healthcare practices.</p>
          </div>
        </div>

        {/* ABOUT CITY */}
        <div className="about-city">
          <h2>About Makhachkala, Dagestan</h2>

          <p>
            Makhachkala, the capital of the Republic of Dagestan, is a vibrant
            city located along the Caspian Sea. Known for its rich cultural
            diversity, scenic landscapes, and historical significance, the
            city provides an inspiring setting for international academic and
            scientific exchange.
          </p>

          <p>
            With a blend of modern infrastructure and traditional heritage,
            Makhachkala offers a unique experience for participants,
            combining professional growth with cultural exploration.
          </p>
        </div>

      </section>
    </>
  )
}
