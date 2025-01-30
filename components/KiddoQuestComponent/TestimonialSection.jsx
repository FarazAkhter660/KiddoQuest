"use client";

import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Client Name 1",
      profession: "Web Designer",
      image: "/images/testimonial-1.jpg",
      feedback:
        "This platform has revolutionized how I work! The team is amazing, and the service is top-notch. Highly recommend!",
    },
    {
      name: "Client Name 2",
      profession: "Software Engineer",
      image: "/images/testimonial-2.jpg",
      feedback:
        "Amazing experience! The quality of service provided is unparalleled, and I couldn't be more satisfied.",
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="bg-white py-40 px-40">
      <div className="text-center mb-8 sm:mb-10">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900"
          style={{ fontFamily: "'Lobster Two', cursive" }}
        >
          Our Clients Say!
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Here's what our clients have to say about working with us.
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-orange-500 text-white w-14 h-14 rounded-full 
          shadow-md flex items-center justify-center hover:bg-orange-600 z-10 text-3xl font-bold"
        >
          ←
        </button>

        <div
          className="flex space-x-8 overflow-hidden w-[90%] transition-transform duration-700"
          style={{
            transform: `translateX(-${currentIndex * 800}px)`,
          }}
        >
          {testimonials
            .slice(currentIndex, currentIndex + 2)
            .map((testimonial, index) => (
              <div
                key={index}
                className="bg-orange-50 rounded-lg shadow-lg p-8 w-[800px] h-[350px] flex flex-col relative 
              text-center transition-transform duration-300"
              >
                <p className="text-gray-600 text-base mb-8 italic">
                  {testimonial.feedback}
                </p>
                <div className="bg-white flex justify-between items-center space-x-6 mb-6 relative px-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-pink-200"
                  />

                  <div className="flex flex-col items-start flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-teal-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.profession}
                    </p>
                  </div>

                  <div className="text-orange-500 text-6xl font-bold text-xxl">
                    &rdquo;
                  </div>
                </div>
              </div>
            ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 bg-orange-500 text-white w-14 h-14 rounded-full shadow-md 
                      flex items-center justify-center hover:bg-orange-600 z-10 text-3xl font-bold"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
