import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo2old from '../Assets/Images/logo/logo2.png'
import logo2 from '../Assets/Images/logo/Logowccn.png'
import ScrollToTop from "./ScrollToTop";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

const changeLanguage = (lang) => {
  localStorage.setItem("lang", lang);

  const interval = setInterval(() => {
    const select = document.querySelector(".goog-te-combo");

    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));

      // 🔥 FORCE RE-TRANSLATION
      document.body.classList.remove("translated");
      void document.body.offsetHeight;
      document.body.classList.add("translated");

      clearInterval(interval);
    }
  }, 500);
};

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang) {
      const interval = setInterval(() => {
        const select = document.querySelector(".goog-te-combo");

        if (select) {
          select.value = savedLang;
          select.dispatchEvent(new Event("change"));
          clearInterval(interval);
        }
      }, 300);
    }
  }, []);

  useEffect(() => {
  const fixGoogleLayout = setInterval(() => {
    document.body.style.top = "0px";
    document.documentElement.style.marginTop = "0px";
  }, 500);

  return () => clearInterval(fixGoogleLayout);
}, []);
  return (
    <>
      <ScrollToTop />   {/* Add ScrollToTop component here to ensure it is rendered on every page */}
      <header className="main-header">
        <div className="container-fluid header-container">

          {/* Logo */}
          <div className="logo">
            <Link to="/"><div className="mainlogo"><img src={logo2} alt /></div></Link>
          </div>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Menu */}
          <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/aboutus" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/committees" onClick={() => setMenuOpen(false)}>Committees</Link>
            <Link to="/treasurers" onClick={() => setMenuOpen(false)}>Treasurers</Link>
            <Link to="/awards" onClick={() => setMenuOpen(false)}>Awards</Link>
            {/* <Link to="/speakers" onClick={() => setMenuOpen(false)}>Speakers</Link> */}
            {/* <Link to="/registration" onClick={() => setMenuOpen(false)}>Registration</Link> */}
            <Link to="/Importantdates" onClick={() => setMenuOpen(false)}>Important Dates</Link>
            <Link to="/programme" onClick={() => setMenuOpen(false)}>Programme</Link>
            <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link to="/contactus" onClick={() => setMenuOpen(false)}>Contact Us</Link>

            <button className="register-btn">Online Registration</button>
            <div className="russlang">
              <select name="language"
                  className="lang-dropdown form-control form-select"
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="ru">Russian</option>
              </select>
            </div>
          </nav>

          {/* <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>

            <NavLink to="/" end className="nav-link">Home</NavLink>

            <NavLink to="/aboutus" className="nav-link">About</NavLink>

            <NavLink to="/committees" className="nav-link">Committees</NavLink>

            <NavLink to="/awards" className="nav-link">Awards</NavLink>

            <NavLink to="/speakers" className="nav-link">Speakers</NavLink>

            <NavLink to="/registration" className="nav-link">Registration</NavLink>

            <NavLink to="/programme" className="nav-link">Programme</NavLink>

            <NavLink to="/gallery" className="nav-link">Gallery</NavLink>

            <NavLink to="/contactus" className="nav-link">Contact</NavLink>

            <button className="register-btn">Online Registration</button>
          </nav> */}

        </div>
      </header>
    </>
  );
}
