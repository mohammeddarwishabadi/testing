const express = require('express');
const auth = require('../middleware/auth');
const {
  getPredictions,
  createPrediction,
  updatePrediction,
  deletePrediction
} = require('../controllers/predictionController');

const router = express.Router();

router.get('/', getPredictions);
router.post('/', auth, createPrediction);
router.put('/:id', auth, updatePrediction);
router.delete('/:id', auth, deletePrediction);

module.exports = router;
