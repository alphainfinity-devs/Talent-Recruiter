import React from "react";

const LoginInfo = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor="login-info-modal"
        className="btn btn-primary text-white w-full"
      >
        click for login information
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="login-info-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">
            You can check all of our deshboard
          </h3>
          <div className="border p-2">
            <p className="py-1 font-semibold">Admin Email: admin@gmail.com</p>
            <p className="py-1 font-semibold">Admin password: 123456</p>
          </div>
          <div className="border p-2 my-1">
            <p className="py-1 font-semibold ">
              Recruiter Email: recruiter@gmail.com
            </p>
            <p className="py-1 font-semibold">Recruiter Password: 123456</p>
          </div>
          <div className="border p-2">
            <p className="py-1 font-semibold ">
              Applicant Email: applicant@gmail.com
            </p>
            <p className="py-1 font-semibold">Applicant Password: 123456</p>
          </div>

          <div className="modal-action">
            <label htmlFor="login-info-modal" className="btn btn-sm">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginInfo;
