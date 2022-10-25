import React from "react";

const AdminPostPreview = ({
  titleInput,
  author,
  description,
  fileImg,
  category,
}) => {
  return (
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
              src={fileImg || URL.createObjectURL(fileImg)}
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
  );
};

export default AdminPostPreview;
