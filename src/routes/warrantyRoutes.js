const express = require("express");
const router = express.Router();
const { createWarranty, getMyWarranty } = require("../controllers/warrantyController");
const { auth } = require("../middleware/authMiddleware");
const upload = require("../middlewares/upload"); // ⬅️ নতুন Middleware import

// ⬇️ এখানে upload.single("billImage") Add করতে হবে
router.post("/create", auth, upload.single("billImage"), createWarranty);

router.get("/my", auth, getMyWarranty);

module.exports = router;
