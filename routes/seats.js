const express = require('express');
const router = express.Router();
const SeatBooking = require('../models/SeatBooking');


router.post('/', async (req, res) => {
    const booking = new SeatBooking(req.body);
    try {
        await booking.save();
        res.status(201).json({ message: "Seats booked successfully!" });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get('/', async (req, res) => {
    const { movie, showtime, showdate } = req.query;

    try {
        const query = {};
        if (movie) query.movie = movie;
        if (showtime) query.showtime = showtime;
        if (showdate) query.showdate = showdate;

        const bookings = await SeatBooking.find(query);
        const bookedSeats = bookings.flatMap(b => b.selectedSeats);
        res.json(bookedSeats);
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;
