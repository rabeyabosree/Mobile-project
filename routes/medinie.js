const express = require('express');
const router = express.Router();

// Temporary in-memory storage
let medicines = [
  { id: '1', name: 'Paracetamol', price: 5 },
  { id: '2', name: 'Napa Extra', price: 8 },
  { id: '3', name: 'Serup', price: 7}	
];

// ✅ GET all medicines
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: medicines
  });
});

// ✅ GET single medicine by ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const medicine = medicines.find(med => med.id === id);

  if (!medicine) {
    return res.status(404).json({ success: false, message: 'Medicine not found' });
  }

  res.status(200).json({ success: true, data: medicine });
});

// ✅ POST new medicine
router.post('/new', (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ success: false, message: 'Name and price required' });
  }

  const newMedicine = {
    id: Date.now().toString(), // simple unique ID
    name,
    price
  };

  medicines.push(newMedicine);

  res.status(201).json({
    success: true,
    message: 'New medicine added',
    data: newMedicine
  });
});

// ✅ PUT update medicine
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  const index = medicines.findIndex(med => med.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Medicine not found' });
  }

  // Update fields
  if (name) medicines[index].name = name;
  if (price) medicines[index].price = price;

  res.status(200).json({
    success: true,
    message: 'Medicine updated',
    data: medicines[index]
  });
});

// ✅ DELETE a medicine
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = medicines.findIndex(med => med.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Medicine not found' });
  }

  const deleted = medicines.splice(index, 1);

  res.status(200).json({
    success: true,
    message: 'Medicine deleted',
    data: deleted[0]
  });
});

module.exports = router;
