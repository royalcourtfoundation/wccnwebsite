import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import head1 from '../Assets/Images/head1.jpg'
import head2 from '../Assets/Images/head2.jpg'
import head3 from '../Assets/Images/head3.jpg'
import makhachkalaBuilding from '../Assets/Images/Makhalakaimages/makhachkalaBuilding.png'
import Makhachkalaleft from '../Assets/Images/Makhalakaimages/Makhachkalaleft.jpg'
import mainslider1 from '../Assets/Images/Makhalakaimages/mainslider1S.jpg'
import mainslider2 from '../Assets/Images/Makhalakaimages/mainslider2S.jpg'
import mainslider3 from '../Assets/Images/Makhalakaimages/mainslider3S.jpg'
import mainslider4 from '../Assets/Images/Makhalakaimages/mainslider3_.jpeg'
import degestanSpeaker from '../Assets/Images/testimonial/degestanSpeaker.jpg'
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Index() {
  const sliderImages = [mainslider1, mainslider2, mainslider3, mainslider4];
  const [currentSlide, setCurrentSlide] = useState(0);
  const calculateTimeLeft = () => {
    const target = new Date("September 17, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) return {};

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 1000);

    return () => clearInterval(sliderInterval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero" style={{
        backgroundImage: `url(${makhachkalaBuilding})`
      }}>
        <div className="hero-overlay">
          <div className="hero-location">Makhachkala, Dagestan, Russia</div>
          <div className="hero-content">

            {/* COUNTDOWN */}
            <div className="countdown">
              <div className="time-box">
                <h2 className="days">{timeLeft.days || "0"}</h2>
                <p className="days">Days</p>
              </div>
              <div className="time-box">
                <h2 className="hours">{timeLeft.hours || "0"}</h2>
                <p className="hours">Hour</p>
              </div>
              <div className="time-box">
                <h2 className="minutes">{timeLeft.minutes || "0"}</h2>
                <p className="minutes">Minute</p>
              </div>
              <div className="time-box">
                <h2 className="seconds">{timeLeft.seconds || "0"}</h2>
                <p className="seconds">Second</p>
              </div>
            </div>


            <div className="cnt">
              {/* LOGOS */}
              <div className="hero-logos">
                <div className="logo1"> <img src={head1} alt="" /></div>
                <div className="logo3"><img src={head3} alt="" /></div>
                <div className="logo2"> <img src={head2} alt="" /></div>
              </div>

              <h1>29TH WORLD CONGRESS ON <br /> CLINICAL NUTRITION</h1>
              <div className="hero-text-1">
                <p className="hero-text"><i className="fa fa-calendar"></i>  17th - 19th September 2026</p>
                <p className="hero-text"><i className="	fa fa-location-arrow"></i>367000, SRC «Juravli», 9 Entuziastov Street, Karaman 2, Makhachkala, Dagestan, Russia</p>
                {/* <p className="hero-text"><i className="fa fa-clock-o"></i> 10:30 am</p> */}
              </div>
              <button className="primary-btn">ONLINE REGISTRATION</button>
            </div>
          </div>
        </div>
      </section>


      {/* SIGHTSEEING */}
      <section className="sightseeing">
        <div className="overlay">
          {/* <div className="sightseeing-logos">
            <img src={Makhachkalaleft} alt="" />
          </div> */}
          <div className="sightseeing-txt">
            <div className="sightseeing-txt2">
              <div className="degestanImg"><img src={degestanSpeaker} alt="" />"</div>
              <h2>“Dagestan is a land of knowledge, and the most precious guests for us  have always been those who come to us with knowledge."</h2>
              <p>
                Magomed Magomedov,
                Chairman of the Organizing Committee, Director of the Institute of Biomechatronics,
                Professor at Lomonosov Moscow State University.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------  main slider----------------- */}
      <section className="mainslider">
        <div className="slidersection">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000, //  
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={false} // ✅ arrows
          >
            <SwiperSlide> <img src={makhachkalaBuilding} alt="" /> </SwiperSlide>
            <SwiperSlide> <img src={mainslider1} alt="" /> </SwiperSlide>
            <SwiperSlide> <img src={mainslider2} alt="" /> </SwiperSlide>
            <SwiperSlide> <img src={mainslider3} alt="" /> </SwiperSlide>
            <SwiperSlide> <img src={mainslider4} alt="" /> </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* ---------------------------  main slider----------------- */}
      <section>

      </section>

      {/* INFO */}
      <section className="info">
        <p>
          Joining Physiological health dynamics, functional food industry,
          nutraceuticals and health promotion, for disease prevention.
        </p>

        <div className="info-btns">
          <button>WWW.WCCN2026.COM</button>
          <button>WWW.INCHEALTHFOODS.COM</button>
        </div>
      </section>

      {/* TOPICS */}
      <section className="topics">
        <h2>Congress Topics</h2>
        <h3>
          WCCN-2026 "Nutrition and new biomechatronic technologies to improve human quality of life"
        </h3>

        <div className="topics-wrapper">

          {/* AREA 1 */}
          <div className="topic-area">
            <h4>Area 1: Clinical and Functional Nutrition in Non-Communicable Diseases</h4>

            <div className="topics-grid">
              {[
                "The role of nutrition in modern approaches to prevention and treatment of NCDs",
                "Nutrigenomics and personalized nutrition",
                "Gut microbiota and metabolic health",
                "Biomarkers of nutritional status and effectiveness",
                "Clinical studies on personalized dietary interventions",
                "Development of functional foods and nutraceuticals",
                "Epidemiological studies of dietary patterns",
                "Pharmacological nutrition and natural health products",
                "Regulatory mechanisms: labeling, taxes, government programs",
                "Recommendations from EU, WHO, FAO, AHA on food safety (until 2026)"
              ].map((item, i) => (
                <div key={i} className="topic-card">
                  <span>{i + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* AREA 2 */}
          <div className="topic-area">
            <h4>
              Area 2: Neurometabolic Control – Adaptive Biomechatronics & Neurotechnologies
            </h4>

            <div className="topics-grid">
              {[
                "Artificial intelligence and neurocontrol in food behavior regulation",
                "Neuro-metabolic adaptation in extreme conditions",
                "Neuromodulation in obesity and type 2 diabetes treatment",
                "Neuro-interfaces and neuro-prosthetics in medicine",
                "Neurometabolic control and adaptive neurobiomechatronic systems"
              ].map((item, i) => (
                <div key={i} className="topic-card">
                  <span>{i + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


    </>
  );
}
