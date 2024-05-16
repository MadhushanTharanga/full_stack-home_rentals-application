import React, { useState } from "react";
import "../styles/Login.scss"


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <div className="login_content">
        <form className="login_content_form" >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>e.target.value}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>e.target.value}
            required
          />
          <button type="submit">LOG IN</button>
        </form>
        <span>Don't have an account? <br /> <a href="/register">SignUp Here</a> </span>

      </div>
    </div>
  );
};

export default LoginPage;