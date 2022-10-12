import React, { useEffect, useState } from "react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const AdminJobs = () => {
  const [emailSearch, setEmailSearch] = useState("");
  const [actionValue, setActionValue] = useState("");
  useEffect(() => {
    if (actionValue === "reject") {
      console.log("reject");
    } else if (actionValue === "accept") {
      console.log("accept");
    }
  }, [actionValue]);
  //write debounce function
    useEffect(() => {
    const getSearchValue= setTimeout(() => {
       if(emailSearch) console.log(emailSearch,"do emailSearch");
    }, 1000);
    return () => clearTimeout(getSearchValue);
 },[emailSearch]);
  return (
    <>
      <div className="flex items-center justify-center md:my-14 my-3">
        <BsFillJournalBookmarkFill className="mr-2 md:w-9 md:h-9 w-5 h-5" />
        <h2 className="md:text-3xl uppercase md:font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary">
          All Jobs
        </h2>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between items-center md:my-6 my-2 px-2">
        <select
          className="select select-ghost w-full max-w-xs md:my-0 my-3"
          defaultValue="noValue">
          <option value={"noValue"} disabled>
            Filter By Category
          </option>
          <option>IT</option>
          <option>Finance</option>
          <option>Marketing</option>
          <option>Web development</option>
          <option>HR</option>
        </select>
        <input
          type="text"
          placeholder="Search by Job ID"
          className="input input-bordered input-primary w-full max-w-xs md:my-0 my-3"
          name="search"
          value={emailSearch}
          onChange={(e)=>setEmailSearch(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto w-full px-2">
        <table className="table md:w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Recruiter</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>122312</th>
              <td>Job title</td>
              <td>Web Development</td>
              <td>Jhon Doe</td>
              <td>12 May, 2022</td>
              <td>
                <span className="badge badge-primary opacity-75 badge-sm">
                  Pending
                </span>
              </td>
              <th>
                <select
                  onChange={(e) => setActionValue(e.target.value)}
                  className="select select-ghost"
                  defaultValue={"defaultValue"}>
                  <option disabled value="defaultValue">
                    Select Action
                  </option>
                  <option
                    value={"reject"}
                    className="text-error cursor-pointer">
                    Reject
                  </option>
                  <option
                    value={"accept"}
                    className="text-success cursor-pointer">
                    Accept
                  </option>
                </select>
              </th>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center btn-group mt-5">
          <button className="btn">«</button>
          <span className="btn">Page 22</span>
          <button className="btn">»</button>
        </div>
      </div>
    </>
  );
};

export default AdminJobs;
