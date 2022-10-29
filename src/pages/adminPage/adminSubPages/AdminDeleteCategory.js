import React, { useEffect } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { ProgressBar } from "react-loader-spinner";
import { toast } from "react-toastify";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../../features/category/categoryApi";

const AdminDeleteCategory = () => {
  const { isLoading, data, error } = useGetCategoryQuery();
  const [
    deleteCategory,
    { isLoading: deleteLoading, isSuccess, isError: deleteError },
  ] = useDeleteCategoryMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Category deleted", {
        toastId: "deleteCategorySuccess",
      });
    }
    if (deleteError) {
      toast.dismiss("delete Category Error", {
        toastId: "error",
      });
    }
  }, [isSuccess, deleteError]);

  // decide what to show based on the state
  let content;
  if (isLoading) {
    content = (
      <>
        <li className="animate-pulse">
          <progress
            className="progress h-12 bg-success w-full"
            value="100"
            max="100"
          ></progress>
        </li>
        <li className="animate-pulse">
          <progress
            className="progress h-12 bg-success w-full"
            value="100"
            max="100"
          ></progress>
        </li>
      </>
    );
  } else if (error) {
    toast.error("something went wrong", {
      toastId: "error",
    });
  } else if (data?.all_category?.length === 0) {
    content = (
      <li className="flex flex-col gap-4">
        <h2 className="text-red-500 text-center">There is no Category</h2>
      </li>
    );
  } else if (data?.all_category) {
    content = data.all_category.map((item) => (
      <li key={item._id}>
        <span>
          <button
            className="btn"
            disabled={deleteLoading}
            onClick={() => deleteCategory(item._id)}
          >
            {deleteLoading ? (
              <ProgressBar
                height="40"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperclassName="progress-bar-wrapper"
                borderColor="#F4442E"
                barColor="#51E5FF"
              />
            ) : (
              <RiDeleteBin2Line size={25} />
            )}
          </button>{" "}
          {item.category}
        </span>
      </li>
    ));
  }
  return (
    <>
      <h1 className="text-center text-2xl capitalize my-4">
        delete category {data?.all_category?.length}
      </h1>
      <ul className="menu grid md:grid-cols-2 gap-4 grid-cols-1 menu-compact lg:menu-normal w-full p-2 rounded-box">
        {content}
      </ul>
    </>
  );
};

export default AdminDeleteCategory;
