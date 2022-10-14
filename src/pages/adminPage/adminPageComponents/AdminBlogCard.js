import React from "react";
import { NavLink } from "react-router-dom";

const AdminBlogCard = ({ blog }) => {
  const {
    _id,
    post_title,
    post_description,
    post_image,
    post_author,
    post_category,
    post_date,
  } = blog || {};
  const handleDeletePost = (id) => {
    alert(`are you sure? ${id}`);
  };
  return (
    <div className="card w-full bg-info">
      <div className="card-body items-center text-center">
        <h2 className="text-2xl font-bold">{post_title}</h2>
        <p className="text-xs mt-3">
          {post_description}
          <br />
          <span className="text-xs hover:text-success font-bold text-primary cursor-pointer">
            Read More
          </span>
        </p>
        <div className="flex items-center mt-3">
          <img
            src={post_image}
            className="mr-3 p-1 w-20 h-20 rounded-full border-red-400 border-2"
            alt="admin avatar"
          />
          <div className="text-start">
            <h2>{post_author}</h2>
            <h2>{post_date}</h2>
          </div>
        </div>
        <div className="flex mt-4">
          <NavLink
            className="btn btn-success rounded-full mr-2"
            to={`/dashboard/admin-add-post/${_id}`}>
            Edit
          </NavLink>
          <button
            className="btn btn-danger rounded-full ml-2"
            onClick={()=>handleDeletePost(_id)}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogCard;
