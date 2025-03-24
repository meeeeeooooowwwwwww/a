'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imagePosition?: string;
}

export default function PageHero({ 
  title, 
  subtitle, 
  imageSrc, 
  imagePosition = 'center 15%'
}: PageHeroProps) {
  return (
    <section className="relative h-[65vh] md:h-[85vh] w-full flex items-center text-white pt-6 overflow-hidden">
      {/* Background Image with mobile positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full absolute inset-0 md:transform-none transform translate-y-[-5%]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            style={{ objectPosition: imagePosition }}
            priority
            sizes="100vw"
          />
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Mobile Version */}
      <div className="md:hidden w-full relative z-10">
        <div className="flex items-center justify-center h-full pt-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[95%] mx-auto bg-black bg-opacity-40 rounded-xl px-4 py-4 border border-white border-opacity-20 text-center"
          >
            <h1 className="text-2xl sm:text-3xl font-serif font-bold mb-2 text-white leading-tight">
              {title}
            </h1>
            
            <p className="text-sm sm:text-lg text-white opacity-90 mb-5 leading-snug">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/news" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-pink-400 rounded-lg shadow-sm hover:bg-pink-500 transition-all duration-200">
                Latest News
              </Link>
              <a 
                href="https://x.com/nataliegwinters" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg shadow-sm transition-all duration-200 border-2 border-white text-white hover:bg-white hover:bg-opacity-10"
              >
                Follow @X
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block w-full relative z-10">
        <div className="ml-0 lg:ml-0 mt-[10%]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black bg-opacity-40 rounded-xl px-6 py-6 max-w-[450px] border border-white border-opacity-20 text-left"
          >
            <h1 className="text-5xl font-serif font-bold mb-3 text-white leading-tight">
              {title}
            </h1>
            
            <p className="text-xl text-white opacity-90 mb-6 leading-snug">
              {subtitle}
            </p>

            <div className="flex flex-row gap-4 justify-start">
              <Link href="/news" className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-white bg-pink-400 rounded-lg shadow-sm hover:bg-pink-500 transition-all duration-200">
                Latest News
              </Link>
              <a 
                href="https://x.com/nataliegwinters" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-5 py-2 text-base font-medium rounded-lg shadow-sm transition-all duration-200 border-2 border-white text-white hover:bg-white hover:bg-opacity-10"
              >
                Follow @X
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 