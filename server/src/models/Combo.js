const mongoose = require('mongoose');

const comboSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    theme: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Combo', comboSchema);
