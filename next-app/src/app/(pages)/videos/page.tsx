// Adding a comment to trigger redeployment
// This comment does not affect functionality

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getNatalieVideosFeed } from "@/utils/natalieVideos";
import { getVideoSlug } from '@/utils/videos';

export const metadata: Metadata = {
  title: 'War Room Videos',
  description: 'Watch the latest videos from War Room'
};

export default async function VideosPage() {
  // Get videos using direct utility function
  const videos = await getNatalieVideosFeed();
  
  if (!videos || videos.length === 0) {
    return (
      <div className="py-12 content-container">
        <h1 className="text-3xl font-bold mb-8">
          <a 
            href="https://warroom.org/" 
            target="_blank" 
            rel="noreferrer noopener"
            className="hover:text-primary-500 transition-colors"
          >
            Latest Videos
          </a>
        </h1>
        
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No videos found.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-12 content-container">
      <h1 className="text-3xl font-bold mb-8">
        <a 
          href="https://warroom.org/" 
          target="_blank" 
          rel="noreferrer noopener"
          className="hover:text-primary-500 transition-colors"
        >
          Latest Videos
        </a>
      </h1>
      
      {/* Videos grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {videos.map((video, index) => {
          const slug = getVideoSlug(video.link);
          if (!slug) return null;
          
          return (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <a 
                href={video.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="relative pb-[56.25%]">
                  {video.thumbnail ? (
                    <Image 
                      src={video.thumbnail} 
                      alt={video.title} 
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                      <span className="text-white">No thumbnail available</span>
                    </div>
                  )}
                </div>
              </a>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 line-clamp-2 text-white">{video.title}</h2>
                <p className="text-sm text-gray-300 mb-4">
                  <a 
                    href="https://warroom.org/" 
                    target="_blank" 
                    rel="noreferrer noopener"
                    className="hover:text-primary-500 transition-colors"
                  >
                    warroom.org
                  </a>
                </p>
                <div className="flex space-x-2">
                  <a 
                    href={video.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm px-3 py-1 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors"
                  >
                    Watch Video
                  </a>
                  <a 
                    href={video.link} 
                    target="_blank" 
                    rel="noreferrer noopener"
                    className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    Watch on Rumble
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 