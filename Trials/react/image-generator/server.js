import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/unsplash', async (req, res) => {
  try {
    const { query, orientation = 'landscape' } = req.query;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    // Define dimensions based on orientation
    const dimensions = orientation === 'landscape' 
      ? { w: 1920, h: 1080 } // 16:9 landscape
      : { w: 1080, h: 1920 }; // 9:16 portrait

    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=${orientation}`, {
      headers: {
        'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error('Unsplash API request failed');
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch image from Unsplash' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
