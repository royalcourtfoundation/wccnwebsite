import React from 'react'
import { Link } from 'react-router-dom'

export default function Awards() {
  return (
    <>
      <section className="awards-section">

        {/* HERO */}
        <div className="about-hero">
          <div className="about-overlay">
            <h1>Awards</h1>
            <p><Link to='/'>Home</Link> <span>•</span> Awards</p>
          </div>
        </div>



        {/* CONTAINER */}
        <div className="awards-container">

          <h2>Awards</h2>

          <div className="awards-grid">
            {[
              { title: "Dr Zhu Shoumin Memorial Award", name: "Aminat Magomedova" },
              { title: "Dr SS Rastogi Memorial Award", name: "Dr. Dinesh Kumar Bhardwaj" },
              { title: "Dr H Zumkley Memorial Award", name: "Dr. Oleg Medvedev" },
              { title: "Dr J Nag Memorial Award", name: "Dr. Prabodh Kumar Trivedi" },
              { title: "Dr Lech Ozimek Memorial Award", name: "Dr. Roodabeh Bahram Soltani" },
              { title: "Dr JC Patel Memorial Award", name: "Dr. Mahesh Kumar Mummadi" },
              { title: "Dr TK Basu Memorial Award", name: "Dr. Raja Sriswan Mamedi" },
              { title: "Dr RB Singh Felicitation Award", name: "Dr. S.K. Chauhan" },
              { title: "Dr RG Singh Usha Felicitation Award", name: "Dr. Meenskshi Singh" },
              { title: "Dr GS Sainani Felicitation Award", name: "Dr. Sai Ram Challa" },
              { title: "Dr SN Acharya Felicitation Award", name: "Dr. Vijaylakshmi Venkatesan" },
              { title: "Dr Kazim Ali Khan Memorial Award", name: "" },
              { title: "Mrs Afsar Jahan Memorial Award", name: "" },
              { title: "Mr Sabir Hussain Felicitation Award", name: "" }
            ].map((item, i) => (
              <div key={i} className="awards-card">
                <h3>{item.title}</h3>
                {/* {item.name && <p>{item.name}</p>} */}
              </div>
            ))}
          </div>

        </div>

      </section>
    </>
  )
}
