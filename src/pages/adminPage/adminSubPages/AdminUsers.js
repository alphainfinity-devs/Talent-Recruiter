import React, { useEffect, useState } from "react";
import { FaUsersCog } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import dummyImg from "../../../assets/img/team-1-800x800.jpg";

const AdminUsers = () => {
  const [actionValue, setActionValue] = useState("");
  const [emailSearch, setEmailSearch] = useState("");
  useEffect(() => {
    if (actionValue === "delete") {
      console.log("delete");
    } else if (actionValue === "edit") {
      console.log("edit");
    } else if (actionValue === "warning") {
      console.log("warning");
    }
  }, [actionValue]);

  return (
    <>
      <div className="flex items-center justify-center my-4">
        <FaUsersCog size={40} className="mr-2" />
        <h2 className="md:text-3xl uppercase md:font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary">
          All Registered Users
        </h2>
      </div>
      <div className="flex md:flex-row flex-col justify-between">
        <select
          className="select select-ghost w-full max-w-xs my-2"
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
          className="input input-bordered input-primary w-full max-w-xs"
          name="search"
          value={emailSearch}
          onChange={setEmailSearch}
        />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={dummyImg} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Applicant
                <br />
                <span className="badge badge-primary opacity-75 badge-sm">
                  Active User
                </span>
              </td>
              <td>purple@gmail.com</td>
              <th>
                {actionValue === "edit" ? (
                  <div className="flex justify-center items-center">
                    <span
                      className="label-text"
                      onClick={() => setActionValue("")}>
                      <ImCross className="cursor-pointer hover:text-secondary-focus" />
                    </span>
                    <label className="cursor-pointer label">
                      <span className="label-text mx-2">Make Admin</span>
                      <input
                        type="checkbox"
                        // checked
                        className="checkbox checkbox-accent"
                      />
                    </label>
                  </div>
                ) : (
                  <select
                    onChange={(e) => setActionValue(e.target.value)}
                    className="select select-ghost w-full"
                    defaultValue={"defaultValue"}>
                    <option disabled value="defaultValue">
                      Select Action
                    </option>
                    <option
                      value={"delete"}
                      className="text-error cursor-pointer">
                      Delete
                    </option>
                    <option
                      value={"warning"}
                      className="text-yellow-400 cursor-pointer">
                      Warning
                    </option>
                    <option
                      value={"edit"}
                      className="text-success cursor-pointer">
                      Edit User Role
                    </option>
                  </select>
                )}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminUsers;
