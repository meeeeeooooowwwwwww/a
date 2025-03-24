export interface Video {
  id: string;
  title: string;
  // Match the structure from videos.local.ts
}

export async function getVideos(type: 'warroom' | 'natalie'): Promise<Video[]> {
  const fileName = type === 'warroom' ? 'warroom-videos.json' : 'natalie-videos.json';
  const response = await fetch(`/data/videos/${fileName}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${fileName}`);
  }
  return response.json();
} 