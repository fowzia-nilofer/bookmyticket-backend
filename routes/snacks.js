
const express = require('express');
const router = express.Router();
const SnackOrder = require('../models/SnackOrder');

router.post('/', async (req, res) => {
    try {
        const order = new SnackOrder(req.body);
        await order.save();
        res.status(201).json({ message: "Snack order saved!" });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get('/', async (req, res) => {
    try {
        const orders = await SnackOrder.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;
