import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { ImCross } from "react-icons/im";
import {
  useAdminDeleteUserMutation,
  useAdminUpdateUserMutation,
  useAdminWarningUserMutation,
} from "../../../features/adminUsers/adminUsersAPI";
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";
const SingleUser = ({ user }) => {
  const { _id, name, email, role } = user || {};
  const [actionValue, setActionValue] = useState("");
  const [check, setCheck] = useState({ status: false, role: "" });
  const [adminUpdateUser, { isLoading, error, data, isSuccess }] =
    useAdminUpdateUserMutation();
  const [
    adminWarningUser,
    {
      isLoading: warningLoading,
      error: warningError,
      isSuccess: warningSuccess,
    },
  ] = useAdminWarningUserMutation();
  const [
    adminDeleteUser,
    { isLoading: deleteLoading, error: deleteError, isSuccess: deleteSuccess },
  ] = useAdminDeleteUserMutation();
  useEffect(() => {
    if (actionValue === "delete") {
      const isTrue = window.confirm(
        "Are you sure you want to delete this user?"
      );
      console.log(isTrue);
      if (isTrue) {
        adminDeleteUser(_id);
      }
    } else if (actionValue === "warning") {
      adminWarningUser(email);
    }
  }, [actionValue, adminWarningUser, adminDeleteUser, email, _id]);

  useEffect(() => {
    if (check.status) {
      // do update the role
    }
  }, [check, _id, adminUpdateUser]);

  useEffect(() => {
    setActionValue("");
    if (error || warningError || deleteError) {
      toast.error(`${error || warningError || deleteError}`, {
        toastId: "error",
      });
    }
    if (isSuccess || warningSuccess || deleteSuccess) {
      toast.success(
        `${
          isSuccess
            ? "User role updated"
            : warningSuccess
            ? "Warning was sent to this user"
            : "User was deleted"
        }`,
        {
          toastId: "success",
        }
      );
      setActionValue("defaultValue");
      setCheck({ status: false, role: "" });
    }
  }, [
    error,
    isSuccess,
    warningSuccess,
    warningError,
    deleteSuccess,
    deleteError,
  ]);

  const handleCheck = (e) => {
    console.log(e.target.name);
    // setCheck({ ...check, status: true, role: e.target.name });
    adminUpdateUser({ id: _id, role: e.target.name });
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
          {data?.user.role ? data.user.role : role}
          <br />
          <span className="badge badge-primary opacity-75 badge-sm">
            Active User
          </span>
        </td>
        <td>{email}</td>
        <th>
          {actionValue === "edit" ? (
            <div className="flex justify-center items-center">
              <span
                className="p-2 rounded-full border-2 border-primary"
                onClick={() => setActionValue("")}
              >
                <ImCross className="cursor-pointer hover:text-secondary-focus" />
              </span>
              {isLoading ? (
                <ColorRing
                  visible={true}
                  height="40"
                  width="40"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperclassName="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              ) : (
                <form onChange={handleCheck} className="cursor-pointer label">
                  <span className="label-text mx-2">Admin</span>
                  <input
                    type="checkbox"
                    // onChange={handleCheck}
                    name="admin"
                    // checked={check.status}
                    className="checkbox checkbox-accent"
                  />
                  <span className="label-text mx-2">Recruiter</span>
                  <input
                    name="recruiter"
                    type="checkbox"
                    // onChange={handleCheck}
                    // checked={check.status}
                    className="checkbox checkbox-accent"
                  />
                  <span className="label-text mx-2">Applicant</span>
                  <input
                    name="applicant"
                    type="checkbox"
                    // onChange={handleCheck}
                    // checked={check.status}
                    className="checkbox checkbox-accent"
                  />
                </form>
              )}
            </div>
          ) : warningLoading || deleteLoading ? (
            <div className="flex text-white justify-center items-center animate-pulse bg-slate-700">
              Loading...
            </div>
          ) : (
            <select
              onChange={(e) => setActionValue(e.target.value)}
              className={`${
                role === "administrator" && "hidden"
              } select select-ghost`}
              defaultValue={"defaultValue"}
            >
              <option value={"defaultValue"}>Select Action</option>
              <option value={"delete"} className="text-error cursor-pointer">
                Delete
              </option>
              <option
                value={"warning"}
                className="text-yellow-400 cursor-pointer"
              >
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
