import { type Video } from './types';
import { type VideoSort } from './schemas';
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
}

export const videoService = new VideoService();
