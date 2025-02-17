const express = require('express');
const router = express.Router();
const {getUserById} = require('../controllers/usersController');
// Fetch User Data by ID
router.get('/:id', getUserById);

module.exports = router;
