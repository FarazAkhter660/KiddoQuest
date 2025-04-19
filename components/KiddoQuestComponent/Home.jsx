"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: "/images/carousel-1.jpg", alt: "Carousel Image 1" },
  { src: "/images/carousel-2.jpg", alt: "Carousel Image 2" },
];

const FullScreenCarousel = () => {
  return (
    <Carousel className="relative w-full h-[80vh] md:h-[70vh] sm:h-[60vh]">
      <div
        className="absolute top-0 left-0 w-full h-[10px] bg-repeat-x z-10"
        style={{
          backgroundImage: "url('/images/bg-header-top.png')",
          backgroundPosition: "center top",
          backgroundSize: "auto 100%",
        }}
      ></div>

      <CarouselContent className="w-full h-full absolute">
        {images.map((image, index) => (
          <CarouselItem key={index} className="w-full h-full relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div
        className="absolute bottom-[0px] left-0 w-full h-[10px] bg-repeat-x z-10"
        style={{
          backgroundImage: "url('/images/bg-header-bottom.png')",
          backgroundPosition: "center bottom-0",
          backgroundSize: "auto 100%",
        }}
      ></div>

      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 z-10" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 z-10" />
    </Carousel>
  );
};

export default FullScreenCarousel;
