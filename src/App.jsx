import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SignUp from "./components/authentication/SignUp";
import Login from "./components/authentication/Login";
import Home from "./components/Home";

//checking if any user is loggedin based on it either signup or home page will open
const LoggedIn = localStorage.getItem("loggedIn");

function App() {
  return (
    <div>
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
