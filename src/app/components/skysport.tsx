"use client";
import { useState } from 'react';

const SkySports = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "SKYHAWKS SPORTS ACADEMY",
      description: "Skyhawks is the country's leader in providing a safe, fun, and skill-based sports experience for kids between the ages of 4 and 14.",
      videoId: "X9v9PpqBUXU",
      color: "text-blue-600"
    },
    {
      title: "SUPERTOTS SPORTS ACADEMY",
      description: "SuperTots offers classes and enrichment programs for children age 18 months to 5 years.",
      videoId: "CBtk4dgARcc",
      color: "text-orange-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mb-10">
      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${index === currentSlide ? 'block' : 'hidden'}`}
          >
            <h2 className={`text-2xl md:text-4xl font-bold mb-4 text-center ${slide.color}`}>{slide.title}</h2>
            <p className="text-sm md:text-lg text-gray-600 text-center mb-8">
              {slide.description}
            </p>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${slide.videoId}?rel=0&controls=1&autoplay=0&mute=1&start=0`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        ))}
        <button 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SkySports;