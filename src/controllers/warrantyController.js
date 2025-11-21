const Warranty = require("../models/warrantyModel");

const createWarranty = async (req, res) => {
  try {
    const { productName, purchaseDate, warrantyExpiry, shopName } = req.body;
    const billImageUrl = req.file?.path || "";

    const warranty = await Warranty.create({
      userId: req.user.id,
      productName,
      purchaseDate,
      warrantyExpiry,
      shopName,
      billImage: billImageUrl,
    });

    return res.status(201).json({
      message: "Warranty added successfully!",
      warranty,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getMyWarranty = async (req, res) => {
  try {
    const data = await Warranty.find({ userId: req.user.id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createWarranty, getMyWarranty };
