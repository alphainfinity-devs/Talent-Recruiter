import React from "react";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./globalComponents/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./globalComponents/Navbar";
import AdminPage from "./pages/adminPage/AdminPage";
import AdminDashboard from "./pages/adminPage/adminSubPages/AdminDashboard";
import AdminUsers from "./pages/adminPage/adminSubPages/AdminUsers";
import NotFound from "./globalComponents/NotFound";
function App() {
  return (
    <>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AdminPage />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>
          <Route path="*" element={<NotFound />} />
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
