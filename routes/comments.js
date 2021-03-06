const express = require("express");
const catchAsync = require("../utilities/catchAsync")
const { createComment, deleteComment } = require("../controllers/comments");
const { isHouseholdMember, ownsComment } = require("../middleware");

const router = express.Router({ mergeParams: true });

router.post("/", catchAsync(isHouseholdMember), catchAsync(createComment))
router.delete("/:commentId", catchAsync(ownsComment), catchAsync(deleteComment))
module.exports = router;