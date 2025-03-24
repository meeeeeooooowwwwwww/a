import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { getWarroomArticle, formatDate, type WarroomArticle } from '@/utils/warroom'

// Map of news images to use for articles based on keywords in their titles
const NEWS_IMAGES = {
  'perkins': '/images/news/Perkins-Coie.jpg',
  'china': '/images/news/usa-ai.jpg',
  'prison': '/images/news/j6-prisoners.jpg',
  'collins': '/images/news/francis-collins.jpg',
  'clown': '/images/news/clowns.jpg',
  'brennan': '/images/news/brennan.jpg',
  'default': '/images/news/warroom-header.jpg'
}

function getNewsImage(title: string): string {
  const lowercaseTitle = title.toLowerCase();
  const matchingKey = Object.keys(NEWS_IMAGES).find(key => lowercaseTitle.includes(key));
  return matchingKey ? NEWS_IMAGES[matchingKey as keyof typeof NEWS_IMAGES] : NEWS_IMAGES.default;
}

type Props = {
  params: { id: string }
}

type ContentBlock = {
  type: 'paragraph' | 'heading';
  text: string;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = await params.id;
  const article = await getWarroomArticle(id);
  
  if (!article) return { title: 'Article Not Found' }

  return {
    title: `${article.title} - Natalie G. Winters`,
    description: article.ordered_content[0]?.text || article.title,
  }
}

export default async function ArticlePage({ params }: Props) {
  const id = await params.id;
  const article = await getWarroomArticle(id);
  
  if (!article) return <div>Article not found</div>

  // Get paragraphs and headings from ordered content
  const content = article.ordered_content
    .filter((block: ContentBlock) => block.type === 'paragraph' || block.type === 'heading')
    .filter((block: ContentBlock) => {
      // Filter out promotional content
      if (block.text.includes('Stay ahead of the censors')) return false;
      if (block.text.includes('Aired On:')) return false;
      if (block.text.startsWith('Watch:')) return false;
      if (block.text.includes('@Bannons_WarRoom')) return false;
      if (block.text.includes('warroom.org')) return false;
      if (block.text.includes('#news #politics #realnews')) return false;
      if (block.text.includes('AmericasVoice.news')) return false;
      return true;
    });

  const capitalizedTitle = article.title.charAt(0).toUpperCase() + article.title.slice(1);
  const shareUrl = getNewsImage(article.title);

  return (
    <article className="container mx-auto px-4 py-12">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-primary-600 font-medium">{article.categories[0]}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          {article.title}
        </h1>
        {content[0]?.type === 'paragraph' && content[0]?.text.trim() !== '' && (
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {content[0].text}
          </p>
        )}
      </header>

      {/* Featured Image */}
      <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden mb-12">
        <Image
          src="/images/news/warroom-header.jpg"
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg max-w-none mb-12">
          {content.map((block: ContentBlock, index: number) => {
            if (block.type === 'heading') {
              return (
                <h2 key={index} className="text-2xl font-serif font-bold mt-8 mb-4">
                  {block.text}
                </h2>
              )
            }
            return (
              <p key={index} className="mb-4">
                {block.text}
              </p>
            )
          })}
        </div>

        {/* Share & WarRoom Info */}
        <div className="border-t border-gray-200 pt-8 mb-12">
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <Image 
                  src="/images/news/warroom-logo.jpg" 
                  alt="War Room" 
                  width={48} 
                  height={48} 
                  className="rounded-full"
                />
                <div className="font-bold text-lg">War Room</div>
              </div>
              <div className="text-md text-primary-600 font-medium">
                Aired On: 3/10/2025
              </div>
            </div>
            
            <p className="mb-4 text-gray-700 font-medium">
              Stay ahead of the censors – <a href="https://warroom.org/join" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Join us warroom.org/join</a>
            </p>
            
            <div className="mt-4">
              <h4 className="font-bold mb-2">Watch:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li>
                  <a href="https://x.com/Bannons_WarRoom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary-600">
                    <FaTwitter size={16} />
                    <span>@Bannons_WarRoom</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.warroom.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                    </svg>
                    <span>warroom.org</span>
                  </a>
                </li>
                <li>
                  <a href="https://gettr.com/user/warroom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    <span>@WarRoom</span>
                  </a>
                </li>
                <li>
                  <a href="https://podcasts.apple.com/us/podcast/war-room/id1485351658" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                      <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                      <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7.2 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.567-1.9a.5.5 0 0 1 .325-.05z"/>
                    </svg>
                    <span>Podcast</span>
                  </a>
                </li>
                <li>
                  <a href="https://americasvoice.news" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/>
                    </svg>
                    <span>TV/Web</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="mt-4 text-sm text-gray-500">
              <span>#news #politics #realnews</span>
            </div>
            
            <div className="mt-6 flex gap-4 border-t border-gray-300 pt-4">
              <a 
                href={`https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(capitalizedTitle)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Share on X (Twitter)"
              >
                <FaTwitter size={24} />
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Share on Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href={`mailto:?subject=${encodeURIComponent(capitalizedTitle)}&body=${encodeURIComponent(`Check out this article: ${shareUrl}`)}`} 
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Share via Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
} 