import React from "react";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  return (
    <div>
      <h2 className="text-2xl py-4 text-center text-secondary font-bold">
        All Applied Jobs :{" "}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
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
                <Link to="#">Raju Profile</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
