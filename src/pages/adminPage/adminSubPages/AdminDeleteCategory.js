import React from "react";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../../features/category/categoryApi";

const AdminDeleteCategory = () => {
  const { isLoading, isError, data, error } = useGetCategoryQuery();
  const [
    deleteCategory,
    { isLoading: deleteLoading, isSuccess, isError: deleteError },
  ] = useDeleteCategoryMutation();
  console.log(data);
  return (
    <div>
      delete category {data?.all_category?.length}
      {data?.all_category?.map((item) => (
        <div key={item._id}>
          {item.category}
          <button
            className="btn btn-info"
            disabled={deleteLoading}
            onClick={() => deleteCategory(item._id)}>
            {deleteLoading ? "Loading..." : "Delete"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminDeleteCategory;
