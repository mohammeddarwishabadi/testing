require('dotenv').config();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../src/models/User');
const Post = require('../src/models/Post');
const Prediction = require('../src/models/Prediction');

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Promise.all([User.deleteMany(), Post.deleteMany(), Prediction.deleteMany()]);

  const password = await bcrypt.hash('admin123', 10);
  await User.create({ email: 'admin@mda.com', password });

  await Post.insertMany([
    {
      title: 'Arsenal 2-1 Liverpool: Pressing Traps Won the Midfield',
      match: 'Premier League - Matchday 24',
      teams: ['Arsenal', 'Liverpool'],
      stats: { xG: '1.93 - 1.21', shots: '14 - 9', possession: '56% - 44%' },
      xg: '1.93 - 1.21',
      shots: '14 - 9',
      possession: '56% - 44%',
      analysis_text: 'Arsenal forced six high turnovers in key zones.',
      charts: ['xg-bar.png']
    }
  ]);

  await Prediction.insertMany([
    {
      match: 'Manchester City vs Chelsea',
      teams: ['Manchester City', 'Chelsea'],
      win_probability: [64, 19, 17],
      expected_goals: [2.1, 1.0],
      confidence: 82
    }
  ]);

  console.log('Seed complete: admin@mda.com / admin123');
  await mongoose.disconnect();
};

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
