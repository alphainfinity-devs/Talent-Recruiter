import React, { useEffect, useState } from "react";
import { useSingleEmailSendMutation } from "../../../features/emailCampaignSlice/emailCampaignSlice";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
const AdminEmailCampaign = () => {
  const [titleInput, setTitleInput] = useState("");
  const [description, setDescription] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [singleEmailSend, { isLoading, error, isSuccess }] =
    useSingleEmailSendMutation();
  useEffect(() => {
    if (error) {
      toast.error("There is an error", {
        toastId: "error",
      });
    }
    if (isSuccess) {
      setTitleInput("");
      setDescription("");
      setUserEmail("");
      toast.success("Email sent successfully", {
        toastId: "success",
      });
    }
  }, [error, isSuccess]);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (checkBox) {
      singleEmailSend({
        email_subject: titleInput,
        email_body: description,
        email: userEmail,
      });
    } else {
      singleEmailSend({
        email_subject: titleInput,
        email_body: description,
      });
    }
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-3 h-screen my-5">
      <div className="block p-2 rounded-lg shadow-lg bg-white ">
        <form onSubmit={handlePostSubmit}>
          <div className="flex justify-center mb-6">
            <label>Want to send a single user ?</label>
            {error && (
              <label className="text-xs text-red-500">{error?.message}</label>
            )}
            <div className="tooltip" data-tip="By default all user selected">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current flex-shrink-0 w-6 h-6 mx-3 cursor-pointer">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <input
              onClick={() => setCheckBox(!checkBox)}
              type="checkbox"
              className="form-control checkbox checkbox-primary"
            />
          </div>
          {checkBox && (
            <div className="mb-6">
              <input
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                type="email"
                required
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                placeholder="Enter user email"
              />
            </div>
          )}
          <div className="mb-6">
            <input
              onChange={(e) => setTitleInput(e.target.value)}
              type="text"
              value={titleInput}
              required
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
              placeholder="Enter email subject"
            />
          </div>

          <div className="mb-6">
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
              placeholder="Enter email body"
              rows={6}></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn flex justify-center items-center mx-auto btn-primary bg-opacity-90">
            {isLoading ? (
              <ThreeDots
                height="20"
                width="80"
                radius="12"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              "Sent Email"
            )}
          </button>
        </form>
      </div>
      {/*=========== preview section ========*/}
      {(titleInput || description || userEmail) && (
        <div className="block p-2 rounded-lg shadow-lg bg-white ">
          <div className="mb-6">
            <h2
              className="form-control
              font-bold
              text-center
        block
        w-full
        px-3
        py-1.5
        text-base
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
">
              Preview
            </h2>
          </div>
          {userEmail && checkBox && (
            <div className="mb-6">
              <h2
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none">
                {userEmail}
              </h2>
            </div>
          )}
          {titleInput && (
            <div className="mb-6">
              <h2
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                placeholder="Enter post title">
                {titleInput}
              </h2>
            </div>
          )}

          {description && (
            <div className="mb-6">
              <p
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none">
                {description}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminEmailCampaign;
