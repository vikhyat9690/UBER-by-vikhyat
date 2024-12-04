const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            min: [3, "Must be alteast 3 characters long"]
        },
        lastname: {
            type: String,
            min: [3, "Must be atleast 3 characters long"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email"]
    },
    password: {
        type: String,
        required: true,
        min: [6, "Must be atleast 6 characters long"],
        select: false
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true
        },
        plate: {
            type: String,
            required: true
        },
        capacity: {
            type: Number,
            required: true
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['bike', 'car', 'autorikshaw']
        }
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare( password, this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema)
module.exports = captainModel;  //export the model