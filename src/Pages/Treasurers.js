import React from 'react'
import degestanSpeaker from '../Assets/Images/testimonial/degestanSpeaker.jpg'
import CommonUser from '../Assets/Images/testimonial/CommonUser.jpg'
import { Link } from 'react-router-dom'

function Treasurers() {
    return (
        <>
            <section className="awards-section">
                {/* HERO */}
                <div className="about-hero">
                    <div className="about-overlay">
                        <h1>treasurers of WCCN-2026</h1>
                        <p>
                            <Link to="/">Home</Link> <span>•</span> Treasurers
                        </p>
                    </div>
                </div>

                <section className="container mt-5">
                    <div className='presidenthead'>
                        <h1>President Of ICN-29</h1>
                        <div className='presidentIwccn'>
                            <div className='presidentIn'>
                                <img src={CommonUser} alt="Speaker" className="speaker-image" />
                                <h2>Dr. Aminat Magomedova, PhD, FICN</h2>
                                <p>President of ICN-29, International College of Nutrition</p>
                            </div>
                            <div className='presidentIn'>
                                <img src={CommonUser} alt="Speaker" className="speaker-image" />
                                <h2>Dr. Najah Hadi</h2>
                                <p>Secretary of ICN-29, Iraq</p>
                            </div>
                        </div>
                    </div>
                    <div className='presidenthead'>
                        <h1>President Of WCCN-29</h1>
                        <div className='presidentIwccn'>
                            <div className='presidentIn'>
                                <img src={degestanSpeaker} alt="Speaker" className="speaker-image" />
                                <h2>Dr. Magomed Magomedov,</h2>
                                <p>Chairperson of WCCN-29</p>
                            </div>
                            <div className='presidentIn'>
                                <img src={CommonUser} alt="Speaker" className="speaker-image" />
                                <h2>Dr. Ghizal Fatima, Head of chronobiology Unit, ERA University, Lucknow India</h2>
                                <p>OrganizingSecretary of WCCN-29, Iraq</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Treasurers
