import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getLatestArticles, formatDate, getArticleSlug } from '@/utils/warroom'
import { FaTwitter } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Latest Posts - Natalie G. Winters',
  description: 'Stay informed with the latest investigative journalism and breaking news from Natalie G. Winters.',
}

export default async function LatestPostsPage() {
  const articles = await getLatestArticles(12);
  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <div className="py-12 content-container">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Latest Posts
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay informed with the latest investigative journalism and breaking news
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Array.from(new Set(articles.flatMap(article => article.categories))).map((category) => (
          <button
            key={category}
            className="px-6 py-2 rounded-full border border-pink-200 text-pink-600 hover:bg-pink-50 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {featuredArticle && (
        <div className="mb-16">
          <article className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-[400px] md:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
              <Image
                src="/images/news-1.jpg"
                alt={featuredArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary-200 font-medium">
                    {featuredArticle.categories[0]}
                  </span>
                  <span className="text-gray-300">
                    {formatDate(featuredArticle.timestamp)}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  <Link
                    href={`/latest-posts/${getArticleSlug(featuredArticle.url)}`}
                    className="hover:text-primary-200 transition-colors"
                  >
                    {featuredArticle.title}
                  </Link>
                </h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src="/images/about-profile.jpg"
                        alt={featuredArticle.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium">{featuredArticle.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}

      {/* Grid of Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {regularArticles.map((article) => (
          <article
            key={article.url}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src="/images/news-2.jpg"
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-primary-600 text-sm font-medium">
                  {article.categories[0]}
                </span>
                <span className="text-gray-500 text-sm">
                  {formatDate(article.timestamp)}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 line-clamp-2">
                <Link
                  href={`/latest-posts/${getArticleSlug(article.url)}`}
                  className="hover:text-primary-600 transition-colors"
                >
                  {article.title}
                </Link>
              </h3>
              <div className="flex items-center gap-3 mt-4">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/images/about-profile.jpg"
                    alt={article.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm text-gray-600">{article.author}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Follow on X Section */}
      <div className="bg-pink-50 rounded-2xl p-8 md:p-12 mb-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Follow Natalie on X
          </h2>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest breaking news and investigative reports directly from Natalie G. Winters
          </p>
          <a 
            href="https://x.com/nataliegwinters" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-8 py-3 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-colors gap-2"
          >
            <FaTwitter className="h-5 w-5" />
            <span>Follow @nataliegwinters</span>
          </a>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-pink-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest breaking news and investigative reports directly from Natalie G. Winters
          </p>
          <button
            className="inline-flex items-center justify-center px-8 py-3 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-colors gap-2"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  )
} 