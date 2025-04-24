
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const snackRoutes = require('./routes/snacks');
const seatRoutes = require('./routes/seats');

const app = express();

app.use(cors());
app.use(express.json());

// mongoose.connect('mongodb://127.0.0.1:27017/bookmyticket', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use('/api/snacks', snackRoutes);
app.use('/api/seats', seatRoutes);

app.listen(5000, () => {
    console.log("Server running on http://bookmyticket-backend-cg1z.onrender.com");
});
