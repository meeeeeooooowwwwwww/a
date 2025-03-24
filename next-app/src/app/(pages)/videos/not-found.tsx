import Link from 'next/link'

export default function VideoNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-serif font-bold mb-6">Video Not Found</h1>
      <p className="text-gray-600 mb-8 max-w-lg mx-auto">
        Sorry, the video you're looking for could not be found. It may have been removed or the URL might be incorrect.
      </p>
      <Link 
        href="/videos" 
        className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md inline-block transition-colors"
      >
        Return to Videos
      </Link>
    </div>
  )
} 