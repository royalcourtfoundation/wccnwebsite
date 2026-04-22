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
import mainslider1 from '../Assets/Images/Makhalakaimages/mainslider1.jpeg'
import mainslider2 from '../Assets/Images/Makhalakaimages/mainslider2.jpeg'
import mainslider3 from '../Assets/Images/Makhalakaimages/mainslider3.png'
import mainslider4 from '../Assets/Images/Makhalakaimages/mainslider3_.jpeg'
import degestanSpeaker from '../Assets/Images/testimonial/degestanSpeaker.jpg'
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Home() {
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
            <div className="degestanImg"><img src={degestanSpeaker} alt=""/>"</div>
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
              delay: 5000, //  
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
        <h2>Main tentative topics of the </h2>
        <h3> WCCN-2026 "Nutrition and New Technologies in the Fight Against Non-Communicable Diseases"</h3>

        <div className="topics-grid">
          {[
            "The Role of Nutrition in Modern Approaches to the Prevention and Treatment of NCDs",
            "Nutrigenomics and Personalized Nutrition",
            "Gut Microbiota and Metabolic Health",
            "Biomarkers of Nutritional Status and the Effectiveness of Interventions",
            "Clinical studies on the effectiveness of personalized dietary interventions",
            "Development and validation of functional foods and nutraceuticals",
            "Epidemiological studies on dietary patterns and their association with NCDs",
            "Pharmacological nutrition and natural health products",
            "Regulatory and economic mechanisms: labeling, taxes, and government programs",
            "Food safety and food intake guidelines of the EU, WHO, FAO and AHA 2026",
          ].map((item, i) => (
            <div key={i} className="topic-card">{item}</div>
          ))}
        </div>
      </section>


    </>
  );
}