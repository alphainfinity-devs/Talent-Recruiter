import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddBlogPostMutation } from "../../../features/blogPost/blogPostAPI";
import imgBBUpload from "../../../utils/imgBBUpload";

const AdminAddPost = () => {
  const { id } = useParams() || {};
  const [titleInput, setTitleInput] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [imgUploadLoading, setImgUploadLoading] = useState(false);
  const [fileImg, setFileImg] = useState("");
  const ref = useRef();
  const [addBlogPost, { isError, error, isLoading, data: addPost }] =
    useAddBlogPostMutation();
  // form reset function
  const setResetValues = () => {
    setTitleInput("");
    setDescription("");
    setAuthor("");
    setCategory("");
    setFileImg("");
    ref.current.value = "";
  };
  useEffect(() => {
    if (isError) {
      toast.error(`Error ${error?.message}`, {
        toastId: "error",
      });
    }
    if (addPost?.success) {
      setResetValues();
      toast.success("Post added successfully", {
        toastId: "success",
      });
    }
  }, [addPost?.success, isError, error?.message]);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setImgUploadLoading(true);
    const formData = new FormData();
    formData.append("image", fileImg);
    const img_url = await imgBBUpload(formData); //img upload utils fn
    setImgUploadLoading(false);
    if (img_url) {
      await addBlogPost({
        post_title: titleInput,
        post_description: description,
        post_image: img_url,
        post_author: author,
        post_category: category,
      });
      setResetValues();
    }
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-3 h-screen">
      <div className="block p-2 rounded-lg shadow-lg bg-white ">
        <form onSubmit={handlePostSubmit} encType="multipart/form-data">
          <div className=" mb-6">
            <input
              required
              value={titleInput}
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
          <div className=" mb-6">
            <input
              required
              value={author}
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
          <div className=" mb-6">
            <input
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
              placeholder="Category name"
            />
          </div>
          <div className="flex items-center mb-6">
            <input
              required
              ref={ref}
              accept="image/*"
              name="image"
              onChange={(e) => setFileImg(e.target.files[0])}
              type="file"
              className="form-control block
              cursor-pointer
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
            <div className="tooltip" data-tip="Recommended 600px X 600 px">
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
          </div>
          <div className=" mb-6">
            <textarea
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
              placeholder="Enter post description"
              rows={6}></textarea>
          </div>
          <button
            disabled={imgUploadLoading || isLoading}
            type="submit"
            className={`${
              (imgUploadLoading || isLoading) && "cursor-wait btn-success"
            } btn btn-primary`}>
            {imgUploadLoading || isLoading
              ? "Loading..."
              : id
              ? "Update Post"
              : "Add Post"}
          </button>
        </form>
      </div>
      {/* ================== preview section ============= */}
      {(titleInput || author || description || fileImg || category) && (
        <>
          <div className="block p-2 rounded-lg shadow-lg bg-white ">
            <h2 className="text-2xl text-center text-gray-600 my-4">Preview</h2>
            {titleInput && (
              <div className=" mb-6">
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
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none">
                  {titleInput}
                </h2>
              </div>
            )}
            {author && (
              <div className=" mb-6">
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
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none">
                  {author}
                </h2>
              </div>
            )}
            {category && (
              <div className=" mb-6">
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
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none">
                  {category}
                </h2>
              </div>
            )}
            {fileImg && (
              <div className=" mb-6">
                <img
                  src={URL.createObjectURL(fileImg)}
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
              <div className=" mb-6">
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
        </>
      )}
    </div>
  );
};

export default AdminAddPost;
