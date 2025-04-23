
const mongoose = require('mongoose');

const SeatBookingSchema = new mongoose.Schema({
    user: String,
    movie: String,
    selectedSeats: [String],
    showtime: String,
    showdate: String,
    totalPrice: Number,
    bookedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('SeatBooking', SeatBookingSchema);
