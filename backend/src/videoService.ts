import { v4 as uuidv4 } from 'uuid';
import { type Video } from './types';
import { type VideoSort, type CreateVideoInput } from './schemas';
import videoData from './videos.json';

class VideoService {
  private videos: Video[] = videoData.videos;

  getAllVideos(sort?: VideoSort): Video[] {
    const sortedVideos = [...this.videos];

    if (sort === 'newest') {
      return sortedVideos.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
    } else if (sort === 'oldest') {
      return sortedVideos.sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
      );
    }

    return sortedVideos;
  }

  createVideo(input: CreateVideoInput): Video {
    const newVideo: Video = {
      id: uuidv4(),
      title: input.title,
      thumbnail_url: `https://picsum.photos/300/200?random=${Math.random()}`,
      created_at: new Date().toISOString(),
      duration: Math.floor(Math.random() * 600) + 60,
      views: 0,
      tags: input.tags || [],
    };

    this.videos.push(newVideo);
    return newVideo;
  }
}

export const videoService = new VideoService();
