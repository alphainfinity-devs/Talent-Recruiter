import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDeleteBlogPostMutation } from "../../../features/blogPost/blogPostAPI";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { TailSpin } from "react-loader-spinner";
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
  const [deleteBlogPost, { isLoading, error, isSuccess }] =
    useDeleteBlogPostMutation();
  const [loadingId, setLoadingId] = useState("");
  useEffect(() => {
    if (error) {
      toast.error(`Error ${error?.message}`, {
        toastId: "error",
      });
    }
    if (isSuccess) {
      toast.success("Post deleted successfully", {
        toastId: "success",
      });
    }
  }, [error, isSuccess]);

  const handleDeletePost = (id) => {
    setLoadingId(id);
    confirmAlert({
      title: "Are you sure to delete this post?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteBlogPost(id),
        },
        {
          label: "No",
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
      className: "bg-opacity-50 bg-gray-500",
    });
  };
  return (
    <>
      <div className="card w-full bg-info">
        <div className="card-body items-center text-center">
          <h2 className="text-xl font-bold">{post_title}</h2>
          <div className="text-xs mt-3">
            {post_description?.length > 100
              ? post_description.slice(0, 100) + "..."
              : post_description}
            <br />
            <span className="text-xs hover:text-success font-bold text-white cursor-pointer">
              Read More
            </span>
          </div>
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
            {isLoading && loadingId === _id ? (
              <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="5"
                wrapperStyle={{}}
                wrapperclassName=""
                visible={true}
              />
            ) : (
              <>
                <NavLink
                  className="btn btn-success rounded mr-2"
                  to={`/admin/admin-add-post/${_id}`}
                >
                  Edit
                </NavLink>
                <button
                  onClick={() => handleDeletePost(_id)}
                  className="btn rounded ml-2"
                >
                  Delete
                </button>
              </>
            )}
          </div>
          <p className="text-xs font-bold my-2">Category: {post_category}</p>
        </div>
      </div>
    </>
  );
};

export default AdminBlogCard;
