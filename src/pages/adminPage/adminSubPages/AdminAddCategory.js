import React, { useEffect } from "react";
import { useAddCategoryMutation } from "../../../features/category/categoryApi";
import { BsCheck2Circle } from "react-icons/bs";
import { toast } from "react-toastify";
import { Comment } from "react-loader-spinner";
const AdminAddCategory = () => {
  const [addCategory, { isLoading, isError, isSuccess }] =
    useAddCategoryMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    if (category) {
      addCategory({ category, status: true });
    }
    e.target.reset();
  };
  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong", {
        toastId: "addCategoryError",
      });
    }
    if (isSuccess) {
      toast.success("Category added successfully", {
        toastId: "addCategorySuccess",
      });
    }
  }, [isError, isSuccess]);

  return (
    <>
      <div className="">
        <div className="mockup-window border bg-base-300">
          <div className="flex justify-center px-4 py-16 bg-base-200">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  required
                  className="form-control p-2"
                  name="category"
                  placeholder="Category name"
                />
                <button
                  disabled={isLoading}
                  type="submit"
                  className={!isLoading ? "btn btn-primary" : undefined}
                >
                  {isLoading ? (
                    <Comment
                      width={100}
                      height={40}
                      visible={true}
                      ariaLabel="comment-loading"
                      wrapperclassName="btn"
                      color="#fff"
                      backgroundColor="#39a746"
                    />
                  ) : (
                    <BsCheck2Circle size={25} />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAddCategory;
