import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
const PaymentCreditCart = lazy(() =>
  import("./pages/paymentPage/PaymentCreditCart"),
);
const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const Footer = lazy(() => import("./globalComponents/Footer"));
const Navbar = lazy(() => import("./globalComponents/Navbar"));
const AdminPage = lazy(() => import("./pages/adminPage/adminPage"));
const AdminDashboard = lazy(() =>
  import("./pages/adminPage/adminSubPages/AdminDashboard"),
);
const AdminUsers = lazy(() =>
  import("./pages/adminPage/adminSubPages/AdminUsers"),
);
const NotFound = lazy(() => import("./globalComponents/NotFound"));
const AdminJobs = lazy(() =>
  import("./pages/adminPage/adminSubPages/AdminJobs"),
);
const AdminCustomize = lazy(() =>
  import("./pages/adminPage/adminSubPages/AdminCustomize"),
);
const AdminDetails = lazy(() =>
  import("./pages/adminPage/adminSubPages/AdminDetails"),
);
const AdminEmailCampaign = lazy(() =>
  import("./pages/adminPage/adminSubPages/AdminEmailCampaign"),
);
const AdminAllPosts = lazy(() =>
  import("./pages/adminPage/adminSubPages/AdminAllPosts"),
);
const AdminAddPost = lazy(() =>
  import("./pages/adminPage/adminSubPages/AdminAddPost"),
);
const AboutPage = lazy(() => import("./pages/aboutPage/AboutPage"));
const ContactPage = lazy(() => import("./pages/contactUsPage/ContactPage"));
const Login = lazy(() => import("./pages/loginPage/Login"));
const Register = lazy(() => import("./pages/registerPage/Register"));
const ReviewsPage = lazy(() => import("./pages/reviewPage/ReviewsPage"));
const BlogsPage = lazy(() => import("./pages/blogsPage/BlogsPage"));
const RecruiterPage = lazy(() => import("./pages/recruiterPage/RecruiterPage"));
const AppliedJobs = lazy(() =>
  import("./pages/recruiterPage/recruiterComponents/RequiterJobList"),
);
const RecruiterProfile = lazy(() =>
  import("./pages/recruiterPage/recruiterComponents/RecruiterProfile"),
);
const RecruiterAddJobs = lazy(() =>
  import("./pages/recruiterPage/recruiterComponents/RecruiterAddJobs"),
);
const JobPage = lazy(() => import("./pages/jobPage/JobPage"));
const JobDetails = lazy(() =>
  import("./pages/jobPage/jobPageComponents/JobDetails"),
);
const PrivateRoute = lazy(() => import("./globalComponents/PrivateRoute"));
const AdminRouteProtect = lazy(() =>
  import("./globalComponents/AdminRouteProtect"),
);
const RecruiterRouteProtect = lazy(() =>
  import("./globalComponents/RecruiterRouteProtect"),
);
const ApplicantRouteProtect = lazy(() =>
  import("./globalComponents/ApplicantRouteProtect"),
);
const ApplicantPage = lazy(() => import("./pages/applicantPage/ApplicantPage"));
const ApplicantAppliedJob = lazy(() =>
  import("./pages/applicantPage/applicantComponents/ApplicantAppliedJob"),
);
const ApplicantProfile = lazy(() =>
  import("./pages/applicantPage/applicantComponents/ApplicantProfile"),
);
const ApplicantSaveJob = lazy(() =>
  import("./pages/applicantPage/applicantComponents/ApplicantSaveJob"),
);
const ApplicantMessage = lazy(() =>
  import("./pages/applicantPage/applicantComponents/ApplicantMessage"),
);
const ApplicantList = lazy(() =>
  import("./pages/recruiterPage/recruiterComponents/ApplicantList"),
);
const AdminAddCategory = lazy(() =>
  import("./pages/adminPage/adminSubPages/AdminAddCategory"),
);
const AdminDeleteCategory = lazy(() =>
  import("./pages/adminPage/adminSubPages/AdminDeleteCategory"),
);
const SearchPage = lazy(() => import("./pages/searchPage/SearchPage"));
function App() {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="flex justify-center mx-auto">
            <InfinitySpin width="300" color="#4fa94d" />
          </div>
        }>
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
            }>
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
            <Route
              path="admin-email-campaign"
              element={<AdminEmailCampaign />}
            />
            <Route path="admin-details" element={<AdminDetails />} />
            <Route path="admin-add-category" element={<AdminAddCategory />} />
            <Route
              path="admin-delete-category"
              element={<AdminDeleteCategory />}
            />
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
            }>
            <Route
              index
              element={
                <RecruiterRouteProtect>
                  <RecruiterAddJobs />
                </RecruiterRouteProtect>
              }
            />
            <Route
              path="job/post"
              element={
                <RecruiterRouteProtect>
                  <RecruiterAddJobs />
                </RecruiterRouteProtect>
              }
            />

            <Route
              path="jobs"
              element={
                <RecruiterRouteProtect>
                  <AppliedJobs />
                </RecruiterRouteProtect>
              }
            />
            <Route
              path="jobs/payment"
              element={
                <RecruiterRouteProtect>
                  <PaymentCreditCart />
                </RecruiterRouteProtect>
              }
            />
            <Route
              path="jobs/applicants/:id"
              element={
                <RecruiterRouteProtect>
                  <ApplicantList />
                </RecruiterRouteProtect>
              }
            />

            <Route
              path="recruiter"
              element={
                <RecruiterRouteProtect>
                  <RecruiterProfile />
                </RecruiterRouteProtect>
              }
            />
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
            }>
            <Route
              index
              element={
                <ApplicantRouteProtect>
                  <ApplicantAppliedJob />
                </ApplicantRouteProtect>
              }
            />
            <Route
              path="applied-jobs"
              element={
                <ApplicantRouteProtect>
                  <ApplicantAppliedJob />
                </ApplicantRouteProtect>
              }
            />
            <Route path="profile" element={<ApplicantProfile />} />
            <Route path="bookmark-job" element={<ApplicantSaveJob />} />
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
          <Route path="/search" element={<SearchPage />} />
          {/* public Page routes End */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
