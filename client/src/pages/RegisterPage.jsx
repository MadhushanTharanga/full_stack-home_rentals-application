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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [name]: files ? files[0] : value,
    });
  };

  console.log(formData);

  return (
    <div className="register">
      <div className="register__container">
        <form className="register__form">
          <input
            placeholder="First Name"
            name="firstname"
            defaultValue={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Last Name"
            name="lastname"
            defaultValue={formData.lastName}
            onChange={handleChange}

            required
          />
          <input
            placeholder="Email Name"
            name="email"
            type="email"
            defaultValue={formData.email}
            onChange={handleChange}

            required
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            defaultValue={formData.password}
            onChange={handleChange}

            required
          />
          <input
            placeholder="Confirm Password"
            name="confirmpassword"
            type="password"
            defaultValue={formData.confirmPassword}
            onChange={handleChange}

            required
          />
          <input
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleChange}

            required
          />
          <label htmlFor="image">
            <img src="../src/assets/addImg.png" alt="add profile photo" />
            <p>Upload Your Photo</p>
          </label>

          {
            formData.profileImage && (
              <img
                src={URL.createObjectURL(formData.profileImage)}
                alt="profile" style={{ maxWidth: "80px" }}
              />
            )
          }
          <button type="submit">Register</button>
        </form>
        <span>Already have an account? </span>
        <a href="/login">Log In Here</a>
      </div>
    </div>
  );
};

export default RegisterPage;
