const Warranty = require("../models/warrantyModel");

const createWarranty = async (req, res) => {
  try {
    const { productName, purchaseDate, warrantyExpiry, shopName, billImage } = req.body;

    const warranty = await Warranty.create({
      userId: req.user.id,
      productName,
      purchaseDate,
      warrantyExpiry,
      shopName,
      billImage
    });

    res.json({ message: "Warranty added", warranty });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
