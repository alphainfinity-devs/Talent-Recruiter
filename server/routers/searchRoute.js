const express = require("express");
const getSearchResult = require("../controllers/searchController");

const router = express.Router();

router
  .get("/result", getSearchResult)

module.exports = router;
