import Header from "../components/Header";
import { useState } from "react";
import { send } from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
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
      // Send email using EmailJS
      send('service_18mue07', 'template_cfjw3yl', formData, 'nkbfmoPkd4Tr3OQNX')
        .then((response) => {
          console.log('Email sent successfully:', response);
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          setSuccessMessage("");
          // You can set an error message here if needed
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="container pt-4 contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">{errors.message}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {successMessage && (
            <div className="alert alert-success mt-3">{successMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
}
