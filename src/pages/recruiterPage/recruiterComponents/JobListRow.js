import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteJobMutation } from "../../../features/requiter/recruiterApi";
import { confirmAlert } from "react-confirm-alert"; // Import
import { toast } from "react-toastify";
import { SiAmazonpay } from "react-icons/si";
import moment from "moment";
moment().format();

const JobListRow = ({ job }) => {
  const [deleteJob, { isSuccess, isError }] = useDeleteJobMutation();
  const navigate = useNavigate();
  let link = `/recruiter/job/applicants/${job._id}`;
  let jobDetail = `/job/${job._id}`;

  useEffect(() => {
    if (isSuccess) {
      toast.success("Delete Successful", {
        toastId: "success1",
      });
    } else if (isError) {
      toast.error("Delete Fail. Try Again", {
        toastId: "error2",
      });
    }
  }, [isSuccess, isError]);

  const handleDelete = (id) => {
    const deleteJobConfirm = () => deleteJob(id);
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure Delete this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteJobConfirm(),
        },
        {
          label: "No",
          onClick: () => null,
        },
      ],
    });
  };
  console.log(job.status);
  const handlePayment = (id) => {
    const paymentConfirm = () => navigate(`payment/${id}`);
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to pay for this job.",
      buttons: [
        {
          label: "Yes",
          onClick: () => paymentConfirm(),
        },
        {
          label: "No",
          onClick: () => null,
        },
      ],
    });
  };

  return (
    <>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <span className="font-medium">{job.title}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
            {job.status ? "Active" : "Pending"}
          </span>
        </td>
        <td className="py-3 px-6 text-center">
          {moment(job.createdAt).fromNow()}
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <Link to={link}>
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <Link to={jobDetail}>
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </Link>
            <div
              onClick={() => handleDelete(job._id)}
              className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <div
              aria-disabled={job.status === false ? false : true}
              onClick={() =>
                job.status === false ? null : handlePayment(job._id)
              }
              className={`${
                job.status === false && "cursor-not-allowed"
              } w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer`}>
              <SiAmazonpay size={20} />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default JobListRow;
