import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // In a real application, fetch the post data based on the ID
  const post = {
    title: 'Breaking Investigation: The Hidden Truth',
    description: 'An in-depth look at recent developments and their implications for national security.',
  }

  return {
    title: `${post.title} - Natalie G. Winters`,
    description: post.description,
  }
}

export default function PostPage({ params }: Props) {
  // In a real application, fetch the post data based on params.id
  const post = {
    title: 'Breaking Investigation: The Hidden Truth',
    excerpt: 'An in-depth look at recent developments and their implications for national security.',
    content: `
      <p class="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <h2>Key Findings</h2>

      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
      </p>

      <blockquote>
        "This investigation reveals patterns that cannot be ignored. The implications are far-reaching and demand immediate attention from policymakers."
      </blockquote>

      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p>

      <h2>Evidence and Analysis</h2>

      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
    `,
    image: '/images/post-1.jpg',
    category: 'Investigation',
    date: 'March 15, 2024',
    readTime: '8 min read',
    author: 'Natalie G. Winters',
    authorImage: '/images/about-profile.jpg',
  }

  const relatedPosts = [
    {
      id: 2,
      title: 'Analysis: Understanding the Current Crisis',
      excerpt: 'A comprehensive analysis of the ongoing situation and its potential consequences.',
      image: '/images/post-2.jpg',
      category: 'Analysis',
      date: 'March 14, 2024',
    },
    {
      id: 3,
      title: 'Special Report: Behind the Scenes',
      excerpt: 'Exclusive insights into the decision-making process and key players involved.',
      image: '/images/post-3.jpg',
      category: 'Special Report',
      date: 'March 13, 2024',
    },
  ]

  return (
    <article className="container mx-auto px-4 py-12">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-primary-600 font-medium">{post.category}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">{post.readTime}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={post.authorImage}
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-medium">{post.author}</div>
              <div className="text-sm text-gray-600">{post.date}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share */}
        <div className="border-t border-gray-200 pt-8 mb-12">
          <h3 className="text-lg font-bold mb-4">Share this article</h3>
          <div className="flex gap-4">
            <a 
              href={`https://x.com/intent/tweet?url=${encodeURIComponent(`https://nataliegwinters.com/latest-posts/${params.id}`)}&text=${encodeURIComponent(post.title)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="Share on X (Twitter)"
            >
              <FaTwitter size={24} />
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://nataliegwinters.com/latest-posts/${params.id}`)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="Share on Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://nataliegwinters.com/latest-posts/${params.id}`)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: https://nataliegwinters.com/latest-posts/${params.id}`)}`}
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="Share via Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <div className="flex items-center gap-6 mb-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              <Image
                src={post.authorImage}
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{post.author}</h3>
              <p className="text-gray-600">
                Investigative journalist covering politics, culture, and current events.
                Author of multiple groundbreaking investigations and special reports.
              </p>
            </div>
          </div>
          <Link
            href="/about"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            View Full Profile →
          </Link>
        </div>

        {/* Related Posts */}
        <div>
          <h2 className="text-2xl font-serif font-bold mb-8">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-primary-600 text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary-600 transition-colors">
                    <Link href={`/latest-posts/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
} 