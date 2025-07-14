import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Video Library API is running' });
});

app.get('/api/videos', (req, res) => {
  res.json({ videos: [], message: 'Video endpoints coming soon' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
