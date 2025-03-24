import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Natalie G. Winters - Author & Investigative Journalist',
  description: 'Official website of Natalie G. Winters - Author, investigative journalist, and host covering politics, culture, and current events.',
};

export default function Home() {
  return (
    <main>
      <PageHero 
        title="Natalie G. Winters"
        subtitle="White House Press Correspondent"
        imageSrc="/images/natalie-winters/natalie-winters-3.jpg"
        imagePosition="center 15%"
      />
      <div className="py-12 content-container">
        <h1 className="text-4xl font-serif font-bold mb-8">Welcome</h1>
        <p className="text-xl text-gray-600 mb-8">
          Investigative journalist, War Room host, and self-proclaimed "top spreader of misinformation" according to the New York Times.
        </p>
      </div>
    </main>
  );
}
