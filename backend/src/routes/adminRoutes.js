const express = require('express');
const { getAdminStats } = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/stats', protect, authorize('admin', 'editor'), getAdminStats);

module.exports = router;
