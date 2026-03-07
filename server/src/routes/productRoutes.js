const express = require('express');
const { body } = require('express-validator');
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const { validate } = require('../middleware/validate');

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(
    protect,
    admin,
    [
      body('title', 'Title is required').notEmpty(),
      body('category', 'Valid category required').isIn(['fashion', 'watches', 'confectionery']),
      body('price', 'Numeric price required').isNumeric(),
    ],
    validate,
    createProduct
  );

router.route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

module.exports = router;
