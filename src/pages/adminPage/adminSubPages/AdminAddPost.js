import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AdminAddPost = () => {
  const { id } = useParams() || {};
  const [titleInput, setTitleInput] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [fileImg, setFileImg] = useState("");
  const handlePostSubmit = (e) => {
    e.preventDefault();
    console.log(titleInput, description, author, fileImg, "formData");
    const formData = new FormData();
    formData.append("fileImg", fileImg);
    fetch("http://localhost:5000/addPost", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-3 h-screen">
      <div className="block p-2 rounded-lg shadow-lg bg-white ">
        <form onSubmit={handlePostSubmit}>
          <div className="form-group mb-6">
            <input
              onChange={(e) => setTitleInput(e.target.value)}
              type="text"
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
              placeholder="Enter post title"
            />
          </div>
          <div className="form-group mb-6">
            <input
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
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
              placeholder="Author name"
            />
          </div>
          <div className="form-group mb-6">
            <input
              onChange={(e) => setFileImg(e.target.files[0])}
              type="file"
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
            />
          </div>
          <div className="form-group mb-6">
            <textarea
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
              placeholder="Enter post description"
              rows={6}></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            {id ? "Update Post" : "Add Post"}
          </button>
        </form>
      </div>

      {(titleInput || author || description || fileImg) && (
        <div className="block p-2 rounded-lg shadow-lg bg-white ">
          {titleInput && (
            <div className="form-group mb-6">
              <h2
                type="text"
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
          {author && (
            <div className="form-group mb-6">
              <h2
                type="text"
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
                placeholder="Post writer name">
                {author}
              </h2>
            </div>
          )}
          {fileImg && (
            <div className="form-group mb-6">
              <img
                src={fileImg?.name}
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
                alt="post img"
              />
            </div>
          )}
          {description && (
            <div className="form-group mb-6">
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

export default AdminAddPost;
