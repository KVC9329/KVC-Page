"use client"
import { useState } from "react";

const Carousel = () => {
  const slides = [
    {
      "img" : "/carousal1.jpeg",
      "title" : "Placement",
      "desc" : "We provide great placement opportunities in leading MNCs. ",
    },
    {
      "img" : "/carousal2.jpeg",
      "title" : "Training",
      "desc" : " We provide training to become a good HR.",
    },
    {
      "img" : "/carousal3.jpg",
      "title" : "Staffing",
      "desc" : "We provide Staffing opportunities as well.",
    },
    {
      "img" : "/carousal4.jpg",
      "title" : "Consulting",
      "desc" : "We provide great placement opportunities in leading MNCs.",
    },
    // "/carousal1.jpeg",
    // "/carousal2.jpeg",
    // "/carousal3.jpg",
    // "/carousal4.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-96 rounded-md w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-full w-full flex-shrink-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.img})`,
            }}
          >
            <h1 className="font-bold text-center py-24 text-white">{slide.title}</h1>
            <p className="text-white text-center">{slide.desc}</p>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
        onClick={prevSlide}
      >
        &lt;
      </button>

      {/* Next Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
        onClick={nextSlide}
      >
        &gt;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
