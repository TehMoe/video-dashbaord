import { z } from 'zod';

export const VideoSortSchema = z.enum(['newest', 'oldest']).optional();

export type VideoSort = z.infer<typeof VideoSortSchema>;
