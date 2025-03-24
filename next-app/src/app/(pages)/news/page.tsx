import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getLatestArticles, formatDate, getArticleSlug } from '@/utils/warroom'

export const metadata: Metadata = {
  title: 'News - Natalie G. Winters',
  description: 'Breaking news and investigative reports from Natalie G. Winters.',
}

// Map of news images to use for articles based on keywords in their titles
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

export default async function NewsPage() {
  const articles = await getLatestArticles(12);

  return (
    <div className="py-12 content-container">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16">
        <Image
          src="/images/news/warroom-header.jpg"
          alt="Warroom Header"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Warroom News
          </h1>
        </div>
      </div>

      <h1 className="text-4xl font-serif font-bold mb-12">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link 
            key={`${article.title}-${article.timestamp}`}
            href={`/news/${getArticleSlug(article.url)}`}
            className="group border border-gray-200 rounded-lg overflow-hidden block hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48 mb-4 overflow-hidden rounded-t-lg">
              <Image
                src={getNewsImage(article.url)}
                alt={article.title}
                fill
                className="object-contain bg-white p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 bg-pink-50 rounded-b-lg">
              <h2 className="text-xl font-serif font-bold mb-2 group-hover:text-primary-600 transition-colors">
                {article.title}
              </h2>
              <div className="text-sm text-gray-500">
                <span>{formatDate(article.timestamp)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 