const express = require('express');
const router = express.Router();
const {getuserSettingsController,putuserSettingsController}=require('../controllers/settingsRoutesController');

router.get('/', getuserSettingsController);

router.put('/', putuserSettingsController);

module.exports = router;
