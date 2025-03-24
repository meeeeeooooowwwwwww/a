import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { getVideoSlug, getVideoById, getVideos, type Video } from '@/utils/videos';
import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import { loadVideos } from '@/utils/videos';

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const video = await getVideoById(id);
  
  return {
    title: video ? `${video.title} | War Room` : 'War Room Video',
    description: video ? `Watch ${video.title} on War Room` : 'Watch War Room videos'
  };
}

// Generate static paths for all videos
export async function generateStaticParams() {
  const videos = await getVideos('warroom');
  if (!videos) {
    return []; // Handle null/undefined case
  }
  return videos.slice(0, 50).map((video: Video) => ({ id: video.id }));
}

export default async function VideoPage({ params }: Props) {
  const videos = await getVideos('warroom');
  const video = videos?.find((v: Video) => v.id === params.id);
  if (!video) {
    return <div>Video not found</div>;
  }
  const embedUrl = `https://rumble.com/embed/${params.id}/`;

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/videos" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
        <FaArrowLeft className="mr-2" />
        <span>Back to Videos</span>
      </Link>
      
      {video ? (
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{video.title}</h1>
      ) : (
        <h1 className="text-3xl md:text-4xl font-bold mb-8">War Room Video</h1>
      )}
      
      {/* Video Player */}
      <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
        {/* Direct iframe */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src={embedUrl}
            title={video?.title || 'War Room Video'}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      {/* Debug info */}
      <div className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Debug Information</h3>
        <p><strong>Video ID:</strong> {params.id}</p>
        <p><strong>Embed URL:</strong> {embedUrl}</p>
        <p><strong>Original URL:</strong> {video?.link || 'N/A'}</p>
        
        {/* Add option to open in a new tab */}
        <div className="mt-4">
          <a 
            href={embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 underline"
          >
            Open embed URL directly in new tab
          </a>
        </div>
      </div>
      
      {/* Direct link to Rumble */}
      <div className="text-center mb-8">
        <a 
          href={video?.link || `https://rumble.com/${params.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Watch on Rumble
        </a>
      </div>
      
      {/* Video Info - only show if we have video metadata */}
      {video && (
        <>
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="flex flex-wrap justify-between items-center mb-6">
              <div>
                <p className="text-gray-500 mb-2">Source: {video.uploader.replace('https://', '')}</p>
              </div>
              <div className="flex space-x-4">
                <a 
                  href={`https://x.com/intent/tweet?url=${encodeURIComponent(video.link)}&text=${encodeURIComponent(video.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  aria-label="Share on X (Twitter)"
                >
                  <FaTwitter size={20} />
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(video.link)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <FaFacebook size={20} />
                </a>
                <a 
                  href={`mailto:?subject=${encodeURIComponent(video.title)}&body=${encodeURIComponent(video.link)}`}
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* WarRoom Info */}
          <div className="border-t border-gray-200 pt-8 mb-12">
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="font-bold text-lg">War Room</div>
                </div>
              </div>
              
              <p className="mb-4 text-gray-700 font-medium">
                Stay ahead of the censors – <a href="https://warroom.org/join" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Join us warroom.org/join</a>
              </p>
              
              <div className="mt-4 text-sm text-gray-500">
                <span>#news #politics #realnews</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 