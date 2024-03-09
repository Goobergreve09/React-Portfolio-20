import Header from "../components/Header";
import { useState } from "react";

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

    const myForm = e.target;
    const formDataToSend = new FormData(myForm); 

    if (validateForm()) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend).toString(), 
      })
        .then(() => {
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => alert(error));
    }
  };

  return (
    <div>
      <Header />
      <div className="container pt-4 contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  {/* Add a hidden field for the honeypot */}
  <div hidden>
    <label>
      Don’t fill this out if you're human: <input name="bot-field" />
    </label>
  </div>
  {/* Name field */}
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
  {/* Email field */}
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
  {/* Message field */}
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
  {/* Submit button */}
  <button type="submit" className="btn btn-primary">
    Send Message
  </button>
  {/* Success message */}
  {successMessage && (
    <div className="alert alert-success mt-3">{successMessage}</div>
  )}
</form>

      </div>
    </div>
  );
}

