'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const heroImages: string[] = [
  '/images/H1.png',
  '/images/H2.png',
  '/images/H3.png',
];

const socialLinks = [
  { icon: '/images/facebook.png', alt: 'Facebook', href: 'https://www.facebook.com/SkyhawksSports' },
  { icon: '/images/twitter.png', alt: 'Twitter', href: 'https://twitter.com/skyhawkssports?lang=en' },
  { icon: '/images/instagram.png', alt: 'Instagram', href: 'https://www.instagram.com/skyhawkssports/' },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ paddingTop: '35.25%' }}>
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {heroImages.map((image, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-full">
            <Image
              src={image}
              alt={`Hero Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority={index === 0}
            />
            {index !== 1 && (
              <div className="absolute bottom-4 right-4 md:bottom-5 md:right-5 z-10 w-1/2 max-w-[300px] md:max-w-[600px]">
                <Link href="https://register.skyhawks.com/">
                  <Image 
                    src="/images/search.png" 
                    alt="Search Our Programs" 
                    width={600}
                    height={200}
                    className="w-full h-auto cursor-pointer"
                  />
                </Link>
              </div>
            )}
            <div className="absolute top-4 right-4 flex flex-col items-end space-y-4 z-20">
              {socialLinks.map((social, socialIndex) => (
                <Link 
                  key={socialIndex}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center mb-2"
                >
                  <Image src={social.icon} alt={social.alt} width={16} height={16} className="md:w-5 md:h-5" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2.5 z-30">
        {heroImages.map((_, index) => (
          <span 
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full cursor-pointer transition-colors duration-300 
                        ${index === currentImage ? 'bg-white' : 'bg-white bg-opacity-50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
