/**
 * Word & World - MongoDB Atlas Global Leaderboard Backend Server
 *
 * Provides high-speed global player rankings, weekly & all-time filters,
 * 5-Tier Hunter League computation, and score synchronization.
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/word_world';

app.use(cors({ origin: '*' }));
app.use(express.json());

function computeLeague(stars = 0) {
  if (stars >= 350) return 'Efsanevi Avcı';
  if (stars >= 175) return 'Elmas Usta';
  if (stars >= 75) return 'Altın Uzman';
  if (stars >= 25) return 'Gümüş Kaşif';
  return 'Bronz Gezgin';
}

const playerSchema = new mongoose.Schema(
  {
    playerId: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true, maxlength: 20 },
    stars: { type: Number, default: 0, index: -1 },
    completed: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
    league: { type: String, default: 'Bronz Gezgin' }
  },
  { timestamps: true }
);

const Player = mongoose.model('LeaderboardPlayer', playerSchema);

mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 5000
  })
  .then(() => {
    console.log('[Word & World] MongoDB Cluster connected successfully.');
  })
  .catch((err) => {
    console.warn('[Word & World] MongoDB connection note:', err.message);
  });

// 1. Health & Cluster Status
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
  });
});

// 2. Get Global Leaderboard (supports ?timeframe=weekly | allTime)
app.get('/api/leaderboard', async (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit, 10) || 50, 100);
    const timeframe = req.query.timeframe === 'allTime' ? 'allTime' : 'weekly';

    const query = {};
    if (timeframe === 'weekly') {
      const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      query.updatedAt = { $gte: sevenDaysAgo };
    }

    let players = await Player.find(query)
      .sort({ stars: -1, updatedAt: 1 })
      .limit(limit)
      .lean();

    // Fallback to allTime if weekly window is currently empty
    if (timeframe === 'weekly' && players.length === 0) {
      players = await Player.find({})
        .sort({ stars: -1, updatedAt: 1 })
        .limit(limit)
        .lean();
    }

    const formatted = players.map((p, index) => ({
      id: p.playerId,
      playerId: p.playerId,
      rank: index + 1,
      name: p.name,
      stars: p.stars,
      completed: p.completed || 0,
      level: p.level || 1,
      league: computeLeague(p.stars),
      isTop3: index < 3
    }));

    const totalCount = await Player.countDocuments();

    res.json({
      success: true,
      isLive: true,
      timeframe,
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
    const { playerId, name, stars, level, completed } = req.body;
    if (!playerId || !name) {
      return res.status(400).json({ error: 'playerId and name are required' });
    }

    const cleanStars = Math.min(Math.max(0, parseInt(stars, 10) || 0), 5000);
    const cleanCompleted = Math.max(0, parseInt(completed, 10) || 0);
    const cleanLevel = Math.max(1, parseInt(level, 10) || 1);
    const cleanName = String(name).trim().substring(0, 16) || 'Usta Avcı';

    const existing = await Player.findOne({ playerId }).lean();
    const bestStars = Math.max(existing?.stars || 0, cleanStars);
    const bestCompleted = Math.max(existing?.completed || 0, cleanCompleted);
    const league = computeLeague(bestStars);

    const updated = await Player.findOneAndUpdate(
      { playerId },
      {
        $set: {
          name: cleanName,
          stars: bestStars,
          completed: bestCompleted,
          level: cleanLevel,
          league,
          updatedAt: new Date()
        }
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    const higherCount = await Player.countDocuments({ stars: { $gt: updated.stars } });
    const rank = higherCount + 1;

    res.json({
      success: true,
      player: {
        id: updated.playerId,
        name: updated.name,
        stars: updated.stars,
        completed: updated.completed,
        level: updated.level,
        league: updated.league,
        rank
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`[Word & World] Leaderboard Server running on port ${PORT}`);
});
