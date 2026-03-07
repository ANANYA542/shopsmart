const Combo = require('../models/Combo');

// @desc    Fetch all combos
// @route   GET /api/combos
// @access  Public
const getCombos = async (req, res) => {
  try {
    const combos = await Combo.find({}).populate('items', 'title price category');
    res.json(combos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Fetch single combo
// @route   GET /api/combos/:id
// @access  Public
const getComboById = async (req, res) => {
  try {
    const combo = await Combo.findById(req.params.id).populate('items');

    if (combo) {
      res.json(combo);
    } else {
      res.status(404).json({ message: 'Combo not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a combo
// @route   POST /api/combos
// @access  Private/Admin
const createCombo = async (req, res) => {
  try {
    const combo = await Combo.create(req.body);
    res.status(201).json(combo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a combo
// @route   DELETE /api/combos/:id
// @access  Private/Admin
const deleteCombo = async (req, res) => {
  try {
    const combo = await Combo.findById(req.params.id);

    if (combo) {
      await Combo.deleteOne({ _id: combo._id });
      res.json({ message: 'Combo removed' });
    } else {
      res.status(404).json({ message: 'Combo not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCombos,
  getComboById,
  createCombo,
  deleteCombo,
};
