import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // update form
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear success when typing
    setSuccess("");

    let errorMsg = "";

    if (name === "name") {
      if (!value.trim()) errorMsg = "Name is required";
    }

    if (name === "email") {
      if (!value.trim()) {
        errorMsg = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errorMsg = "Invalid email format";
      }
    }

    if (name === "contact") {
      if (!value.trim()) {
        errorMsg = "Contact number is required";
      } else if (!/^[0-9]{10}$/.test(value)) {
        errorMsg = "Enter valid 10 digit number";
      }
    }

    if (name === "message") {
      if (!value.trim()) errorMsg = "Message is required";
    }

    // update only that field error
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  // ✅ FULL VALIDATION (ON SUBMIT)
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^[0-9]{10}$/.test(formData.contact)) {
      newErrors.contact = "Enter valid 10 digit number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // 🚀 HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Your message has been sent successfully!");

      // clear form
      setFormData({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
    }
  };
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 5000);

      return () => clearTimeout(timer); // cleanup
    }
  }, [success]);
  return (
    <>
      <section className="about-section">
        {/* HERO BANNER */}
        <div className="about-hero">
          <div className="about-overlay">
            <h1>Contact</h1>
            <p>
              <Link to="/">Home </Link>
              <span>•</span>
              <Link to="/contactus">Contact Us</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="contact-page">
        <div className="container contact-wrapper">
          {/* LEFT SIDE */}
          <div className="contact-left">
            <h3>President</h3>

            <p className="contact-name">Dr. Aminat Magomedova (PhD, FICN)</p>

            <p className="contact-designation">
              President Elect, International College of Nutrition
            </p>

            <p className="contact-email">amgerma@gmail.com</p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-right">
            <h2>Get In Touch</h2>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <input
                type="email"
                name="email"
                placeholder="E-Mail"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <input
                type="text"
                name="contact"
                placeholder="Contact No"
                value={formData.contact}
                onChange={handleChange}
              />
              {errors.contact && (
                <span className="error">{errors.contact}</span>
              )}

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}

              <button type="submit">SEND MESSAGE</button>

              {success && <p className="success">{success}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
