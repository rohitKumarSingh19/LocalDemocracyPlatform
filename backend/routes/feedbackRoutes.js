const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { sendFeedback } = require('../controllers/feedbackController');
router.post('/', auth, sendFeedback);
module.exports = router;