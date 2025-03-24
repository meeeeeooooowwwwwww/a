'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [latestPostsDropdownOpen, setLatestPostsDropdownOpen] = useState(false);
  const [videosDropdownOpen, setVideosDropdownOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-[200] px-4 pt-4">
      <div className="w-full mx-auto bg-white border border-gray-100 rounded-xl shadow-md">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-bold text-pink-400 hover:text-pink-500 transition-colors">
            Natalie G. Winters
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-gray-800 font-medium hover:text-pink-400 transition-colors duration-200">
              Home
            </Link>
            
            {/* Videos Dropdown */}
            <div className="mega-menu-container">
              <div className="mega-menu-trigger">
                Videos
                <FaChevronDown className="ml-1 h-3 w-3" />
              </div>
              
              <div className="mega-menu-panel" style={{width: '16rem'}}>
                <Link href="/videos/natalie-winters" className="mega-menu-item">
                  Natalie Winters Videos
                </Link>
                <Link href="/videos/bannon-warroom" className="mega-menu-item">
                  Bannon Warroom Videos
                </Link>
              </div>
            </div>
            
            {/* News Dropdown with Side Menus */}
            <div className="mega-menu-container">
              <div className="mega-menu-trigger">
                News
                <FaChevronDown className="ml-1 h-3 w-3" />
              </div>
              
              <div className="mega-menu-panel" style={{width: '16rem'}}>
                {/* White House News */}
                <div className="nested-mega-menu" data-position="1">
                  <div className="mega-menu-item nested-trigger flex justify-between items-center">
                    White House News
                    <FaChevronRight className="h-3 w-3 ml-2" />
                  </div>
                  <div className="nested-mega-panel">
                    <a href="https://www.whitehouse.gov/briefing-room/statements-releases/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      Fact Sheets
                    </a>
                    <a href="https://www.whitehouse.gov/briefing-room/presidential-actions/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      Justice
                    </a>
                    <a href="https://www.whitehouse.gov/briefing-room/presidential-actions/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      Presidential Actions
                    </a>
                    <a href="https://www.whitehouse.gov/economy/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      DOGE Savings
                    </a>
                    <a href="https://www.whitehouse.gov/briefing-room/blog/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      Articles
                    </a>
                  </div>
                </div>
                
                {/* Warroom News */}
                <div className="nested-mega-menu" data-position="2">
                  <div className="mega-menu-item nested-trigger flex justify-between items-center">
                    Warroom News
                    <FaChevronRight className="h-3 w-3 ml-2" />
                  </div>
                  <div className="nested-mega-panel">
                    <a href="https://warroom.org/shows/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      Shows & Broadcasts
                    </a>
                    <a href="https://warroom.org/category/news/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      Transhumanism
                    </a>
                    <a href="https://warroom.org/category/news/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      MAGA Nation
                    </a>
                    <a href="https://warroom.org/category/news/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      Economy
                    </a>
                    <a href="https://warroom.org/category/news/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      Politics
                    </a>
                  </div>
                </div>
                
                {/* Real America's Voice */}
                <div className="nested-mega-menu" data-position="3">
                  <div className="mega-menu-item nested-trigger flex justify-between items-center">
                    Real America's Voice
                    <FaChevronRight className="h-3 w-3 ml-2" />
                  </div>
                  <div className="nested-mega-panel">
                    <a href="https://americasvoice.news/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      American Sunrise
                    </a>
                    <a href="https://americasvoice.news/warroom/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      War Room
                    </a>
                    <a href="https://americasvoice.news/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      Royce White Show
                    </a>
                    <a href="https://americasvoice.news/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      Charlie Kirk
                    </a>
                    <a href="https://americasvoice.news/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      America's Voice Live
                    </a>
                  </div>
                </div>
                
                {/* The National Pulse */}
                <div className="nested-mega-menu" data-position="4">
                  <div className="mega-menu-item nested-trigger flex justify-between items-center">
                    The National Pulse
                    <FaChevronRight className="h-3 w-3 ml-2" />
                  </div>
                  <div className="nested-mega-panel">
                    <a href="https://thenationalpulse.com/analysis/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      Analysis
                    </a>
                    <a href="https://thenationalpulse.com/" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      Streaming
                    </a>
                  </div>
                </div>
                
                {/* Epoch Times */}
                <div className="nested-mega-menu" data-position="5">
                  <div className="mega-menu-item nested-trigger flex justify-between items-center">
                    Epoch Times
                    <FaChevronRight className="h-3 w-3 ml-2" />
                  </div>
                  <div className="nested-mega-panel">
                    <a href="https://www.theepochtimes.com/c-national-security" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      National Security
                    </a>
                    <a href="https://www.theepochtimes.com/china" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      China News
                    </a>
                    <a href="https://www.theepochtimes.com/c-us-politics" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      U.S. Politics
                    </a>
                    <a href="https://www.theepochtimes.com/c-podcasts" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      Pod Casts
                    </a>
                    <a href="https://www.theepochtimes.com/c-opinion" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                      Opinion
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Latest Posts Dropdown */}
            <div className="mega-menu-container">
              <div className="mega-menu-trigger">
                Latest Posts
                <FaChevronDown className="ml-1 h-3 w-3" />
              </div>
              
              <div className="mega-menu-panel" style={{width: '12rem'}}>
                <a href="https://truthsocial.com/@realDonaldTrump" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                  President Trump
                </a>
                <a href="https://gettr.com/user/stevebannon" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                  Steve Bannon
                </a>
                <a href="https://x.com/nataliegwinters" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                  Natalie Winters
                </a>
                <Link href="/latest-posts/elon-musk" className="mega-menu-item">
                  Elon Musk
                </Link>
              </div>
            </div>
            
            <a href="https://shessoright.co/" target="_blank" rel="noopener noreferrer" className="text-gray-800 font-medium hover:text-pink-400 transition-colors duration-200">
              Shop
            </a>
            <Link href="/about" className="text-gray-800 font-medium hover:text-pink-400 transition-colors duration-200">
              About
            </Link>
            <a href="https://warroom.org/contact/" target="_blank" rel="noopener noreferrer" className="text-gray-800 font-medium hover:text-pink-400 transition-colors duration-200">
              Contact
            </a>
            <a 
              href="https://x.com/nataliegwinters"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 text-base font-medium text-white bg-pink-400 rounded-lg shadow-sm hover:bg-pink-500 transition-all duration-200"
            >
              Follow @X
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-pink-400 hover:text-pink-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-64px)] overflow-y-auto rounded-b-xl">
          <nav className="py-4 px-6 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-800 font-medium hover:text-pink-400 transition-colors duration-200 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Videos Menu with accordion style */}
            <div className="border-b border-gray-100 pb-2">
              <button
                className="flex items-center justify-between w-full text-left text-gray-800 font-medium hover:text-pink-400 transition-colors duration-200 text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  setVideosDropdownOpen(!videosDropdownOpen);
                }}
              >
                Videos
                <FaChevronDown className={`transform duration-200 ${videosDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {videosDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link href="/videos/natalie-winters" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                    Natalie Winters Videos
                  </Link>
                  <Link href="/videos/bannon-warroom" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                    Bannon Warroom Videos
                  </Link>
                </div>
              )}
            </div>
            
            {/* Mobile News Menu with accordion style */}
            <div className="border-b border-gray-100 pb-2">
              <button
                className="flex items-center justify-between w-full text-left text-gray-800 font-medium hover:text-pink-400 transition-colors duration-200 text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  setNewsDropdownOpen(!newsDropdownOpen);
                }}
              >
                News
                <FaChevronDown className={`transform duration-200 ${newsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {newsDropdownOpen && (
                <div className="mt-2 ml-4 space-y-3">
                  {/* White House News */}
                  <div className="border-l-2 border-primary-200 pl-3">
                    <div className="font-medium text-primary-600 mb-1">White House News</div>
                    <a href="https://www.whitehouse.gov/briefing-room/statements-releases/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                      Fact Sheets
                    </a>
                    <a href="https://www.whitehouse.gov/briefing-room/presidential-actions/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                      Justice
                    </a>
                    <a href="https://www.whitehouse.gov/briefing-room/presidential-actions/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                      Presidential Actions
                    </a>
                    <a href="https://www.whitehouse.gov/economy/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                      DOGE Savings
                    </a>
                    <a href="https://www.whitehouse.gov/briefing-room/blog/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                      Articles
                    </a>
                  </div>
                  
                  {/* Warroom News */}
                  <div className="border-l-2 border-primary-200 pl-3">
                    <div className="font-medium text-primary-600 mb-1">Warroom News</div>
                    <a href="https://warroom.org/shows/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                      Shows & Broadcasts
                    </a>
                    <a href="https://warroom.org/category/news/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                      Transhumanism
                    </a>
                    <a href="https://warroom.org/category/news/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                      MAGA Nation
                    </a>
                    <a href="https://warroom.org/category/news/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                      Economy
                    </a>
                    <a href="https://warroom.org/category/news/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                      Politics
                    </a>
                  </div>
                  
                  {/* Real America's Voice */}
                  <div className="border-l-2 border-primary-200 pl-3">
                    <div className="font-medium text-primary-600 mb-1">Real America's Voice</div>
                    <a href="https://americasvoice.news/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                      American Sunrise
                    </a>
                    <a href="https://americasvoice.news/warroom/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                      War Room
                    </a>
                    <a href="https://americasvoice.news/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-pink-400" onClick={() => setIsOpen(false)}>
                      Royce White Show
                    </a>
                    <a href="https://americasvoice.news/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-primary-500" onClick={() => setIsOpen(false)}>
                      Charlie Kirk
                    </a>
                    <a href="https://americasvoice.news/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-primary-500" onClick={() => setIsOpen(false)}>
                      America's Voice Live
                    </a>
                  </div>
                  
                  {/* The National Pulse */}
                  <div className="border-l-2 border-primary-200 pl-3">
                    <div className="font-medium text-primary-600 mb-1">The National Pulse</div>
                    <a href="https://thenationalpulse.com/analysis/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-primary-500" onClick={() => setIsOpen(false)}>
                      Analysis
                    </a>
                    <a href="https://thenationalpulse.com/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-primary-500" onClick={() => setIsOpen(false)}>
                      Streaming
                    </a>
                  </div>
                  
                  {/* Epoch Times */}
                  <div className="border-l-2 border-primary-200 pl-3">
                    <div className="font-medium text-primary-600 mb-1">Epoch Times</div>
                    <a href="https://www.theepochtimes.com/c-national-security" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-primary-500">
                      National Security
                    </a>
                    <a href="https://www.theepochtimes.com/china" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-primary-500">
                      China News
                    </a>
                    <a href="https://www.theepochtimes.com/c-us-politics" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-primary-500" onClick={() => setIsOpen(false)}>
                      U.S. Politics
                    </a>
                    <a href="https://www.theepochtimes.com/c-podcasts" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-primary-500" onClick={() => setIsOpen(false)}>
                      Pod Casts
                    </a>
                    <a href="https://www.theepochtimes.com/c-opinion" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-primary-500" onClick={() => setIsOpen(false)}>
                      Opinion
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Mobile Latest Posts Menu with accordion style */}
            <div className="border-b border-gray-100 pb-2">
              <button
                className="flex items-center justify-between w-full text-left text-gray-800 font-medium hover:text-primary-500 transition-colors duration-200 text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  setLatestPostsDropdownOpen(!latestPostsDropdownOpen);
                }}
              >
                Latest Posts
                <FaChevronDown className={`transform duration-200 ${latestPostsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {latestPostsDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <a href="https://truthsocial.com/@realDonaldTrump" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-primary-500">
                    President Trump
                  </a>
                  <a href="https://gettr.com/user/stevebannon" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-primary-500">
                    Steve Bannon
                  </a>
                  <a href="https://x.com/nataliegwinters" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-700 hover:text-primary-500">
                    Natalie Winters
                  </a>
                  <Link href="/latest-posts/elon-musk" className="block py-1 text-sm text-gray-700 hover:text-primary-500" onClick={() => setIsOpen(false)}>
                    Elon Musk
                  </Link>
                </div>
              )}
            </div>
            
            <a
              href="https://shessoright.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-medium hover:text-primary-500 transition-colors duration-200 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </a>
            <Link
              href="/about"
              className="text-gray-800 font-medium hover:text-primary-500 transition-colors duration-200 text-lg"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <a
              href="https://warroom.org/contact/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-800 font-medium hover:text-primary-500 transition-colors duration-200 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="https://x.com/nataliegwinters"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 text-base font-medium text-white bg-pink-400 rounded-lg shadow-sm hover:bg-pink-500 transition-all duration-200 text-center"
              onClick={() => setIsOpen(false)}
            >
              Follow @X
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}