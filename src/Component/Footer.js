import React from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="container footer-container">
          {/* Column 1 */}
          <div className="footer-col">
            <h3>Venue & Contacts</h3>
            <div className="contact-cn">
              <div className="contact-in">
                <i className="fa fa-home"></i>
              </div>
              <div className="contact-in">
                {" "}
                <p>
                  367000, SRC «Juravli», 9 Entuziastov Street, Karaman
                  2,Makhachkala, Dagestan, Russia
                </p>
              </div>
            </div>

            <div className="contact-cn">
              <div className="contact-in">
                <i className="fa fa-user"></i>
              </div>
              <div className="contact-in">
                {" "}
                <p>
                  Dr. Aminat Magomedova, PhD, FICN, President Elect,
                  International College of Nutrition
                </p>
              </div>
            </div>

            <div className="contact-cn">
              <div className="contact-in">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="contact-in">
                {" "}
                <p>
                  <a href="mailto:amgerma@gmail.com" className="footer-email">
                    amgerma@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About</Link>
              </li>
              <li>
                <Link to="/committees">Committees</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
              <li>
                <Link to="/importantdates">Important Dates</Link>
              </li>
              <li>
                <Link to="/programme">Programme Schedule</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h3>Newsletter</h3>
            <p>Subscribe for updates</p>
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 All Rights Reserved</p>
        </div>
      </footer>
      <ScrollToTopButton />
    </>
  );
}
