// In-memory cart for demo purposes to avoid DB schema overhead
// Real apps use Redis or a specific MongoDB Cart collection
const carts = {}; 

// @desc    Get user cart
// @route   GET /api/cart
// @access  Private
const getCart = async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const cart = carts[userId] || [];
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
const addToCart = async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const { productId, title, price, quantity } = req.body;

    if (!carts[userId]) carts[userId] = [];
    
    // Check if item exists, then increase quantity otherwise push
    const itemIndex = carts[userId].findIndex(item => item.productId === productId);
    if (itemIndex > -1) {
      carts[userId][itemIndex].quantity += quantity || 1;
    } else {
      carts[userId].push({ productId, title, price, quantity: quantity || 1 });
    }

    res.status(201).json(carts[userId]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:itemId
// @access  Private
const removeFromCart = async (req, res) => {
  try {
    const userId = req.user._id.toString();
    if (carts[userId]) {
      carts[userId] = carts[userId].filter(item => item.productId !== req.params.itemId);
    }
    res.json(carts[userId] || []);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Clear cart
// @route   DELETE /api/cart
// @access  Private
const clearCart = async (req, res) => {
  try {
    const userId = req.user._id.toString();
    carts[userId] = [];
    res.json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
};
