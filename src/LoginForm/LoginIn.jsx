import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const LoginIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = JSON.parse(localStorage.getItem("formData"));
    console.log(" FormData:", formData);
    console.log(" Username:", username);
    console.log(" Password:", password);

    if (
      formData &&
      username === formData.username &&
      password === formData.pass
    ) {
      if (option === "Trial User") {
        navigate("/trail");
      } else if (option === "Paid User") {
        navigate("/user");
      } else {
        setMessage("Invalid option selected");
      }
    } else {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div className="LoginForm">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Please Log In</p>
        <div className="input-container">
          <input
            placeholder="Enter username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            placeholder="Enter password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-container">
          <select
            name=""
            id=""
            className="input-container"
            value={option}
            onChange={(e) => setOption(e.target.value)}
            required
          >
            <option value="">Select option</option>
            <option value="Trial User">Trial User</option>
            <option value="Paid User">Paid User</option>
          </select>
        </div>
        <button className="submit" type="submit">
          Sign in
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LoginIn;
