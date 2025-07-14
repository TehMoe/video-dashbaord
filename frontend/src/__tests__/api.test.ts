import { describe, it, expect, beforeEach, vi } from 'vitest';
import { videoApi } from '../api';

// Mock fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('videoApi', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('getVideos', () => {
    it('fetches videos successfully', async () => {
      const mockResponse = {
        videos: [
          {
            id: '1',
            title: 'Test Video',
            thumbnail_url: 'https://example.com/thumb.jpg',
            created_at: '2024-01-01T00:00:00Z',
            duration: 120,
            views: 100,
            tags: ['test'],
          },
        ],
        count: 1,
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await videoApi.getVideos();

      expect(fetch).toHaveBeenCalledWith('http://localhost:3001/api/videos');
      expect(result).toEqual(mockResponse);
    });

    it('includes sort parameter when provided', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ videos: [], count: 0 }),
      });

      await videoApi.getVideos('oldest');

      expect(fetch).toHaveBeenCalledWith(
        'http://localhost:3001/api/videos?sort=oldest',
      );
    });

    it('throws error when fetch fails', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      await expect(videoApi.getVideos()).rejects.toThrow(
        'HTTP error! status: 500',
      );
    });
  });

  describe('createVideo', () => {
    it('creates video successfully', async () => {
      const mockVideo = {
        id: '1',
        title: 'New Video',
        thumbnail_url: 'https://example.com/thumb.jpg',
        created_at: '2024-01-01T00:00:00Z',
        duration: 120,
        views: 0,
        tags: ['new'],
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockVideo,
      });

      const result = await videoApi.createVideo({
        title: 'New Video',
        tags: ['new'],
      });

      expect(fetch).toHaveBeenCalledWith('http://localhost:3001/api/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'New Video', tags: ['new'] }),
      });
      expect(result).toEqual(mockVideo);
    });
  });
});
