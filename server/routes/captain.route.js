const express = require('express');
const router = express.Router();
const {body} = require('express-validator')
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Cannot be less than 3 characters'),
    body('vehicle.plate').isLength({min: 6}).withMessage('Cannot be less than 6 characters long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('cannot be less than 1'),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'autorikshaw']).withMessage('Cannot be less except the given options'),
]
, captainController.registerCaptain
)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],
captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain ,captainController.logoutCaptain)
module.exports = router;