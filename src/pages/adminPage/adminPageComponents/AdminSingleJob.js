import React, { useEffect, useState } from "react";

const AdminSingleJob = ({ job }) => {
  const { _id, title, description, status, createdAt, updatedAt, user } =
    job || {};
  const [actionValue, setActionValue] = useState("");
  useEffect(() => {
    if (actionValue === "reject") {
      console.log("reject");
    } else if (actionValue === "accept") {
      console.log("accept");
    }
  }, [actionValue]);
  return (
    <>
      <tr>
        <th>{_id.slice(_id.length - 6)}</th>
        <td>{title.slice(0, 20)}</td>
        <td>Web Development</td>
        <td>Jhon Doe</td>
        <td>12 May, 2022</td>
        <td>
          <span className="badge badge-primary opacity-75 badge-sm">
            {status? "Active":"Pending"}
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
            <option value={"reject"} className="text-error cursor-pointer">
              Reject
            </option>
            <option value={"accept"} className="text-success cursor-pointer">
              Accept
            </option>
          </select>
        </th>
      </tr>
    </>
  );
};

export default AdminSingleJob;
