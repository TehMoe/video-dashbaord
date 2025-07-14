import { render, screen } from '@testing-library/react';
import { VideoCard } from '../VideoCard';
import { type Video } from '../../types';
import { describe, expect, it } from 'vitest';

const mockVideo: Video = {
  id: 'test-id',
  title: 'Test Video Title',
  thumbnail_url: 'https://example.com/thumb.jpg',
  created_at: '2024-01-15T10:30:00Z',
  duration: 120,
  views: 1500,
  tags: ['tutorial', 'test'],
};

describe('VideoCard', () => {
  it('renders video information correctly', () => {
    render(<VideoCard video={mockVideo} />);

    expect(screen.getByText('Test Video Title')).toBeInTheDocument();
    expect(screen.getByText('2:00')).toBeInTheDocument(); // duration
    expect(screen.getByText('1,500 views')).toBeInTheDocument();
    expect(screen.getByText('tutorial')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('displays formatted date', () => {
    render(<VideoCard video={mockVideo} />);

    expect(screen.getByText('Jan 15, 2024')).toBeInTheDocument();
  });

  it('renders thumbnail image with alt text', () => {
    render(<VideoCard video={mockVideo} />);

    const image = screen.getByAltText('Test Video Title');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/thumb.jpg');
  });
});
