import React from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./globalComponents/Footer";
import Navbar from "./globalComponents/Navbar";
import AdminPage from "./pages/adminPage/AdminPage";
import AdminDashboard from "./pages/adminPage/adminSubPages/AdminDashboard";
import AdminUsers from "./pages/adminPage/adminSubPages/AdminUsers";
import NotFound from "./globalComponents/NotFound";
import AdminJobs from "./pages/adminPage/adminSubPages/AdminJobs";
import AdminCustomize from "./pages/adminPage/adminSubPages/AdminCustomize";
import AdminDetails from "./pages/adminPage/adminSubPages/AdminDetails";
import AdminEmailCampaign from "./pages/adminPage/adminSubPages/AdminEmailCampaign";
import AdminAllPosts from "./pages/adminPage/adminSubPages/AdminAllPosts";
import AdminAddPost from "./pages/adminPage/adminSubPages/AdminAddPost";
import AdminSecurity from "./pages/adminPage/adminSubPages/AdminSecurity";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactUsPage/ContactPage";
import Login from "./pages/loginPage/Login";
import Register from "./pages/registerPage/Register";
import ReviewsPage from "./pages/reviewPage/ReviewsPage";
import BlogsPage from "./pages/blogsPage/BlogsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* admin dashboard start */}
        <Route path="/admin-dashboard" element={<AdminPage />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="jobs" element={<AdminJobs />} />
          <Route path="customize" element={<AdminCustomize />} />
          <Route path="admin-all-posts" element={<AdminAllPosts />} />
          <Route path="admin-add-post/:id" element={<AdminAddPost />} />
          <Route path="admin-add-post" element={<AdminAddPost />} />
          <Route path="admin-security" element={<AdminSecurity />} />
          <Route path="email-campaign" element={<AdminEmailCampaign />} />
          <Route path="details" element={<AdminDetails />} />
        </Route>
        {/* admin dashboard end */}
        {/* Others Page routes start */}
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Others Page routes End */}

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

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
