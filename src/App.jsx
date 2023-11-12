import React from "react";
import "./App.css";
import LandingPage from "./pages/landingpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./pages/loginpage";
import Register from "./pages/registerpage";
import Completeregister from "./pages/completeregister";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Completeregister" element={<Completeregister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
