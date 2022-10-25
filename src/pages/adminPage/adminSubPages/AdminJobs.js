import React, { useEffect, useState } from "react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { useGetAllJobsQuery } from "../../../features/job/jobApi";
import TablePlaceholder from "../../../utils/TablePlaceholder";
import AdminSingleJob from "../adminPageComponents/AdminSingleJob";

const AdminJobs = () => {
  const [emailSearch, setEmailSearch] = useState("");
  const { isLoading, data, error } = useGetAllJobsQuery();
  //write debounce function
  useEffect(() => {
    const getSearchValue = setTimeout(() => {
      if (emailSearch) console.log(emailSearch, "do emailSearch");
    }, 1000);
    return () => clearTimeout(getSearchValue);
  }, [emailSearch]);
  // decide what to render
  let content;
  if (isLoading) {
    content = <TablePlaceholder />;
  } else if (error) {
    toast.error("Something went wrong", {
      toastId: "error",
    });
  } else if (data.Jobs.length === 0) {
    content = <tr className="text-center my-2 text-xs">No Job available</tr>;
  } else if (!isLoading && data?.Jobs) {
    content = data.Jobs.map((job) => (
      <AdminSingleJob key={job._id} job={job} />
    ));
  }
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
          <option value={"noValue"}>Filter By Category</option>
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
          onChange={(e) => setEmailSearch(e.target.value)}
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
          <tbody>{content}</tbody>
        </table>
        <div className="flex justify-center btn-group mt-5">
          <button className="btn">«</button>
          <span className="btn">Page 1</span>
          <button className="btn">»</button>
        </div>
      </div>
    </>
  );
};

export default AdminJobs;
