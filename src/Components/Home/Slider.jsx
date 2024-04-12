import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const slides = [
    {
      title: 'Headline 1',
      description: 'Compelling description for the first slide.',
      image: 'https://picsum.photos/id/100/1920/1080', // Replace with your image
    },
    {
      title: 'Headline 2',
      description: 'Another captivating description for the second slide.',
      image: 'https://picsum.photos/id/1000/1920/1080', // Replace with your image
    },
    // Add more slides here
  ];

  const settings = {
    dots: true, // Enable navigation dots
    arrows: true, // Enable navigation arrows
    infinite: true, // Enable infinite loop
    autoplay: true, // Enable automatic slideshow
    autoplaySpeed: 5000, // Set slideshow interval to 5 seconds
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Slide one slide at a time
    focusOnSelect: true, // Focus on slide upon selection
    beforeChange: (current, next) => setCurrentIndex(next), // Update state for focus pause
  };

  useEffect(() => {
    const handleFocus = () => {
      if (carouselRef.current) {
        carouselRef.current.slickPause();
      }
    };

    const handleBlur = () => {
      if (carouselRef.current) {
        carouselRef.current.slickPlay();
      }
    };

    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, [carouselRef]);

  const handleSlideChange = (current) => {
    setCurrentIndex(current);
    setTimeout(() => carouselRef.current.slickPlay(), 10000); // Resume after 10 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary to-secondary overflow-hidden">
      <Slider {...settings} ref={carouselRef} onBeforeChange={handleSlideChange}>
        {slides.map((slide, index) => (
          <div key={index} className="flex items-center justify-center h-screen text-white">
            <div className="max-w-2xl text-center">
              <h1 className="text-5xl font-bold mb-8">{slide.title}</h1>
              <p className="text-xl leading-relaxed">{slide.description}</p>
              <button className="btn btn-primary mt-8">Get Started</button>
            </div>
            <div className="absolute inset-0 z-10 opacity-20 bg-gradient-to-r from-primary to-secondary blur-md" />
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 object-cover h-full w-full z-0"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;