import React, { useState } from "react";
import "../styles/Login.scss"


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch ("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      /* Get data after fetching */
      const loggedIn = await response.json()

      if (loggedIn) {
        dispatch (
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token
          })
        )
        navigate("/")
      }

    } catch (err) {
      console.log("Login failed", err.message)
    }
  }
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
        </form> <br />
        <span>Don't have an account? <br />  <a href="/register">SignUp Here</a> </span>

      </div>
    </div>
  );
};

export default LoginPage;