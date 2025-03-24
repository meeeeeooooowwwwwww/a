import { WarroomVideo } from './videos';

let cachedVideos: WarroomVideo[] | null = null;

const WORKER_URL = 'https://my-video-worker.generalflynn17.workers.dev';

/**
 * Read the Natalie Winters videos from the API
 */
export async function getNatalieVideosFeed(): Promise<WarroomVideo[]> {
  if (cachedVideos) {
    return cachedVideos;
  }

  try {
    const response = await fetch(`${WORKER_URL}/videos/natalie`);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    const data = await response.json();
    cachedVideos = data.videos;
    return data.videos;
  } catch (error) {
    console.error('Error fetching Natalie videos:', error);
    return [];
  }
}

/**
 * Get a Natalie Winters video by its ID
 */
export async function getNatalieVideoById(id: string): Promise<WarroomVideo | null> {
  const videos = await getNatalieVideosFeed();
  return videos.find(video => video.id === id) || null;
}

/**
 * Get the latest Natalie Winters videos, limited by count
 */
export async function getLatestNatalieVideos(count: number = 12): Promise<WarroomVideo[]> {
  const videos = await getNatalieVideosFeed();
  return videos.slice(0, count);
}

/**
 * Get a paginated set of Natalie Winters videos
 */
export async function getPaginatedNatalieVideos(page: number, limit: number): Promise<WarroomVideo[]> {
  const videos = await getNatalieVideosFeed();
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return videos.slice(startIndex, endIndex);
}

/**
 * Clear the video cache
 */
export function clearCache(): void {
  cachedVideos = null;
}

/**
 * Extract the video slug/ID from a URL
 * Using the same logic as in videos.ts
 */
export function getVideoSlug(url: string): string {
  if (!url) return '';
  
  try {
    // Look for ID in embed URL format (e.g., /embed/v6oa7gc)
    const embedMatch = url.match(/\/embed\/([a-zA-Z0-9]+)/i);
    if (embedMatch && embedMatch[1]) {
      return embedMatch[1];
    }
    
    // Look for ID in standard URL format (e.g., rumble.com/v6qi45w)
    const standardMatch = url.match(/rumble\.com\/([a-zA-Z0-9]+)/i);
    if (standardMatch && standardMatch[1]) {
      return standardMatch[1];
    }
    
    return '';
  } catch (error) {
    console.error('Error extracting video ID:', error);
    return '';
  }
}

/**
 * Get the embed URL for a video
 * Using the same logic as in videos.ts
 */
export function getVideoEmbedUrl(url: string): string {
  if (!url) return '';
  
  // Get the video ID
  const videoId = getVideoSlug(url);
  if (!videoId) return '';
  
  // Return the standard embed format without the pub parameter
  return `https://rumble.com/embed/${videoId}/`;
} 