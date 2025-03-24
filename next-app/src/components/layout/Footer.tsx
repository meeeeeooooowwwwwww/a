'use client';

import Link from 'next/link';
import { FaTwitter, FaEnvelope, FaCreativeCommons } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="w-full py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* About */}
          <div className="col-span-1">
            <h3 className="text-xl font-serif font-bold mb-4 text-pink-100">Natalie G. Winters</h3>
            <p className="text-gray-300 mb-4">
              Breaking news, investigative journalism, and in-depth analysis of politics, culture, and current events.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-pink-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/videos/natalie-winters" className="text-gray-300 hover:text-white transition-colors">
                  Natalie Winters Videos
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Solid Sources */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-pink-100">Solid Sources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://thenationalpulse.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  The National Pulse
                </a>
              </li>
              <li>
                <a 
                  href="https://revolver.news/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Revolver News
                </a>
              </li>
              <li>
                <a 
                  href="https://www.joebot.xyz/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  JoeBot
                </a>
              </li>
              <li>
                <a 
                  href="https://www.article3project.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Article III Project
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@NatalieGWinters" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  YouTube (OMGEE)
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-pink-100">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://x.com/nataliegwinters" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <FaTwitter className="h-5 w-5" />
                  <span>Follow on X</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://warroom.org/contact/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <FaEnvelope className="h-5 w-5" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center max-w-xl mx-auto">
            <FaCreativeCommons className="h-5 w-5 mr-1" /> {currentYear} <a 
              href="https://app.companiesoffice.govt.nz/companies/app/service/services/documents/852D5D2F3882DB877A4253BE4BF5B576/CertIncorporation_9272491_19March2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 hover:text-white"
            >America First Limited</a> <span className="mx-1">•</span> Web design by <a 
              href="https://github.com/meeeeeooooowwwwwww"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 hover:text-white"
            >meeeeeooooowwwwwww</a>
          </p>
        </div>
      </div>
    </footer>
  );
} 