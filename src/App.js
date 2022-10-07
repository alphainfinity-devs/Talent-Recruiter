import React from "react";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./globalComponents/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./globalComponents/Navbar";
import AdminPage from "./pages/adminPage/AdminPage";
function App() {
  return (
    <>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AdminPage />} >
          <Route
          path="message"
          element={<h2 className="text-red-500 text-2xl text-end">hello night rider</h2>}
        />
          </Route>
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
