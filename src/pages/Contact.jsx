import Header from "../components/Header";
import { useState } from "react";
import { send } from "emailjs-com";
import { Row, Col, Container } from "react-bootstrap";
import {
  FaFacebook,
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaSpotify,
} from "react-icons/fa";

import containerBackground from "../assets/images/container-background.jpg";

import "../styles/contact.css"

import contactHeader from "../assets/images/contact-header.png";
export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    // Very basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const templateParams = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: formData.message,
      };

      if (formData.company) {
        templateParams.company = formData.company;
      }

      // Send email using EmailJS
      send(
        "service_18mue07",
        "template_cfjw3yl",
        templateParams,
        "nkbfmoPkd4Tr3OQNX"
      )
        .then((response) => {
          console.log("Email sent successfully:", response);
          setSuccessMessage("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setSuccessMessage("");
          // You can set an error message here if needed
        });
    }
  };

  return (
    <>
      <Header />
      <Container
        className="d-flex align-items-center contact"
        style={{ backgroundImage: `url(${containerBackground})` }}
      >
        <Row>
          <Col>
            <Row className="keepInTouch">
              <Col sm={12}>
                <div className="d-flex justify-content-center">
                  <img
                    src={contactHeader}
                    alt="cartoon-character contact image"
                    className="astronaut-contact text-center pb-2"
                  />
                </div>
                <h4 className="text-center ">
                  If you'd like to contact me about opportunities or any
                  inquiries please fill out the form.
                </h4>
              </Col>
            </Row>
            <Row className="mt-2 text-center social-row g-0">
              <Col>
                <a
                  href="https://www.facebook.com/greg.greve.79/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="icon-row-Fb" />
                </a>
              </Col>
              <Col>
                <a
                  href="https://open.spotify.com/user/212hyismd6xfmyqsl6sx4h6fq?si=0170718002fe4149"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSpotify className="icon-row-Sp" />
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.youtube.com/@thechillhypomaniac3373"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="icon-row-Yt" />
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.instagram.com/karatecakeman/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="icon-row-Ig" />
                </a>
              </Col>
              <Col>
                <a
                  href="https://github.com/Goobergreve09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon-row-Gh" />
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.linkedin.com/in/gregory-greve-b48463300/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon-row-Li" />
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="form-container " lg={6} sm={12} md={12}>
            <form onSubmit={handleSubmit}>
              <Row className="d-flex align-items-center justify-content-center">
                <Col sm={12} md={6} lg={6} className="form-margin mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </Col>
                <Col sm={12} md={6} lg={6} className="form-margin mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col className="form-margin mb-3" sm={12} md={6} lg={6}>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </Col>
                <Col sm={12} md={6} lg={6} className="form-margin">
                  <label htmlFor="company" className="form-label">
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className={`form-control ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </Row>
              <Row className="d-flex justify-content-center">
                <button type="submit" className="contact-btn mt-3">
                  Send Message
                </button>
              </Row>
              {successMessage && (
                <Row className="alert alert-success mt-3">{successMessage}</Row>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
