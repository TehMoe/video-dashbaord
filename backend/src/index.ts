import express from 'express';
import cors from 'cors';
import videoRoutes from './videoRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Video Library API is running' });
});

app.use('/api', videoRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  },
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
