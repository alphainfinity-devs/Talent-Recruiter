import React, { useState } from "react";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import moment from "moment";
const AdminDetails = () => {
  const [imageLoad, setImageLoad] = useState(true);
  const { user } = useSelector((state) => state.auth || {});
  const { email, createAt, name, role } = user || {};
  return (
    <>
      <div className="h-fit">
        <figure>
          {imageLoad && (
            <div className="w-full h-80 animate-pulse">
              <progress
                className="progress h-12 bg-success w-full"
                value="100"
                max="100"></progress>
              <progress
                className="progress h-12 bg-success w-full"
                value="100"
                max="100"></progress>
              <progress
                className="progress h-12 bg-success w-full"
                value="100"
                max="100"></progress>
            </div>
          )}

          <img
            src="https://placeimg.com/400/225/arch"
            className={imageLoad ? "hidden" : undefined + " w-full h-80"}
            alt="cover"
            onLoad={() => setImageLoad(false)}
          />
        </figure>
        <div className="flex justify-center">
          <div className="avatar online top-[-50px]">
            <div className="w-24 border-secondary border-2 rounded-full">
              <Avatar name={name} maxInitials={2} round={true} />
            </div>
          </div>
        </div>
        <div className="flex justify-center relative top-[-20px]">
          <div className="flex py-4 justify-center w-[600px] bg-opacity-70 rounded-[10px] bg-primary shadow-[5px_5px_0px_#308e3c,-5px_-5px_0px_#42c051]">
            <div>
              <h3 className="my-2 text-xl">Name: {name}</h3>
              <p className="my-2 text-xl">Bio: Web developer</p>
              <h3 className="my-2 text-xl">User Type: {role}</h3>
              <h3 className="my-2 text-xl">
                Created At: {moment(createAt).format("YYYY / MM / DD")}
              </h3>
              <h3 className="my-2 text-xl">Email: {email}</h3>
              <button className="btn btn-primary rounder-full">Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDetails;
