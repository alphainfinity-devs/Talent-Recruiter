import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';

const RecruiterDashboard = () => {
  return (
    <div class='drawer drawer-mobile'>
      <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content px-4 py-4'>
        {/* <!-- Page content here --> */}
        <Outlet />
        {/* responsive button */}
        <label
          for='my-drawer-2'
          class='btn btn-primary drawer-button lg:hidden'
        >
          Open drawer
        </label>
        {/* end */}
      </div>
      <div class='drawer-side'>
        <label for='my-drawer-2' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-gray-200 text-base-content'>
          {/* <!-- Sidebar content here --> */}

          <li>
            <Link
              to='/review/appliedJobs'
              className='flex items-center my-1 px-4 py-3 text-black font-bold border-l-4 border-transparent hover:border-secondary hover:bg-gray-300 transition'
            >
              <BsList className='w-5 mr-3' />
              Applied Jobs
            </Link>
          </li>
          <li>
            <Link
              to='/review/recruiter'
              className='flex items-center my-1 px-4 py-3 text-black font-bold border-l-4 border-transparent hover:border-secondary hover:bg-gray-300 transition'
            >
              <FaUserTie className='w-5 mr-3' />
              Recruiter
            </Link>
          </li>
          <li>
            <Link
              to='/review/addJobs'
              className='flex items-center my-1 px-4 py-3 text-black font-bold border-l-4 border-transparent hover:border-secondary hover:bg-gray-300 transition'
            >
              <FaBriefcase className='w-5 mr-3' />
              Add a Job
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
