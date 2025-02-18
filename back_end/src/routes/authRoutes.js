const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');
const authenticateToken = require('../middlewares/auth');
router.get('/me', authenticateToken, authControllers.getUserInfor);
router.post('/register', authControllers.register);
router.post('/login', authControllers.login);
router.post('/refresh-token', authControllers.refreshToken);

module.exports = router;