import { WarroomVideo } from './videos';

let cachedWarroomVideos: WarroomVideo[] = [];

const WORKER_URL = 'https://my-video-worker.generalflynn17.workers.dev';

export async function getWarroomVideosFeed(): Promise<WarroomVideo[]> {
  if (cachedWarroomVideos.length === 0) {
    try {
      const response = await fetch(`${WORKER_URL}/videos/warroom`);
      if (!response.ok) {
        throw new Error('Failed to fetch warroom videos');
      }
      cachedWarroomVideos = await response.json();
    } catch (error) {
      console.error('Error loading warroom videos:', error);
      return [];
    }
  }
  return cachedWarroomVideos;
} 