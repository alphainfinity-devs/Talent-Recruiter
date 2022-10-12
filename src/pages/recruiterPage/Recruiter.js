import React from 'react';

const Recruiter = () => {
  return (
    <div className='hero min-h-[60vh]'>
      <div className='card w-full max-w-sm shadow-2xl bg-base-100'>
        <h2 className='text-2xl text-center text-secondary font-bold pb-4'>
          My Profile
        </h2>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              disabled
              // value={user?.displayName || ''}
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='text'
              disabled
              // value={user?.email || ''}
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Company Name</span>
            </label>
            <input
              type='text'
              placeholder='Company Name'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Address</span>
            </label>
            <textarea
              type='text'
              placeholder='Address'
              className='textarea textarea-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Phone Number</span>
            </label>
            <input
              type='text'
              placeholder='Phone number'
              className='input input-bordered'
            />
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiter;
