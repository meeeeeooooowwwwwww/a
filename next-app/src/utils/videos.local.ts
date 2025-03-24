import { VideoCategory } from './videos';
import { VIDEO_CONFIG } from '@/config';

export interface Video {
  id: string;
  title: string;
  link: string;
  thumbnail?: string;
  date?: string;
}

type VideoEndpointKey = keyof typeof VIDEO_CONFIG.ENDPOINTS;

export async function getVideos(type: VideoCategory, page = 1, limit = VIDEO_CONFIG.LIMIT) {
  try {
    const endpointKey = type.toUpperCase() as VideoEndpointKey;
    const response = await fetch(`${VIDEO_CONFIG.ENDPOINTS[endpointKey]}?page=${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${type} videos`);
    }
    const data = await response.json();
    return data.videos;
  } catch (error) {
    console.error(`Error loading ${type} videos:`, error);
    throw error;
  }
} 