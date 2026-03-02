const User = require('../models/User');
const Order = require('../models/Order');
const { calcCartTotal, calcRewardPoints } = require('../utils/calcHelpers');

// @desc    Place an order from cart items
// @route   POST /api/orders
// @access  Private
const placeOrder = async (req, res) => {
  try {
    const { items, shippingAddress } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No items to order' });
    }

    const totalPrice = calcCartTotal(items);

    const order = await Order.create({
      userId: req.user._id,
      items,
      totalPrice,
      shippingAddress,
    });

    // Add reward points for the user
    const rewardPointsAdded = calcRewardPoints(totalPrice);
    const user = await User.findById(req.user._id);
    user.rewardPoints += rewardPointsAdded;
    await user.save();

    res.status(201).json({
      order,
      message: `Order placed successfully. You earned ${rewardPointsAdded} reward points!`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get logged in user orders
// @route   GET /api/orders/mine
// @access  Private
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('userId', 'id name email').sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update order status
// @route   PUT /api/orders/:id/status
// @access  Private/Admin
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (order) {
      order.status = status || order.status;
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  placeOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
};
