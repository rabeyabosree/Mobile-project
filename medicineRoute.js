const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { id, name, price } = req.body;

    // যদি name বা price না থাকে
    if (!name || !price) {
      return res.status(400).json({
        message: "name and price are required"
      });
    }

    // Medicine object তৈরি
    const medicine = {
      id: id,
      name: name,
      price: price
    };

    // Success response
    res.status(200).json({
      message: "Medicine added successfully",
      data: medicine
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
});

module.exports = router;
