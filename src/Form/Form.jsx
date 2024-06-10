import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [option, setOption] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [reenterPass, setReenterPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass !== reenterPass) {
      setError("Password does not match");
      return;
    }
    const formData = {
      name,
      email,
      option,
      username,
      pass,
      reenterPass,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Data Saved:", formData);
    navigate("/login");
    setError("");
  };

  return (
    <div className="registerForm">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Create Register Form</p>
        {error && <p className="error">{error}</p>}
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Student Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <span></span>
        </div>
        <div className="input-container">
          <select
            name=""
            id=""
            className="input-container"
            onChange={(e) => setOption(e.target.value)}
            value={option}
            required
          >
            <option value="" disabled>
              Select option
            </option>
            <option value="1">12th - A</option>
            <option value="2">12th - B</option>
            <option value="3">12th - C</option>
            <option value="4">12th - D</option>
          </select>
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder=" Re-Enter password"
            onChange={(e) => setReenterPass(e.target.value)}
            value={reenterPass}
            required
          />
        </div>
        <button type="submit" className="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Form;
