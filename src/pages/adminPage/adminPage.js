import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from './adminPageComponents/AdminSidebar';
import AdminDashboard from './adminSubPages/AdminDashboard';

const AdminPage = () => {
  const location = useLocation().pathname;
  return (
    <>
      <div className='drawer drawer-mobile'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          {/* <!-- Page content here --> */}
          <Outlet />
          {(location === '/dashboard' || location === '/dashboard/') && (
            <AdminDashboard />
          )}
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer-2' className='drawer-overlay'></label>

          <AdminSidebar />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
