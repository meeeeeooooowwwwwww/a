import { promises as fs } from 'fs';
import path from 'path';

// Base video interface that all categories share
export interface BaseVideo {
  id: string;
  title: string;
  link: string;
  thumbnail?: string;
  date?: string;
}

// Category-specific video interfaces
export interface WarroomVideo extends BaseVideo {
  uploader: string;
  category: 'warroom';
}

export interface NatalieVideo extends BaseVideo {
  category: 'natalie';
}

// Union type for all video types
export type Video = WarroomVideo | NatalieVideo;

// Valid video categories
export const VIDEO_CATEGORIES = ['warroom', 'natalie'] as const;
export type VideoCategory = typeof VIDEO_CATEGORIES[number];

// Cache structure to support multiple categories
interface VideoCache {
  [category: string]: Video[];
}

let videoCache: VideoCache = {};

const WORKER_URL = process.env.NEXT_PUBLIC_VIDEO_WORKER_URL || 'https://my-video-worker.generalflynn17.workers.dev';

/**
 * Load videos for a specific category
 * @param category - The video category to load
 * @returns Promise<Video[]> - Array of videos for the category
 */
export async function loadVideos(category: VideoCategory): Promise<Video[]> {
  // Return cached videos if available
  if (videoCache[category]?.length > 0) {
    return videoCache[category];
  }

  try {
    const response = await fetch(`${WORKER_URL}/videos/${category}`, {
      headers: {
        'X-API-Key': process.env.VIDEO_WORKER_API_KEY || '',
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch ${category} videos`);
    }
    
    const data = await response.json();
    if (!data.videos || !Array.isArray(data.videos)) {
      throw new Error(`Invalid response format for ${category} videos`);
    }

    // Cache the videos
    videoCache[category] = data.videos;
    return data.videos;
  } catch (error) {
    console.error(`Error loading ${category} videos:`, error);
    return [];
  }
}

/**
 * Clear the cache for a specific category or all categories
 * @param category - Optional category to clear. If not provided, clears all caches
 */
export function clearVideoCache(category?: VideoCategory): void {
  if (category) {
    delete videoCache[category];
  } else {
    videoCache = {};
  }
}

/**
 * Get videos from the feed endpoint
 * @returns Promise<Video[]>
 */
export async function getFeedVideos(): Promise<Video[]> {
  try {
    const response = await fetch(`${WORKER_URL}/videos/feed`, {
      headers: {
        'X-API-Key': process.env.VIDEO_WORKER_API_KEY || '',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch videos feed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching videos feed:', error);
    return [];
  }
}

/**
 * Get the latest videos across all categories
 * @param count - Number of videos to return
 * @returns Promise<Video[]>
 */
export async function getLatestVideos(count: number = 10): Promise<Video[]> {
  const videos = await getFeedVideos();
  return videos
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    })
    .slice(0, count);
}

/**
 * Get a video by its ID
 * @param id - Video ID to find
 * @param category - Optional category to search in
 * @returns Promise<Video | null>
 */
export async function getVideoById(id: string, category?: VideoCategory): Promise<Video | null> {
  if (category) {
    const videos = await loadVideos(category);
    return videos.find(video => video.id === id) || null;
  }

  // Search all categories if no specific category provided
  for (const cat of VIDEO_CATEGORIES) {
    const videos = await loadVideos(cat);
    const video = videos.find(v => v.id === id);
    if (video) return video;
  }

  return null;
}

/**
 * Extract video slug/ID from a Rumble URL
 * @param url - Rumble video URL
 * @returns string | null - Video ID if found
 */
export function getVideoSlug(url: string): string | null {
  if (!url) return null;
  
  try {
    // Look for ID in embed URL format (e.g., /embed/v6oa7gc)
    const embedMatch = url.match(/\/embed\/([a-zA-Z0-9]+)/i);
    if (embedMatch?.[1]) return embedMatch[1];
    
    // Look for ID in standard URL format (e.g., rumble.com/v6qi45w)
    const standardMatch = url.match(/rumble\.com\/([a-zA-Z0-9]+)/i);
    if (standardMatch?.[1]) return standardMatch[1];
    
    return null;
  } catch (error) {
    console.error('Error extracting video ID:', error);
    return null;
  }
}

// Export the unified getVideos function
export const getVideos = async (type: VideoCategory) => {
  return loadVideos(type);
};

export async function generateStaticParams() {
  const videos = await loadVideos('warroom');
  if (!videos) return [];
  return videos.slice(0, 50).map((video) => ({ id: video.id }));
} 