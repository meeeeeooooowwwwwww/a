import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart, FaStar, FaTwitter } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Shop - Natalie G. Winters',
  description: 'Shop books, merchandise, and exclusive content from Natalie G. Winters.',
}

export default function ShopPage() {
  const products = [
    {
      id: 1,
      title: 'The Truth Unveiled',
      description: 'A groundbreaking investigation into the hidden forces shaping our world.',
      image: '/images/book-1.jpg',
      price: 29.99,
      category: 'Books',
      rating: 5,
      reviews: 128,
    },
    {
      id: 2,
      title: 'Behind the Headlines',
      description: 'An insider\'s look at the biggest stories of our time.',
      image: '/images/book-2.jpg',
      price: 24.99,
      category: 'Books',
      rating: 4.5,
      reviews: 96,
    },
    {
      id: 3,
      title: 'Digital Investigation Course',
      description: 'Learn investigative journalism techniques from Natalie G. Winters.',
      image: '/images/course-1.jpg',
      price: 199.99,
      category: 'Courses',
      rating: 4.8,
      reviews: 245,
    },
    // Add more products as needed
  ]

  const categories = [
    'All',
    'Books',
    'Courses',
    'Merchandise',
    'Digital Content',
  ]

  return (
    <div className="py-12 content-container">
      <h1 className="text-4xl font-serif font-bold text-center mb-12">Shop</h1>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className="px-6 py-2 rounded-full border border-gray-300 hover:border-primary-600 hover:text-primary-600 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Product */}
      <div className="mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[400px]">
              <Image
                src="/images/featured-product.jpg"
                alt="Featured Product"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-primary-600 font-medium mb-2">New Release</span>
              <h2 className="text-3xl font-bold mb-4">The Complete Collection</h2>
              <p className="text-gray-600 mb-6">
                Get exclusive access to Natalie's complete works, including digital content, interviews, and behind-the-scenes material.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold">$499.99</span>
                <span className="text-gray-500 line-through">$699.99</span>
              </div>
              <button className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-primary-600 text-sm font-medium">
                {product.category}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">${product.price}</span>
                <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Follow on X Section */}
      <div className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">Follow Natalie on X</h2>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest news, releases and exclusive content from Natalie G. Winters.
        </p>
        <a 
          href="https://x.com/nataliegwinters" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          <FaTwitter className="h-5 w-5" />
          <span>Follow @nataliegwinters</span>
        </a>
      </div>
    </div>
  )
} 