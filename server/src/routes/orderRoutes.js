const express = require('express');
const { body } = require('express-validator');
const {
  placeOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
} = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const { validate } = require('../middleware/validate');

const router = express.Router();

router.route('/')
  .post(
    protect,
    [
      body('items', 'Order items cannot be empty').isArray({ min: 1 }),
      body('shippingAddress', 'Shipping address is required').notEmpty(),
    ],
    validate,
    placeOrder
  )
  .get(protect, admin, getAllOrders);

router.route('/mine').get(protect, getMyOrders);

router.route('/:id/status').put(protect, admin, updateOrderStatus);

module.exports = router;
