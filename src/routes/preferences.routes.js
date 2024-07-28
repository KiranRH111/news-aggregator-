const express = require('express');
const { getPreferences, updatePreferences } = require('../controllers/preference.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', authMiddleware, getPreferences);
router.put('/', authMiddleware, updatePreferences);

module.exports = router;