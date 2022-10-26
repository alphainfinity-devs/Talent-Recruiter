import React, { useEffect, useState } from "react";
import { FaUsersCog } from "react-icons/fa";
import { useAdminGetUsersQuery } from "../../../features/adminUsers/adminUsersAPI";
import TablePlaceholder from "../../../utils/TablePlaceholder";
import SingleUser from "../adminPageComponents/SingleUser";

const AdminUsers = () => {
  const [emailSearch, setEmailSearch] = useState("");
  const [doEmail, setDoEmail] = useState("");
  const [actionValue, setActionValue] = useState("");
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useAdminGetUsersQuery(
    { email: doEmail, role: actionValue, page, limit: 2 },
    {
      refetchOnMountOrArgChange: true,
    },
  );
  //write debounce function
  useEffect(() => {
    const getSearchValue = setTimeout(() => {
      if (emailSearch) {
        setDoEmail(emailSearch);
      } else {
        setDoEmail("");
      }
    }, 1000);
    return () => clearTimeout(getSearchValue);
  }, [emailSearch]);
  console.log(data);
  // decide what to render
  let content;
  if (isLoading && !error) {
    content = <TablePlaceholder />;
  } else if (error && !isLoading) {
    content = (
      <tr className="text-xl text-red-500 text-center">
        <td>There was an error occurred</td>
      </tr>
    );
  } else if (!isLoading && !error && data?.users?.length === 0) {
    content = (
      <tr>
        <td className="flex items-center justify-center text-xl text-red-400 space-y-3">
          No users found
        </td>
      </tr>
    );
  } else if (data?.users && !isLoading && !error) {
    content = data.users.map((user) => (
      <SingleUser key={user._id} user={user} />
    ));
  }
  console.log(data?.totalPages);
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
          onChange={(e) => setActionValue(e.target.value)}
          className="select select-ghost w-full max-w-xs md:my-0 my-3"
          defaultValue="">
          <option value={""}>Filter User Role</option>
          <option value="applicant">Applicant</option>
          <option value="recruiter">Recruiter</option>
        </select>
        <input
          type="text"
          placeholder="Search by Email"
          className="input input-bordered input-primary w-full max-w-xs md:my-0 my-3"
          name="search"
          value={emailSearch}
          onChange={(e) => setEmailSearch(e.target.value)}
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
          <button
            onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))}
            className="p-4 bg-gray-400">
            «
          </button>
          <span className="p-4 badge-primary">Page {data?.currentPage}</span>
          <button
            onClick={() =>
              setPage((prev) =>
                prev < data?.totalPages ? prev + 1 : data?.totalPages,
              )
            }
            className="p-4 bg-gray-400">
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
