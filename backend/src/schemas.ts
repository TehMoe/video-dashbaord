import { z } from 'zod';

export const CreateVideoSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  tags: z.array(z.string()).optional().default([]),
});

export const VideoSortSchema = z.enum(['newest', 'oldest']).optional();

export type CreateVideoInput = z.infer<typeof CreateVideoSchema>;
export type VideoSort = z.infer<typeof VideoSortSchema>;
