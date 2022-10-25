import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useAddBlogPostMutation,
  useGetBlogPostQuery,
  useUpdateBlogPostMutation,
} from "../../../features/blogPost/blogPostAPI";
import imgBBUpload from "../../../utils/imgBBUpload";
import AdminPostPreview from "../adminPageComponents/AdminPostPreview";

const AdminAddPost = () => {
  const { id } = useParams() || {};
  const {
    isLoading: getPostLoading,
    error: getPostError,
    data: getPostData,
  } = useGetBlogPostQuery(id ? { id } : {}, {
    skip: !id,
  });
  const {
    post_author,
    post_category,
    post_title,
    post_description,
    post_image,
  } = getPostData?.post || {};
  const [titleInput, setTitleInput] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [imgUploadLoading, setImgUploadLoading] = useState(false);
  const [fileImg, setFileImg] = useState("");
  const ref = useRef();
  const [addBlogPost, { isError, error, isLoading, data: addPost }] =
    useAddBlogPostMutation();
  const [
    updateBlogPost,
    { isLoading: updateLoading, error: updateError, data: updateData },
  ] = useUpdateBlogPostMutation();
  useEffect(() => {
    if (id) {
      setTitleInput(post_title);
      setDescription(post_description);
      setAuthor(post_author);
      setCategory(post_category);
      setFileImg(post_image);
    } else {
      setResetValues();
    }
  }, [
    // getPostData,
    id,
    post_author,
    post_category,
    post_description,
    post_title,
    post_image,
  ]);
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
    if (isError || getPostError) {
      toast.error(`Error ${error}`, {
        toastId: "error",
      });
    }
    if (addPost?.success) {
      setResetValues();
      toast.success("Post added successfully", {
        toastId: "success",
      });
    }
  }, [addPost?.success, isError, error?.message, getPostError, error]);

  // console.log(getPostData);
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setImgUploadLoading(true);
    const formData = new FormData();
    formData.append("image", fileImg);
    const img_url = await imgBBUpload(formData); //img upload utils fn
    setImgUploadLoading(false);
    if (img_url && !id) {
      await addBlogPost({
        post_title: titleInput,
        post_description: description,
        post_image: img_url,
        post_author: author,
        post_category: category,
      });
    } else {
      const body = {
        post_title: titleInput,
        post_description: description,
        post_image: img_url,
        post_author: author,
        post_category: category,
      };
      await updateBlogPost({
        id,
        body,
      });
    }
    setResetValues();
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-3 h-screen">
      <div className="block p-2 rounded-lg shadow-lg bg-white ">
        <form onSubmit={handlePostSubmit} encType="multipart/form-data">
          <div className=" mb-6">
            <input
              required={id ? false : true}
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
             required={id ? false : true}
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
              required={id ? false : true}
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
              required={id ? false : true}
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
              required={id ? false : true}
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
            {getPostLoading || imgUploadLoading || isLoading
              ? "Loading..."
              : id
              ? "Update Post"
              : "Add Post"}
          </button>
        </form>
      </div>
      {/* ================== preview section ============= */}
      {(titleInput || author || description || fileImg || category) && (
        <AdminPostPreview
          titleInput={titleInput}
          author={author}
          description={description}
          fileImg={fileImg}
          category={category}
        />
      )}
    </div>
  );
};

export default AdminAddPost;
