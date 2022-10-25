const Category = require("../schemas/categorySchema");
const asyncHandler = require("express-async-handler");

// @desc All Job Controller
const getAllCategory = asyncHandler(async (req, res, next) => {
  console.log(req.user);
  try {
    const all_category = await Category.find();
    res.status(200).json({
      success: true,
      all_category,
    });
  } catch (err) {
    next(err);
  }
});
// @desc create a category Controller
const createCategory = asyncHandler(async (req, res, next) => {
  try {
    const category = req.body;
    console.log(category);
    const newCategory = await Category.create(category);
    if (newCategory) {
      res.status(200).json({
        success: true,
        message: "Successfully Create The Category",
        newCategory,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Something went wrong. Please try again",
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});
// delete category by admin
const deleteCategory = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
  try {
    const category = await Category.findByIdAndDelete(id);
    if (category) {
      res.status(200).json({
        success: true,
        message: "Category deleted successfully",
        category,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = {
  getAllCategory,
  createCategory,
  deleteCategory,
};
