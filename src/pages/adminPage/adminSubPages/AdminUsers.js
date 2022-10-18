import React, { useEffect, useState } from "react";
import { FaUsersCog } from "react-icons/fa";
import { useAdminGetUsersQuery } from "../../../features/adminUsers/adminUsersAPI";
import TablePlaceholder from "../../../utils/TablePlaceholder";
import SingleUser from "../adminPageComponents/SingleUser";

const AdminUsers = () => {
  const [emailSearch, setEmailSearch] = useState("");
  const { isLoading, error, data } = useAdminGetUsersQuery();
  //write debounce function
  useEffect(() => {
    const getSearchValue = setTimeout(() => {
      if (emailSearch) console.log(emailSearch, "do email Search");
    }, 1000);
    return () => clearTimeout(getSearchValue);
  }, [emailSearch]);

  // decide what to render
  let content;
  if (isLoading && !error) {
    content = <TablePlaceholder />;
  } else if (error && !isLoading) {
    content = <tr className="text-xl text-red-500 text-center">There was an error occurred</tr>
  } else if (data?.users && !isLoading && !error) {
    content = data.users.map((user) => (
      <SingleUser key={user._id} user={user} />
    ));
  }
  return (
    <div className="m-0 relative md:top-0">
      <div className="flex items-center justify-center md:my-14 my-3">
        <FaUsersCog size={40} className="mr-2" />
        <h2 className="md:text-3xl uppercase md:font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary">
          All Registered Users
        </h2>
      </div>
      <div className="flex md:flex-row flex-col items-center md:justify-between md:my-6 my-2 px-2">
        <select
          className="select select-ghost w-full max-w-xs md:my-0 my-3"
          defaultValue="noValue">
          <option value={"noValue"} disabled>
            Filter User Role
          </option>
          <option>Applicant</option>
          <option>Recruiter</option>
          <option>Investor</option>
        </select>
        <input
          type="text"
          placeholder="Search by Email"
          className="input input-bordered input-primary w-full max-w-xs md:my-0 my-3"
          name="search"
          value={emailSearch}
          onChange={setEmailSearch}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="relative">Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
        <div className="flex justify-center btn-group mt-5">
          <button className="btn">«</button>
          <span className="btn">Page 22</span>
          <button className="btn">»</button>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
