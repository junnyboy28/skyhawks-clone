'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const partners = [
  [
    { src: '/images/franklin.png', alt: 'Franklin Logo' },
    { src: '/images/pca.png', alt: 'Coaching Alliance Logo' },
  ],
  [
    { src: '/images/ss.png', alt: 'Stack Sports Logo' },
    { src: '/images/ac.png', alt: 'ActivityTree Connect Logo' },
  ],
  [
    { src: '/images/stems.png', alt: 'STEM Study Logo' },
    { src: '/images/upmet.png', alt: 'Upmetrics Logo' },
  ],
];

export default function Partnerships() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center py-10">
      <h2 className="text-blue-600 font-bold text-xl mb-6">Partners & Memberships</h2>
      <div className="flex justify-center items-center mb-6 bg-white p-4 rounded-lg h-60 w-[40%] mx-auto">
        {partners[currentSlide].map((partner, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-center items-center w-44 h-30">
              <Image src={partner.src} alt={partner.alt} width={180} height={100} objectFit="contain" />
            </div>
            {index < partners[currentSlide].length - 1 && (
              <div className="border-l border-gray-300 h-24 mx-4"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-2">
        {partners.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <div className="w-[90%] max-w-4xl">
          <Image src="/images/sfsot.png" alt="Skyhawks Families Save on Travel" width={900} height={300} objectFit="contain" />
        </div>
      </div>
    </section>
  );
}
