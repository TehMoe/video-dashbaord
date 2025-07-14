import { type VideoResponse, type SortOption, type Video } from './types';

const API_BASE_URL = 'http://localhost:3001/api';

export interface CreateVideoRequest {
  title: string;
  tags?: string[];
}

export const videoApi = {
  async getVideos(sort?: SortOption): Promise<VideoResponse> {
    const url = new URL(`${API_BASE_URL}/videos`);
    if (sort) {
      url.searchParams.append('sort', sort);
    }

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  async createVideo(data: CreateVideoRequest): Promise<Video> {
    const response = await fetch(`${API_BASE_URL}/videos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },
};
