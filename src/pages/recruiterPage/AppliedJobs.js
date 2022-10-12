import React from 'react';

const AppliedJobs = () => {
  return (
    <div>
      <h2 className='text-2xl py-4 text-center text-secondary font-bold'>
        All Applied Jobs :{' '}
      </h2>
      <div class='overflow-x-auto'>
        <table class='table w-full'>
          <thead>
            <tr>
              <th>SL</th>
              <th>Job Position</th>
              <th>Applicant Name</th>
              <th>Applicant Profile</th>
            </tr>
          </thead>
          <tbody>
            {/* content */}
            <tr>
              <td>1</td>
              <td>Senior Web Developer</td>
              <td>Mr. Raju</td>
              <td>
                <a href='#'>Raju Profile</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
