import { Router, Request, Response } from 'express';
import { videoService } from './videoService';
import { VideoSortSchema } from './schemas';

const router = Router();

router.get('/videos', (req: Request, res: Response) => {
  try {
    const sortResult = VideoSortSchema.safeParse(req.query.sort);
    const sort = sortResult.success ? sortResult.data : 'newest';

    const videos = videoService.getAllVideos(sort);
    res.json({ videos, count: videos.length });
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
