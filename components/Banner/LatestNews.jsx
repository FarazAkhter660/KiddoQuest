// 'use client';

// import React, { useState } from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

// const newsData = [
//     {
//         image: '/images/news1.jpg',
//         date: 'January 27, 2023',
//         title: 'How To Help Somebody Who Is Depressed',
//     },
//     {
//         image: '/images/news2.jpg',
//         date: 'February 2, 2023',
//         title: 'Your body language may shape who you are | Amy Cuddy',
//     },
//     {
//         image: '/images/news3.jpg',
//         date: 'February 2, 2023',
//         title: 'Dental Implant – The modernest dental care service',
//     },
// ];


// const Card = ({ image, date, title }) => {
//     return (
//         <div className="bg-white shadow-md rounded-md overflow-hidden transition-transform transform ">
//             <img src={image} alt={title} className="w-full h-48 object-cover" />
//             <div className="p-4">
//                 <p className="text-yellow-500 font-semibold text-sm mb-2">{date}</p>
//                 <h3 className="text-lg font-bold text-gray-800">{title}</h3>
//             </div>
//         </div>
//     );
// };

// const Carousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex > 0 ? prevIndex - 1 : newsData.length - 1
//         );
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex < newsData.length - 1 ? prevIndex + 1 : 0
//         );
//     };

//     return (
//         <div className="relative w-full overflow-hidden bg-gray-100 py-6">
//             <h2 className="text-2xl font-bold text-gray-800 px-4">Latest News</h2>
//             <div className="flex justify-between items-center mt-2 px-4">
//                 <p className="text-yellow-500 cursor-pointer">See all news</p>
//             </div>
//             <div className="relative mt-6">
//                 {/* Cards */}
//                 <div className="flex space-x-4 transition-transform duration-500 ease-in-out"
//                     style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                     {newsData.map((item, index) => (
//                         <div key={index} className="flex-shrink-0 w-1/3 px-4">
//                             <Card {...item} />
//                         </div>
//                     ))}
//                 </div>
//                 {/* Navigation Buttons */}
//                 <button
//                     className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
//                     onClick={handlePrev}
//                 >
//                     <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
//                 </button>
//                 <button
//                     className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
//                     onClick={handleNext}
//                 >
//                     <ChevronRightIcon className="h-6 w-6 text-gray-800" />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Carousel;



'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const newsData = [
    {
        image: '/images/home/boy.jpg',
        date: 'January 27, 2023',
        title: 'How To Help Somebody Who Is Depressed',
    },
    {
        image: '/images/home/boy.jpg',
        date: 'February 2, 2023',
        title: 'Your body language may shape who you are | Amy Cuddy',
    },
    {
        image: '/images/home/boy.jpg',
        date: 'February 2, 2023',
        title: 'Dental Implant – The modernest dental care service',
    },
    {
        image: '/images/home/boy.jpg',
        date: 'February 5, 2023',
        title: 'Top 10 tips to live a healthy and happy life',
    },
    {
        image: '/images/home/boy.jpg',
        date: 'February 5, 2023',
        title: 'Top 10 tips to live a healthy and happy life',
    },
    {
        image: '/images/home/boy.jpg',
        date: 'February 5, 2023',
        title: 'Top 10 tips to live a healthy and happy life',
    },
    {
        image: '/images/home/boy.jpg',
        date: 'February 5, 2023',
        title: 'Top 10 tips to live a healthy and happy life',
    },
];


const NewsCard = ({item}) => {
    return (
        <div className="border p-6 min-h-[24rem] overflow-hidden bg-white max-w-full">
            {/* Image */}
            <img
                src="/images/home/boy.jpg" // Replace with your image path
                alt="News Thumbnail"
                className="w-full h-72 object-cover"
            />

            {/* Content */}
            <div className="p-4">
                {/* Date */}
                <p className="text-sm text-orange-500 font-semibold mb-2">
                    {item?.date}
                </p>

                {/* Title */}
                <h3 className="text-lg font-medium text-gray-800">
                    {item?.title}
                </h3>
            </div>
        </div>
    );
};



const NewsCarousel = () => {
    return (
        <div className="bg-gray-100 min-h-[30rem] relative py-6 bg-[url('/images/home/2-1.jpg')] bg-cover bg-center">
            <div className='bg-black/70 absolute top-0 -z-0 w-full h-full'></div>

            {/* <div className='absolute w-full mx-auto container h-[100%] '> */}
            <div className='container  mx-auto'>
                <Carousel className="w-full mx-auto ">
                    <div className='z-50 relative mx-auto my-6 '>
                        <div className="flex  items-center mt-2 px-4">
                            <h2 className="text-2xl text-white font-bold px-4">Latest News</h2>
                            <p className="text-yellow-500 cursor-pointer">See all news</p>
                        </div>
                        <div>
                            <CarouselPrevious className="right-10" />
                            <CarouselNext className="right-0"/>
                        </div>
                    </div>
                    <CarouselContent className="-ml-1 mx-auto container h-[90%] -bottom-24 ">

                    {newsData?.map((item, index) => (
                            <CarouselItem key={index} className="pl-9 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <NewsCard item={item} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

        </div>

        // </div >
    );
};

export default NewsCarousel;

