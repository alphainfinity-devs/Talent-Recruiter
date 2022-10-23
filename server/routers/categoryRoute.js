const express = require("express");
const roleAuthCheck = require("../Middlewares/roleAuthCheck"); //role checking middleware
const {
  getAllCategory,
  createCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const router = express.Router();

router
  .get("/all-category", getAllCategory)
  .post("/add-category", roleAuthCheck, createCategory)
  .delete("/delete/:id", roleAuthCheck, deleteCategory);

module.exports = router;
