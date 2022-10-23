import React, { useEffect } from "react";
import { useAddCategoryMutation } from "../../../features/category/categoryApi";
import { toast } from "react-toastify";
const AdminAddCategory = () => {
  const [addCategory, { isLoading, isError, isSuccess }] =
    useAddCategoryMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    console.log(category);
    if (category) {
      addCategory({category, status: true});
    }
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          className="form-control"
          name="category"
          placeholder="category name"
        />
        <input
          disabled={isLoading}
          type="submit"
          className="btn btn-primary"
          value={isLoading ? "Loading..." : "add category"}
        />
      </form>
    </>
  );
};

export default AdminAddCategory;
