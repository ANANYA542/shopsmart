const express = require('express');
const { body } = require('express-validator');
const {
  getCombos,
  getComboById,
  createCombo,
  deleteCombo,
} = require('../controllers/comboController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const { validate } = require('../middleware/validate');

const router = express.Router();

router.route('/')
  .get(getCombos)
  .post(
    protect,
    admin,
    [
      body('title', 'Title is required').notEmpty(),
      body('theme', 'Theme is required').notEmpty(),
    ],
    validate,
    createCombo
  );

router.route('/:id')
  .get(getComboById)
  .delete(protect, admin, deleteCombo);

module.exports = router;
