const express = require('express');
const router = express.Router();

// GET all medicines
router.get('/', (req, res) => {
  res.send(
    'All medicines list'
  );
});

// GET single medicine by ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(
    'Details of medicine ID: ' + id
  );
});

// POST new medicine
router.post('/', (req, res) => {
  const newMed = req.body;
  res.send(
    'New medicded: ' + JSON.stringify(newMed)
  );
});

// PUT update medicine
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  res.send(
    'Medicine updated: ' + id +
    ', Data: ' + JSON.stringify(updatedData)
  );
});

// DELETE a medicine
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.send(
    'Medicine deleted ID: ' + id
  );
});

module.exports = router;
