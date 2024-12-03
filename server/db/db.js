const mongoose = require('mongoose');
require('dotenv').config();

function connectDB() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Successfully connected to databases")
    }).catch((err) => {
        console.log(err.message);
    })
}

module.exports = connectDB