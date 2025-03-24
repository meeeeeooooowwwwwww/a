import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'
import Carousel from '@/components/sections/Carousel'
import { getLatestArticles } from '@/utils/warroom'
import fs from 'fs';
import path from 'path';

// Map of news images to use for videos based on keywords in their titles
const NEWS_IMAGES = {
  'perkins': '/images/news/Perkins-Coie.jpg',
  'china': '/images/news/usa-ai.jpg',
  'prison': '/images/news/j6-prisoners.jpg',
  'collins': '/images/news/francis-collins.jpg',
  'clown': '/images/news/clowns.jpg',
  'brennan': '/images/news/brennan.jpg',
  'default': '/images/news/warroom-logo.jpg'
}

function getNewsImage(title: string): string {
  const lowercaseTitle = title.toLowerCase();
  const matchingKey = Object.keys(NEWS_IMAGES).find(key => lowercaseTitle.includes(key));
  return matchingKey ? NEWS_IMAGES[matchingKey as keyof typeof NEWS_IMAGES] : NEWS_IMAGES.default;
}

export default async function Home() {
  // Get Natalie's carousel images
  const imagesDirectory = path.join(process.cwd(), 'public/images/natalie-winters');
  let imageFiles = fs.readdirSync(imagesDirectory);
  
  // Remove any duplicate file names that might exist
  imageFiles = [...new Set(imageFiles)];
  
  // Create a unique set of items based on the file path
  const uniqueImagePaths = new Set();
  const uniqueItems = [];
  
  for (let i = 0; i < imageFiles.length; i++) {
    const file = imageFiles[i];
    const imagePath = `/images/natalie-winters/${file}`;
    
    // Only add this image if we haven't seen this path before
    if (!uniqueImagePaths.has(imagePath)) {
      uniqueImagePaths.add(imagePath);
      uniqueItems.push({
        id: uniqueItems.length + 1,
        title: `Image ${uniqueItems.length + 1}`,
        description: '',
        image: imagePath
      });
    }
  }

  return (
    <main>
      <PageHero 
        title="Natalie G. Winters"
        subtitle="White House Press Correspondent."
        imageSrc="/images/natalie-winters/natalie-winters-3.jpg"
        imagePosition="center 15%"
      />
      <Carousel items={uniqueItems} />
      
      {/* Featured Videos section removed temporarily until Worker is ready */}
    </main>
  )
}
