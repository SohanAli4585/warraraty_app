const express = require("express");
const router = express.Router();
const { createWarranty, getMyWarranty } = require("../controllers/warrantyController");
const { auth } = require("../middleware/authMiddleware");
const upload = require("../middleware/upload"); // ✅ singular middleware folder

router.post("/create", auth, upload.single("billImage"), createWarranty);
router.get("/my", auth, getMyWarranty);

module.exports = router;
