
const mongoose = require('mongoose');

const SnackOrderSchema = new mongoose.Schema({
    user: String,
    snacks: [String],
    totalPrice: Number,
    orderedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('SnackOrder', SnackOrderSchema);
