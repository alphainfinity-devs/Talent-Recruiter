import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { ImCross } from "react-icons/im";

const SingleUser = ({ user }) => {
  const { name, email, role } = user || {};
  const [actionValue, setActionValue] = useState("");
  useEffect(() => {
    if (actionValue === "delete") {
      console.log("delete");
    } else if (actionValue === "edit") {
      console.log("edit");
    } else if (actionValue === "warning") {
      console.log("warning");
    }
  }, [actionValue]);
  const handleCheck = (e) => {
    /* if (e.target.checked) {
          setActionValue(e.target.value);
        } else {
          setActionValue("");
        } */
  };

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <Avatar name={name} maxInitials={2} size={50} />
              </div>
            </div>
            <div>
              <div className="font-bold capitalize">{name}</div>
            </div>
          </div>
        </td>
        <td className="capitalize">
          {role}
          <br />
          <span className="badge badge-primary opacity-75 badge-sm">
            Active User
          </span>
        </td>
        <td>{email}</td>
        <th>
          {actionValue === "edit" ? (
            <div className="flex justify-center items-center">
              <span className="label-text" onClick={() => setActionValue("")}>
                <ImCross className="cursor-pointer hover:text-secondary-focus" />
              </span>
              <label className="cursor-pointer label">
                <span className="label-text mx-2">Make Admin</span>
                <input
                  type="checkbox"
                  onChange={handleCheck}
                  // checked
                  className="checkbox checkbox-accent"
                />
              </label>
            </div>
          ) : (
            <select
              onChange={(e) => setActionValue(e.target.value)}
              className="select select-ghost"
              defaultValue={"defaultValue"}>
              <option disabled value="defaultValue">
                Select Action
              </option>
              <option value={"delete"} className="text-error cursor-pointer">
                Delete
              </option>
              <option
                value={"warning"}
                className="text-yellow-400 cursor-pointer">
                Warning
              </option>
              <option value={"edit"} className="text-success cursor-pointer">
                Edit User Role
              </option>
            </select>
          )}
        </th>
      </tr>
    </>
  );
};

export default SingleUser;
