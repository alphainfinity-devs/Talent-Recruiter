import React from "react";

const UserDeleteModal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="font-bold text-lg">
            Are you sure you want to delete this user?
          </h3>
          <p className="py-4">
            Once you delete this user, there is no going back. Please be
            certain.
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              <input type="submit" value="Confirm" />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDeleteModal;
