/**
 * Word & World - MongoDB Atlas Global Leaderboard Backend Server
 * 
 * Provides high-speed global player rankings, score synchronization,
 * and live podiums powered by your dedicated MongoDB cluster.
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/word_world';

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Player Leaderboard Schema & Model
const playerSchema = new mongoose.Schema(
  {
    playerId: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true, maxlength: 20 },
    stars: { type: Number, default: 0, index: -1 },
    level: { type: Number, default: 1 },
    league: { type: String, default: 'Gezgin' }
  },
  { timestamps: true }
);

// Dynamic league computation
playerSchema.pre('save', function (next) {
  if (this.stars >= 1800) this.league = 'Elit';
  else if (this.stars >= 1200) this.league = 'Usta';
  else if (this.stars >= 600) this.league = 'Uzman';
  else this.league = 'Gezgin';
  next();
});

const Player = mongoose.model('LeaderboardPlayer', playerSchema);

// MongoDB Connection
let isConnected = false;
mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 5000
  })
  .then(() => {
    isConnected = true;
    console.log('✅ MongoDB Cluster Connected successfully!');
  })
  .catch((err) => {
    console.warn('⚠️ MongoDB connection note:', err.message);
  });

// Routes
// 1. Health & Cluster Status
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
  });
});

// 2. Get Global Leaderboard
app.get('/api/leaderboard', async (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit, 10) || 50, 100);
    const players = await Player.find({})
      .sort({ stars: -1, updatedAt: 1 })
      .limit(limit)
      .lean();

    const formatted = players.map((p, index) => ({
      id: p.playerId,
      rank: index + 1,
      name: p.name,
      stars: p.stars,
      level: `Lv. ${p.level}`,
      league: p.league,
      isTop3: index < 3
    }));

    const totalCount = await Player.countDocuments();

    res.json({
      success: true,
      players: formatted,
      totalCount
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 3. Submit / Sync Player Score
app.post('/api/leaderboard/score', async (req, res) => {
  try {
    const { playerId, name, stars, level } = req.body;
    if (!playerId || !name) {
      return res.status(400).json({ error: 'playerId and name are required' });
    }

    const cleanStars = Math.max(0, parseInt(stars, 10) || 0);
    const cleanLevel = Math.max(1, parseInt(level, 10) || 1);

    // Upsert player record
    const updated = await Player.findOneAndUpdate(
      { playerId },
      {
        $set: {
          name: name.trim().substring(0, 18),
          level: cleanLevel,
          updatedAt: new Date()
        },
        $max: { stars: cleanStars } // keep highest stars
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    // Calculate player global rank
    const higherCount = await Player.countDocuments({ stars: { $gt: updated.stars } });
    const rank = higherCount + 1;

    res.json({
      success: true,
      player: {
        id: updated.playerId,
        name: updated.name,
        stars: updated.stars,
        level: updated.level,
        rank
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Word & World Leaderboard Server running on port ${PORT}`);
});
