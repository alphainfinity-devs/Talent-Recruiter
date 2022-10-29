import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  useDeleteJobByAdminMutation,
  useUpdateJobByAdminMutation,
} from "../../../features/job/jobApi";
import { Blocks } from "react-loader-spinner";
import { toast } from "react-toastify";
const AdminSingleJob = ({ job }) => {
  const { _id, title, status, createdAt, user } = job || {};
  const [actionValue, setActionValue] = useState("");
  const [
    updateJobByAdmin,
    { isLoading: updateLoading, data, error: updateError },
  ] = useUpdateJobByAdminMutation();
  const [deleteJobByAdmin, { isLoading, error }] =
    useDeleteJobByAdminMutation();
  // console.log(data);
  useEffect(() => {
    if (updateError || error) {
      setActionValue("");
      toast.error("There is an error", {
        toastId: "error",
      });
    }
    if (actionValue === "delete") {
      deleteJobByAdmin({ id: _id });
    } else if (actionValue === "accept") {
      updateJobByAdmin({ id: _id, status: true });
    }
  }, [
    actionValue,
    _id,
    updateJobByAdmin,
    updateError,
    error,
    deleteJobByAdmin,
  ]);
  return (
    <>
      <tr>
        <th>{_id.slice(_id.length - 6)}</th>
        <td>{title.slice(0, 20)}</td>
        <td>Web Development</td>
        <td>Jhon Doe</td>
        <td>{moment(createdAt).format("MMM Do YY")}</td>
        <td>
          <span
            className={`${
              data?.job?.status || status ? "badge-primary" : "bg-gray-300"
            } badge opacity-75 badge-sm`}
          >
            {data?.job?.status || status ? "Active" : "Pending"}
          </span>
        </td>
        <th>
          {updateLoading || isLoading ? (
            <div className="flex items-center justify-center">
              <Blocks
                visible={true}
                height="50"
                width="50"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperclassName="blocks-wrapper"
              />
            </div>
          ) : (
            <select
              onChange={(e) => setActionValue(e.target.value)}
              className="select select-ghost"
              defaultValue={"defaultValue"}
            >
              <option value="defaultValue">Select Action</option>
              <option value={"delete"} className="text-error cursor-pointer">
                Delete
              </option>
              <option value={"accept"} className="text-success cursor-pointer">
                Accept
              </option>
            </select>
          )}
        </th>
      </tr>
    </>
  );
};

export default AdminSingleJob;
