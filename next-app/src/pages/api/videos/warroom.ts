import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'videos', 'warroom-videos.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const videos = JSON.parse(jsonData);
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load videos' });
  }
} 