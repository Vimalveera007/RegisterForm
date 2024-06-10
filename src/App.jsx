import { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginIn from "./LoginForm/LoginIn";
import Trail from "./DashBoard/Trail";
import User from "./User/User";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/Login" element={<LoginIn />}></Route>
          <Route path="/trail" element={<Trail />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
