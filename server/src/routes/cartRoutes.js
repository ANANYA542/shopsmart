const express = require('express');
const { body } = require('express-validator');
const {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
} = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');
const { validate } = require('../middleware/validate');

const router = express.Router();

router.use(protect); // All cart routes are protected for logged-in users

router.route('/')
  .get(getCart)
  .post(
    [
      body('productId', 'Product ID is required').notEmpty(),
      body('price', 'Price is required').isNumeric(),
    ],
    validate,
    addToCart
  )
  .delete(clearCart);

router.route('/:itemId').delete(removeFromCart);

module.exports = router;
