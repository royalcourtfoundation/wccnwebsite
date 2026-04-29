import React from 'react'
import { Link } from 'react-router-dom'

export default function Committee() {
    return (
        <>
            <section className="committee-section">

                {/* HERO */}

                <div className="about-hero">
                    <div className="about-overlay">
                        <h1>Committees</h1>
                        <p><Link to='/'>Home</Link> <span>•</span> Committees</p>
                    </div>
                </div>

                {/* MAIN CONTAINER */}
                <div className="committee-container">

                    <h2>International Advisory Committee</h2>

                    <div className="committee-grid">
                        {[
                            "Dr. Sergey Chibisov (Ex-President, ICN)",
                            "Dr. R. B. Singh, Medicine, India",
                            "Dr. Raimar Loebenberg, Executive Director, Alberta, Canada",
                            "Dr. Adrian Isaza, MBBS, PhD, USA, Chairman, American Chap. USA",
                            "Dr. Lekh Juneja, PhD, FICN, Int Vice President, Japan",
                            "Dr. Magomed, Magomedov",

                            "Dr. Toru Takahashi, PhD, FICN, Secretary General, Japan",
                            "Dr. Aminat Magomedova, PhD, FICN, Russia",
                            "Dr. Elina Kharlitskaya, PhD, FICN",

                            "Dr. N.R. Hadi, MD, PhD, FICN, Iraq",
                            "Dr. H.S. Buttar, PhD, FICN, Canada",

                            "Dr. Jan Fedacko, MD, PhD, FICN, Slovakia"
                        ].map((item, i) => (
                            <div key={i} className="committee-card">{item}</div>
                        ))}
                    </div>

                </div>

            </section>
        </>
    )
}
