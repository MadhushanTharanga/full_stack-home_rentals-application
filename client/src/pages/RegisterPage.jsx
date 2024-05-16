import React from "react";
import "../styles/Register.scss";
import { useState } from "react";


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  


  return (
    <div className="register">
      <div className="register__container">
        <form className="register__form">
          <input placeholder="First Name" name="firstname" defaultValue={formData.firstName} required />
          <input placeholder="Last Name" name="lastname" defaultValue={formData.lastName} required />
          <input placeholder="Email Name" name="email" type="email" defaultValue={formData.email} required />
          <input
            placeholder="Password"
            name="password"
            type="password"
            defaultValue={formData.password}
            required
          />
          <input
            placeholder="Confirm Password"
            name="confirmpassword"
            type="password"
            defaultValue={formData.confirmPassword}
            required
          />
          <input
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            required
          />
          <label htmlFor="image">
            <img src="../src/assets/addImg.png" alt="add profile photo" />
            <p>Upload Your Photo</p>
          </label>
          <button type="submit">Register</button>
        </form>
        <span>Already have an account? </span>
        <a href="/login">Log In Here</a>
      </div>
    </div>
  );
};

export default RegisterPage;