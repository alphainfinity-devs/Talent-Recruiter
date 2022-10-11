import React from "react";
import { NavLink } from "react-router-dom";
import imgIcon from "../../../assets/images/search.png";

const AdminAllPosts = () => {

  const handleDeletePost = (e, id) => {
    alert(`are you sure? ${id}`);
  };
  return (
    <div className="grid md:grid-cols-3 md:mx-1 mx-2 grid-cols-1 gap-4">
      <div className="card w-full bg-info">
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-bold">Hello Job hunter</h2>
          <p className="text-xs mt-3">
            Welcome to Talent Recruiter job portal...
            <br />
            <span className="text-xs hover:text-success font-bold text-primary cursor-pointer">
              Read More
            </span>
          </p>
          <div className="flex items-center mt-3">
            <img
              src={imgIcon}
              className="mr-3 p-1 w-20 h-20 rounded-full border-red-400 border-2"
              alt="admin avatar"
            />
            <div className="text-start">
              <h2>Admin</h2>
              <h2>November 22, 2022</h2>
            </div>
          </div>
          <div className="flex mt-4">
            <NavLink
              className="btn btn-success rounded-full mr-2"
              to={`/about/admin-add-post/${1}`}>
              Edit
            </NavLink>
            <button
              className="btn btn-danger rounded-full ml-2"
              onClick={handleDeletePost}>
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAllPosts;
