import React from "react";
import "../styles/Register.scss";

const RegisterPage = () => {
  return (
    <div className="register">
      <div className="register__container">
        <form className="register__form">
          <input placeholder="First Name" name="firstname" required />
          <input placeholder="Last Name" name="lastname" required />
          <input placeholder="Email Name" name="email" type="email" required />
          <input
            placeholder="Password"
            name="password"
            type="password"
            required
          />
          <input
            placeholder="Confirm Password"
            name="confirmpassword"
            type="password"
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