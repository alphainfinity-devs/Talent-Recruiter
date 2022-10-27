const express = require("express");
const { getBookmarkedJob,deleteBookmark, bookmarkJob, applyJob, getAppliedJob, isAppliedOrBookmarke } = require("../controllers/applicantController");
const verifyToken = require("../Middlewares/verifyToken");

const router = express.Router();

router.get("/bookmark-job", verifyToken , getBookmarkedJob).post("/bookmark-job/:id",verifyToken, bookmarkJob).delete("/delete-bookmark/:id",verifyToken , deleteBookmark);
router.get("/applied-job",verifyToken, getAppliedJob).post("/apply-job/:id",verifyToken, applyJob);
router.get("/applied-or-bookmarked/:id",verifyToken, isAppliedOrBookmarke);
module.exports = router;
