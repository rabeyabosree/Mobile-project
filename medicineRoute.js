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



router.get('/:id', (req, res) => {
  const id = req.params.id;
  const medicine = medicines.find(med => med.id === id);

  if (!medicine) {
    return res.status(404).json({
      success: false,
      message: 'Medicine not found'
    });
  }

  res.status(200).json({
    success: true,
    data: medicine
  });
});



// ✅ PUT update medicine
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;

  const index = medicines.findIndex(med => med.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Medicine not found'
    });
  }

  if (name) medicines[index].name = name;
  if (price) medicines[index].price = price;

  res.status(200).json({
    success: true,
    message: 'Medicine updated',
    data: medicines[index]
  });
});

// ✅ DELETE medicine
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = medicines.findIndex(med => med.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Medicine not found'
    });
  }

  const deleted = medicines.splice(index, 1);

  res.status(200).json({
    success: true,
    message: 'Medicine deleted',
    data: deleted[0]
  });
});




module.exports = router;
