import "../src/styles.css";
import React, { useState } from "react";
import { validateForm } from "../utils/Validation";

export default function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formElements = {
      firstname: document.getElementById("fname"),
      lastname: document.getElementById("lname"),
      email: document.getElementById("email"),
      password: document.getElementById("password"),
    };

    const { isValid, errors: validationErrors } = validateForm(formElements);

    if (isValid) {
      alert("Formulário enviado com sucesso!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
      alert("Favor, corrigor erros antes de enviar");
    }
  };

  return (
    <div className="form-card content">
      <div className="register">
        <form id="registerForm" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          {errors.firstname && (
            <span className="error">{errors.firstname}</span>
          )}
          <br />
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
          {errors.lastname && <span className="error">{errors.lastname}</span>}
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            minlength="6"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <br />
          <button type="submit">Create Account</button>
        </form>
        <p>
          If click this button, you are accepted all our terms.
          <a href="">Terms and Services</a>
        </p>
      </div>
    </div>
  );
}
