import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';
import cors from 'cors';
import videoRoutes from '../videoRoutes';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', videoRoutes);

describe('Video API', () => {
  describe('GET /api/videos', () => {
    it('should return videos with default newest sorting', async () => {
      const response = await request(app).get('/api/videos').expect(200);

      expect(response.body).toHaveProperty('videos');
      expect(response.body).toHaveProperty('count');
      expect(Array.isArray(response.body.videos)).toBe(true);
      expect(response.body.count).toBeGreaterThan(0);
    });

    it('should return videos sorted by oldest', async () => {
      const response = await request(app)
        .get('/api/videos?sort=oldest')
        .expect(200);

      expect(response.body).toHaveProperty('videos');
      expect(Array.isArray(response.body.videos)).toBe(true);
    });
  });

  describe('POST /api/videos', () => {
    it('should create a new video with valid data', async () => {
      const newVideo = {
        title: 'Test Video',
        tags: ['test', 'api'],
      };

      const response = await request(app)
        .post('/api/videos')
        .send(newVideo)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.title).toBe('Test Video');
      expect(response.body.tags).toEqual(['test', 'api']);
      expect(response.body).toHaveProperty('created_at');
      expect(response.body).toHaveProperty('thumbnail_url');
    });

    it('should return 400 for missing title', async () => {
      const response = await request(app)
        .post('/api/videos')
        .send({})
        .expect(400);

      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Validation error');
    });
  });
});
