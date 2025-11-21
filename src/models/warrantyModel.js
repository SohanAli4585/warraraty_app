const mongoose = require("mongoose");

const warrantySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productName: { type: String, required: true },
    purchaseDate: { type: Date, required: true },
    warrantyExpiry: { type: Date, required: true },
    shopName: { type: String, required: true },
    billImage: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Warranty", warrantySchema);
