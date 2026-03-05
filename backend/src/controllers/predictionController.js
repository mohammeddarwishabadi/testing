const Prediction = require('../models/Prediction');

exports.getPredictions = async (_req, res) => {
  const predictions = await Prediction.find().sort({ createdAt: -1 });
  res.json(predictions);
};

exports.createPrediction = async (req, res) => {
  const prediction = await Prediction.create(req.body);
  res.status(201).json(prediction);
};

exports.updatePrediction = async (req, res) => {
  const prediction = await Prediction.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!prediction) return res.status(404).json({ message: 'Prediction not found' });
  res.json(prediction);
};

exports.deletePrediction = async (req, res) => {
  const prediction = await Prediction.findByIdAndDelete(req.params.id);
  if (!prediction) return res.status(404).json({ message: 'Prediction not found' });
  res.json({ message: 'Prediction deleted' });
};
