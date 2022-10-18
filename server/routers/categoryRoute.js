const express = require("express");
const { getAllCategory, createCategory } = require("../controllers/categoryController");

const router = express.Router();

router.get("/all-category", getAllCategory).post("/create-category", createCategory);

module.exports = router;
