import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SignUp from "./components/authentication/SignUp";
import Login from "./components/authentication/Login";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
