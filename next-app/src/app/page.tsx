import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import Carousel from '@/components/sections/Carousel';

export const metadata: Metadata = {
  title: 'Natalie G. Winters - Author & Investigative Journalist',
  description: 'Official website of Natalie G. Winters - Author, investigative journalist, and host covering politics, culture, and current events.',
};

// Static carousel items
const carouselItems = [
  {
    id: 1,
    title: 'Natalie G. Winters',
    description: 'Investigative Journalist',
    image: '/images/natalie-winters/natalie-winters-3.jpg'
  },
  {
    id: 2,
    title: 'War Room',
    description: 'White House Press Correspondent',
    image: '/images/natalie-winters/natalie-winters-12.jpg'
  },
  {
    id: 3,
    title: 'Latest Investigations',
    description: 'Stay informed with breaking news',
    image: '/images/natalie-winters/natalie-winters-17.jpg'
  }
];

export default function Home() {
  return (
    <main>
      <PageHero 
        title="Natalie G. Winters"
        subtitle="White House Press Correspondent"
        imageSrc="/images/natalie-winters/natalie-winters-3.jpg"
        imagePosition="center 15%"
      />
      <Carousel items={carouselItems} />
    </main>
  );
}
