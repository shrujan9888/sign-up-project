import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Register = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    mobile: "",
    email: "",
    password: "",
    businessName: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user is already registered
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === formData.email);

    if (userExists) {
      setError("User already registered! Please login.");
    } else {
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/login"); // Redirect to login after successful registration
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="ownerName" placeholder="Owner Name" onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="businessName" placeholder="Business Name" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <p className="redirect">
        Already registered? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;
