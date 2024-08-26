'use client';
import { useEffect, useState } from 'react';

type Testimonial = {
  quote: string;
  author: string;
};

const testimonials = [
  [
    {
      quote: "My son did two Skyhawks flag football camps this summer and he loved them both! I just wish there would have been more camps!",
      author: "Casey G, Sunny Isles Beach FL",
    },
    {
      quote: "My son LOVED his week-long basketball camp! He learned so much and had a blast. We plan to sign him up again in the summer. Highly recommend!",
      author: "Nicole P, El Dorado Hills CA",
    },
    {
      quote: "This was our first experience with Skyhawks and we were very impressed. Our eight-year-old son participated in a four-day summer lacrosse camp in Edina.",
      author: "Kristin H, Chaska MN",
    },
  ],
  [
    {
      quote: "My son had a GREAT experience at a Skyhawks basketball camp! He was excited and invested in his time there and got a lot of playing/practice time!",
      author: "Daphnie H, Portland OR",
    },
    {
      quote: "I was very impressed! My boys tire easily of the same activity and they were never bored with their program!",
      author: "Elizabeth H, Seattle WA",
    },
    {
      quote: "The coaches have been fantastic this week at basketball camp. Very organized and doing a great job including everyone and working with each kid.",
      author: "Barbara V, Shawnee Hills OH",
    },
  ],
  [
    {
      quote: "The coaches were incredible! They helped my son gain confidence in his abilities and provided a supportive and fun environment.",
      author: "John D, New York NY",
    },
    {
      quote: "Skyhawks camps are the best! My daughter loved every moment and can't wait for the next one. The staff is top-notch.",
      author: "Emily S, Austin TX",
    },
    {
      quote: "Skyhawks provided such a positive experience for our kids. The camps are well-run, and the coaches are so dedicated!",
      author: "Megan L, Chicago IL",
    },
  ],
  [
    {
      quote: "The summer camp was awesome. My kids made friends, learned new skills, and really enjoyed every day of it. We are signing up again next year!",
      author: "Michael K, San Francisco CA",
    },
    {
      quote: "I was blown away by the organization and the coaches. It was a safe and fun environment for my child to thrive.",
      author: "Sarah W, Dallas TX",
    },
    {
      quote: "My son had an incredible experience. Skyhawks really knows how to keep the kids engaged while teaching them valuable life skills.",
      author: "Rachel M, Boston MA",
    },
  ],
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (isMobile ? testimonials.flat().length : testimonials.length));
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const renderTestimonials = () => {
    if (isMobile) {
      const allTestimonials = testimonials.flat();
      return (
        <div className="relative h-64">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              } flex justify-center items-center`}
            >
              <div
                className="flex flex-col justify-between bg-gray-700 p-6 rounded-md w-full mx-4 h-full"
                style={{ minHeight: '250px' }}
              >
                <p className="italic mb-4">{testimonial.quote}</p>
                <div className="flex items-center justify-center font-bold text-orange-500 text-sm">
                  - {testimonial.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="relative h-64">
          {testimonials.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              } flex justify-around items-center`}
            >
              {slide.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between bg-gray-700 p-6 rounded-md w-1/3 mx-4 h-full"
                  style={{ minHeight: '250px' }}
                >
                  <p className="italic mb-4">{testimonial.quote}</p>
                  <div className="flex items-center justify-center font-bold text-orange-500 text-sm">
                    - {testimonial.author}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center bg-gray-800 text-white py-12">
      <div className="w-full max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold mb-8">TESTIMONIALS</h2>
        {renderTestimonials()}
        <div className="mt-8 flex justify-center">
          {(isMobile ? testimonials.flat() : testimonials).map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full mx-2 cursor-pointer ${
                index === currentSlide ? 'bg-white' : 'bg-gray-500'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
