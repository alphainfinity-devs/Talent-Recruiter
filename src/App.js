import React from "react";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./globalComponents/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./globalComponents/Navbar";
function App() {
  return (
    <>
      <div className="mx-auto px-12">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
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
