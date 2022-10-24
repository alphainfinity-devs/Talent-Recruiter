import React from "react";
import { BsList } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { logout } from "../../../features/userAuth/userAuthSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ApplicantSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <ul className="menu p-4 overflow-y-auto w-60 bg-[#d0ffce] text-base-content">
        {/* <!-- Sidebar content here --> */}

        <li>
          <Link
            to="applied-jobs"
            className="flex items-center my-1 px-4 py-3 text-black font-bold border-l-4 border-transparent hover:border-secondary hover:bg-gray-300 transition"
          >
            <BsList className="w-5" />
            Applied Jobs
          </Link>
        </li>

        <li>
          <Link
            to="bookmark-job"
            className="flex items-center my-1 px-4 py-3 text-black font-bold border-l-4 border-transparent hover:border-secondary hover:bg-gray-300 transition"
          >
            <FaBriefcase className="w-5" />
            Save job
          </Link>
        </li>
        {/* <li>
          <Link
            to="profile"
            className="flex items-center my-1 px-4 py-3 text-black font-bold border-l-4 border-transparent hover:border-secondary hover:bg-gray-300 transition">
            <FaUserTie className="w-5" />
            Profile
          </Link>
        </li> */}
        {/* <li>
          <Link
            to="message"
            className="flex items-center my-1 px-4 py-3 text-black font-bold border-l-4 border-transparent hover:border-secondary hover:bg-gray-300 transition">
            <FaBriefcase className="w-5" />
            Message
          </Link>
        </li> */}
        <li>
          <button
            onClick={handleLogout}
            className="flex items-center my-1 px-4 py-3 text-black font-bold border-l-4 border-transparent hover:border-secondary hover:bg-gray-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </li>
      </ul>
    </>
  );
};

export default ApplicantSidebar;
