import React from "react";
import { CgUserList } from "react-icons/cg";
import { FaDownload, FaUsers } from "react-icons/fa";

const AllState = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row shadow">
        <div className="stat">
          <div className="stat-figure border-2 rounded-full p-5">
         <FaDownload size={28} className="text-success"/>
          </div>
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure border-2 rounded-full p-5">
            <CgUserList size={28} className="text-success"/>
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure border-2 rounded-full p-5">
            <FaUsers size={28} className="text-success"/>
          </div>
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </>
  );
};

export default AllState;
