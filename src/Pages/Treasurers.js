import React from 'react'
import degestanSpeaker from '../Assets/Images/testimonial/degestanSpeaker.jpg'
import CommonUser from '../Assets/Images/testimonial/CommonUser.jpg'
import Aminat from '../Assets/Images/testimonial/AminatP.jpg'
import NazaHadi from '../Assets/Images/testimonial/NajahHadiP.jpg'
import Ghizal from '../Assets/Images/testimonial/GhizalP.jpg'
import { Link } from 'react-router-dom'

function Treasurers() {
    return (
        <>
            <section className="awards-section">
                {/* HERO */}
                <div className="about-hero">
                    <div className="about-overlay">
                        <h1>Treasurers of WCCN-2026</h1>
                        <p>
                            <Link to="/">Home</Link> <span>•</span> Treasurers
                        </p>
                    </div>
                </div>

                <section className="container mt-5">
                    <div className='presidenthead'>
                        <h1>President of ICN-29</h1>
                        <div className='presidentIwccn'>
                            <div className='presidentIn'>
                                <img src={Aminat} alt="Speaker" className="speaker-image" />
                                <div className="president-content">
                                    <h2>Dr. Aminat Magomedova, PhD, FICN</h2>
                                    <p>President of ICN-29, International College of Nutrition</p>
                                </div>
                            </div>
                            <div className='presidentIn'>
                                <img src={NazaHadi} alt="Speaker" className="speaker-image" />
                                <div className="president-content">
                                    <h2>Dr. Najah Hadi, Iraq</h2>
                                    <p>Secretary of ICN-29</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='presidenthead'>
                        <h1>President of WCCN-29</h1>
                        <div className='presidentIwccn'>
                            <div className='presidentIn'>
                                <img src={degestanSpeaker} alt="Speaker" className="speaker-image" />
                                <div className="president-content">
                                    <h2>Dr. Magomed Magomedov</h2>
                                    <p>Organizing Chairperson of WCCN-29</p>
                                </div>
                            </div>
                            <div className='presidentIn'>
                                <img src={Ghizal} alt="Speaker" className="speaker-image" />

                                <div className="president-content">

                                    <h2>Dr. Ghizal Fatima</h2>

                                    <span className="subtext">
                                        Head of Chronobiology Unit,
                                        ERA University, Lucknow India
                                    </span>

                                    <p>Organizing Secretary of WCCN-29</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Treasurers
