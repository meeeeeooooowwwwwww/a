"use client";

import Link from 'next/link';
import Image from 'next/image';
import { getVideoSlug, NatalieVideo } from '@/utils/videos';
import PageHero from '@/components/sections/PageHero';
import { useEffect, useState } from 'react';
import { VIDEO_CONFIG } from '@/config';

interface PaginatedResponse {
  videos: NatalieVideo[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export default function NatalieVideosPage() {
  const [allVideos, setAllVideos] = useState<NatalieVideo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [visibleVideos, setVisibleVideos] = useState<number>(6); // Client-side limit

  useEffect(() => {
    async function fetchVideos() {
      try {
        console.log('Fetching videos from Worker...');
        const response = await fetch(`${VIDEO_CONFIG.ENDPOINTS.NATALIE}?page=1&limit=12`);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data: PaginatedResponse = await response.json();
        console.log('Worker Response:', data);
        if (!Array.isArray(data.videos)) throw new Error('Invalid video data format');
        setAllVideos(data.videos); // Store all fetched videos
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
        setAllVideos([]);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, []); // Only fetch once on mount

  return (
    <>
      <PageHero 
        title="Natalie's Videos"
        subtitle="Natalie Winter's videos."
        imageSrc="/images/natalie-winters/natalie-winters-12.jpg"
        imagePosition="center 35%"
      />
      <div className="py-12 content-container">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-400"></div>
            <p className="mt-2">Loading videos...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        ) : allVideos.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {allVideos.slice(0, visibleVideos).map((video: NatalieVideo, index: number) => {
                const slug = getVideoSlug(video.link);
                if (!slug) return null;
                return (
                  <div key={`${slug}-${index}`} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <Link href={`/videos/${slug}`}>
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
                            <span className="text-white">No thumbnail</span>
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-2 line-clamp-2 text-white">{video.title}</h2>
                      <a 
                        href={video.link} 
                        target="_blank" 
                        rel="noreferrer noopener"
                        className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                      >
                        Watch on Rumble
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            {visibleVideos < allVideos.length && (
              <div className="text-center">
                <button 
                  onClick={() => setVisibleVideos(prev => prev + 6)}
                  className="px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No videos available.</p>
          </div>
        )}
      </div>
    </>
  );
}