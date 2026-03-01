// Pure utility functions to isolate calculation logic for easy unit testing

const calcCartTotal = (items) => {
  if (!items || items.length === 0) return 0;
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return Number(total.toFixed(2));
};

const applyDiscount = (total, discountPercent) => {
  if (!discountPercent || discountPercent <= 0) return total;
  if (discountPercent >= 100) return 0;
  
  const discountAmount = total * (discountPercent / 100);
  return Number((total - discountAmount).toFixed(2));
};

const calcRewardPoints = (totalPrice) => {
  // Earn 1 point for every $10 spent
  return Math.floor(totalPrice / 10);
};

module.exports = {
  calcCartTotal,
  applyDiscount,
  calcRewardPoints,
};
