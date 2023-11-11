import { Routes, Route, useState } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SignUp from "./components/authentication/SignUp";
import Login from "./components/authentication/Login";
import Home from "./components/Home";

const LoggedIn = localStorage.getItem("loggedIn");

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {LoggedIn && <Route path="/" element={<Home />} />}
        {!LoggedIn && <Route path="/" element={<SignUp />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
