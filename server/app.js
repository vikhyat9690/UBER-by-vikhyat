const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/user.route')
const cookieParser = require('cookie-parser');

//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('Heylo there');
})

app.use('/users', userRoutes);

module.exports = app;