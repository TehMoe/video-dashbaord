export interface Video {
  id: string;
  title: string;
  thumbnail_url: string;
  created_at: string;
  duration: number;
  views: number;
  tags: string[];
}

export interface VideoResponse {
  videos: Video[];
  count: number;
}

export type SortOption = 'newest' | 'oldest';
