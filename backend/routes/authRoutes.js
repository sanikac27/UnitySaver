const express = require('express');

const jwt = require('jsonwebtoken');
const db = require('../db'); // PostgreSQL connection
const { authenticateToken, authorizeRole } = require('../middlewares/authMiddleware');
const {login,register,logout} = require('../controllers/authController');
const router = express.Router();

// Register route
router.post('/register', register);

router.post('/login',login);

router.post('/logout', logout);

router.get('/admin', authenticateToken, authorizeRole('admin'), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

module.exports=router