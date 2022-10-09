import React from "react";

const AdminDetails = () => {
  return (
    <>
      <figure className="w-full">
        <img
          src="https://placeimg.com/400/225/arch"
          className="w-full h-80"
          alt="car!"
        />
      </figure>
      <div className="flex justify-center">
        <div className="avatar online top-[-50px]">
          <div className="w-24 border-secondary border-2 rounded-full">
            <img src="https://placeimg.com/192/192/people" alt="avatar" />
          </div>
        </div>
      </div>
      <div className="flex justify-center relative top-[-20px]">
        <div className="flex py-4 justify-center w-[600px] rounded-[10px] bg-primary shadow-[35px_35px_70px_#308e3c,-35px_-35px_70px_#42c051]">
          <div>
          <h3 className="my-2 text-xl">Name: Jibon Ahmed</h3>
          <p className="my-2 text-xl">Bio: Web developer</p>
          <h3 className="my-2 text-xl">Age: 25</h3>
          <h3 className="my-2 text-xl">Address: Dhaka, Bangladesh</h3>
          <h3 className="my-2 text-xl">Email:jibon@gmail.com</h3>
          <button className="btn btn-primary rounder-full">Update</button>
         </div>
        </div>
      </div>
    </>
  );
};

export default AdminDetails;
