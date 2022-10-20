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
import RecruiterPage from "./pages/recruiterPage/RecruiterPage";
import AppliedJobs from "./pages/recruiterPage/recruiterComponents/AppliedJobs";
import RecruiterProfile from "./pages/recruiterPage/recruiterComponents/RecruiterProfile";
import RecruiterAddJobs from "./pages/recruiterPage/recruiterComponents/RecruiterAddJobs";
import JobPage from "./pages/jobPage/JobPage";
import JobDetails from "./pages/jobPage/jobPageComponents/JobDetails";
import PrivateRoute from "./globalComponents/PrivateRoute";
import AdminRouteProtect from "./globalComponents/AdminRouteProtect";
import RecruiterRouteProtect from "./globalComponents/RecruiterRouteProtect";
import useRoleChecking from "./hooks/useRoleChecking";
import ApplicantRouteProtect from "./globalComponents/ApplicantRouteProtect";
import ApplicantPage from "./pages/applicantPage/ApplicantPage";
import ApplicantAppliedJob from "./pages/applicantPage/applicantComponents/ApplicantAppliedJob";
import ApplicantProfile from "./pages/applicantPage/applicantComponents/ApplicantProfile";
import ApplicantSaveJob from "./pages/applicantPage/applicantComponents/ApplicantSaveJob";
import ApplicantMessage from "./pages/applicantPage/applicantComponents/ApplicantMessage";

function App() {
  const [, userRole] = useRoleChecking();
  console.log(userRole);
  return (
    <>
      <Navbar />
      <Routes>
        {/* admin dashboard start */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminRouteProtect>
                <AdminPage />
              </AdminRouteProtect>
            </PrivateRoute>
          }
        >
          {/* admin dashboard start */}
          <Route
            index
            element={
              <AdminRouteProtect>
                <AdminDashboard />
              </AdminRouteProtect>
            }
          />
          <Route
            path="dashboard"
            element={
              <AdminRouteProtect>
                <AdminDashboard />
              </AdminRouteProtect>
            }
          />
          <Route path="admin-users" element={<AdminUsers />} />
          <Route path="admin-jobs" element={<AdminJobs />} />
          <Route path="admin-customize" element={<AdminCustomize />} />
          <Route path="admin-all-posts" element={<AdminAllPosts />} />
          <Route path="admin-add-post/:id" element={<AdminAddPost />} />
          <Route path="admin-add-post" element={<AdminAddPost />} />
          <Route path="admin-security" element={<AdminSecurity />} />
          <Route path="admin-email-campaign" element={<AdminEmailCampaign />} />
          <Route path="admin-details" element={<AdminDetails />} />

          {/* admin dashboard end */}
        </Route>
        {/* recruiter dashboard start */}
        <Route
          path="/recruiter"
          element={
            <PrivateRoute>
              <RecruiterRouteProtect>
                <RecruiterPage />
              </RecruiterRouteProtect>
            </PrivateRoute>
          }
        >
          <Route
            index
            element={
              <RecruiterRouteProtect>
                <AppliedJobs />
              </RecruiterRouteProtect>
            }
          />
          <Route
            path="appliedJobs"
            element={
              <RecruiterRouteProtect>
                <AppliedJobs />
              </RecruiterRouteProtect>
            }
          />
          <Route path="recruiter" element={<RecruiterProfile />} />
          <Route path="addJobs" element={<RecruiterAddJobs />} />
        </Route>
        {/* recruiter dashboard end */}
        {/* applicant dashboard start */}
        <Route
          path="/applicant"
          element={
            <PrivateRoute>
              <ApplicantRouteProtect>
                <ApplicantPage />
              </ApplicantRouteProtect>
            </PrivateRoute>
          }
        >
          <Route
            index
            element={
              <ApplicantRouteProtect>
                <ApplicantAppliedJob />
              </ApplicantRouteProtect>
            }
          />
          <Route
            path="appliedJobs"
            element={
              <ApplicantRouteProtect>
                <ApplicantAppliedJob />
              </ApplicantRouteProtect>
            }
          />
          <Route path="profile" element={<ApplicantProfile />} />
          <Route path="save-job" element={<ApplicantSaveJob />} />
          <Route path="message" element={<ApplicantMessage />} />
        </Route>
        {/* applicant dashboard end */}

        {/* public Page routes start */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* public Page routes End */}

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
