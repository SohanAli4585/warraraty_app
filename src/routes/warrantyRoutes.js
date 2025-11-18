const express = require("express");
const router = express.Router();
const { createWarranty, getMyWarranty } = require("../controllers/warrantyController");
const { auth } = require("../middleware/authMiddleware");

router.post("/create", auth, createWarranty);
router.get("/my", auth, getMyWarranty);

module.exports = router;
