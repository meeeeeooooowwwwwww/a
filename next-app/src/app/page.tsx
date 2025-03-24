import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Natalie G. Winters - Author & Investigative Journalist',
  description: 'Official website of Natalie G. Winters - Author, investigative journalist, and host covering politics, culture, and current events.',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Natalie Winters</h1>
      <p className="text-xl text-gray-600">This is the homepage.</p>
    </div>
  );
}
