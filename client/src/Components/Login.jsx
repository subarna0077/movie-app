import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  // Correctly destructuring state
  const [emailVal, setEmailVal] = useState("");
  const [password, setPasswordVal] = useState("");
  const navigate = useNavigate();

  const handleEmail = (value) => {
    setEmailVal(value);
  };

  const handlePassword = (value) => {
    setPasswordVal(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the page from refreshing on submit

    try {
      const response = await axios.post("http://localhost:3000/api/v1/auth/login", {
        email: emailVal,
        password: password,
      });
      
      const {token} = response.data
      const name = response.data.user.name
      console.log(name)

      localStorage.setItem("token", token)
      localStorage.setItem('name', name)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      alert("Login Successful");
      navigate("/dashboard")
    } catch (error) {
      console.error(error);
      alert("Login failed. Please check your credentials.");
    }

    setPasswordVal(''); // Reset password field after submit
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={emailVal}
          onChange={(e) => handleEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
