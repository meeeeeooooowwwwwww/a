import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'About - Natalie G. Winters',
  description: 'Learn more about Natalie G. Winters - Investigative journalist, War Room host, and self-proclaimed "top spreader of misinformation" according to the New York Times.',
}

export default function AboutPage() {
  const socialLinks = [
    { icon: FaTwitter, href: 'https://x.com/nataliegwinters', label: 'X (Twitter)' },
  ]

  const imageGallery = [
    { src: '/images/natalie-winters/natalie-winters-1.jpg', alt: 'Natalie Winters' },
    { src: '/images/natalie-winters/natalie-winters-3.jpg', alt: 'Natalie Winters' },
    { src: '/images/natalie-winters/natalie-winters-5.jpg', alt: 'Natalie Winters' },
    { src: '/images/natalie-winters/natalie-winters-7.jpg', alt: 'Natalie Winters' },
    { src: '/images/natalie-winters/natalie-winters-10.jpg', alt: 'Natalie Winters' },
    { src: '/images/natalie-winters/natalie-winters-12.jpg', alt: 'Natalie Winters' },
    { src: '/images/natalie-winters/natalie-winters-13.jpg', alt: 'Natalie Winters' },
    { src: '/images/natalie-winters/natalie-winters-15.jpg', alt: 'Natalie Winters' },
    { src: '/images/natalie-winters/natalie-winters-17.jpg', alt: 'Natalie Winters' },
  ]
  
  // Calculate age dynamically based on birthday
  const calculateAge = () => {
    const birthDate = new Date('1999-02-24');
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    // If birthday hasn't occurred yet this year, subtract one year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };
  
  const currentAge = calculateAge();

  return (
    <div className="py-12 content-container">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16">
        <Image
          src="/images/natalie-winters/natalie-winters-1.jpg"
          alt="Natalie G. Winters"
          fill
          className="object-cover"
          style={{ objectPosition: '0 -180px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            About Natalie G. Winters
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Investigative journalist, War Room host, and proud thorn in the establishment's side.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-3xl font-serif font-bold mb-6">Just Who Is Natalie G. Winters? 🤔</h2>
        <div className="prose prose-lg max-w-none mb-8">
          <p>
            "Co-host turned host of Steve Bannon's War Room thanks to Biden's rogue lawfare. You also probably know me from my investigative reporting on the Chinese Communist Party, Ukraine aid (read: Money Laundering), and COVID origins.
          </p>
          <p>
            Rated the top spreader of misinformation by the New York Times, too. Need I say more? It's like winning a Grammy, but for truth-telling!
          </p>
          <p>
            No dark money or Soros-linked (lol) groups fund my work & I'm proud to be independent of corporate media 😄. I don't take checks from shadowy figures in parking garages — unless they're offering really good coffee.
          </p>
          <p>
            Thank YOU for making that possible! ❤️" - Natalie G. Winters
          </p>
        </div>
        
        {/* First row of images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {imageGallery.slice(0, 3).map((image, index) => (
            <div key={index} className="group p-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-72 overflow-hidden border-4 border-gray-100">
                <div className="absolute inset-0 bg-gray-50 p-1">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none mb-8">
          <h2 className="text-2xl font-serif font-bold mb-4">Insightful Journalist & Rising Media Star</h2>
          <p>
            Natalie Winters is a prominent figure in the world of investigative journalism and political commentary. Known for her incisive reporting and sharp analysis, Miss Winters has gained significant recognition for her deep dives & investigative work, especially in the realms of politics, culture, and international relations. 
          </p>
          <p>
            She's basically like Sherlock Holmes, but with better hair and more screen time. And no, Steven Crowder is still ghey 😆.
          </p>
        </div>

        {/* Second row of images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {imageGallery.slice(3, 6).map((image, index) => (
            <div key={index} className="group p-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-72 overflow-hidden border-4 border-gray-100">
                <div className="absolute inset-0 bg-gray-50 p-1">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none mb-8">
          <h2 className="text-2xl font-serif font-bold mb-4">Age, Early Life & Education (The Origin Story)</h2>
          <p>
            Natalie Winters is currently {currentAge} years old, born on February 24, 1999, in California, USA. Yes, she's accomplished more by {currentAge} than most of us will by retirement. Feel inadequate yet?
          </p>
          <p>
            Her academic journey at UChicago led her to pursue a degree in political science and international relations, where she honed her skills in research, analysis, and communication. It's like Hogwarts, but for people who want to understand why the world is a dumpster fire.
          </p>
          <p>
            Winters' educational foundation helped pave the way for her future success as a journalist, her direction reinforced by a real life MEAN GIRLS' incident at school. After a patriotic academic speech she gave, Natalie was attacked by a bunch of California Valley Girls, whose parents then went on to use their L.A. producer powers to run an episode on one of their shows as a hit piece against Natalie. That's right – she was cancel-cultured before cancel culture was cool!
          </p>
          <p>
            No drama though (well, okay, lots of drama), Miss Natalie Winters then left the sorority to pursue her life goals and excellence elsewhere. When life gives you mean girls, make a media career exposing political corruption!
          </p>
        </div>

        {/* Third row of images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {imageGallery.slice(6, 9).map((image, index) => (
            <div key={index} className="group p-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-72 overflow-hidden border-4 border-gray-100">
                <div className="absolute inset-0 bg-gray-50 p-1">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none mb-8">
          <h2 className="text-2xl font-serif font-bold mb-4">Career Highlights & Political Impact</h2>
          <p>
            Natalie Winters gained significant attention for her work at The National Pulse, where she became known for her in-depth investigative pieces on China's influence on U.S. politics. While most journalists were busy covering celebrity gossip, Natalie was tracking down CCP infiltration like a bloodhound with a political science degree.
          </p>
          <p>
            After completing her education, Natalie Winters rejected a position with the Pentagon (DoD) when, during her interview, she was told that her open concerns about the cozy relationship between China and the US establishment would see her career fly about as high as "a large sack of concrete thrown by a wet cat on a rainy day." That's verbatim from the Pentagon, folks. Your tax dollars at work!
          </p>
          <p>
            Winters chose instead to embark on her journalism career, quickly making a name for herself with her incisive reporting. Her role as Steve Bannon's co-host of the internationally renowned "War Room" has further amplified her influence, allowing her to reach a broader audience and solidify her position as a rising star in conservative media. Think of her as the conservative Woodward and Bernstein rolled into one – but with better social media presence.
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-gray-100 rounded-lg p-8 text-center mb-16">
        <h2 className="text-3xl font-serif font-bold mb-4">Follow Natalie</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          For the latest updates, investigations, and the occasional "I told you so" moment when her reporting is vindicated (again).
        </p>
        <div className="flex items-center justify-center">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors text-2xl flex items-center gap-2"
              aria-label={social.label}
            >
              <social.icon size={32} />
              <span>Follow on {social.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-pink-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Have a tip about government corruption? Spotted a CCP operative at your local Trader Joe's? Or just want to say hello? Reach out below. No, the FBI probably isn't monitoring this page. Probably.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Contact Natalie
        </Link>
      </div>
    </div>
  )
} 