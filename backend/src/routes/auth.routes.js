const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { authenticateUser } = require('../middleware/auth');
const { loginLimiter, registerLimiter, guestLimiter } = require('../middleware/rateLimit');

router.post('/register',authController.register);
router.post('/guest', authController.guest);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/me',  authController.me);

module.exports = router;
