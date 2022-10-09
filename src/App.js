import React from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage/HomePage";
import Footer from "./globalComponents/Footer";
import Navbar from "./globalComponents/Navbar";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactUsPage/ContactPage";
import Login from "./pages/loginPage/Login";
import Register from "./pages/registerPage/Register";

function App() {
  return (
    <>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </>
      {/* for toastify popup */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
