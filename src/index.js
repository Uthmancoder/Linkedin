import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoPage from "./Components/LogoPage";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LandingPage from "./LandingPage";
import { Routes, route, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Profile from "./Profile";
import UserSetup from "./UserSetup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <LogoPage />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route  path="/" element={<LandingPage/>}/>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/usersetup" element={<UserSetup/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
