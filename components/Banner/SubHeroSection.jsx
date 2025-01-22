import React from 'react'
import Image from "next/image";
import { Newspaper, PaperclipIcon } from 'lucide-react';

const cardData = [
    {
        id: 1,
        icon: <Newspaper size={50} strokeWidth={0.5}/>, // Replace with actual icon path
        title: "PROGRAMS",
        description: "Attorney will need to arrange to hire an appearance attorney",
        color:"bg-yellow-600"
    },
    {
        id: 2,
        icon: <Newspaper size={50} strokeWidth={0.5}/>, // Replace with actual icon path
        title: "PROGRAMS",
        description: "Attorney will need to arrange to hire an appearance attorney",
        color:"bg-blue-600"
    },
    {
        id: 3,
        icon:<Newspaper size={50} strokeWidth={0.5}/>, // Replace with actual icon path
        title: "PROGRAMS",
        description: "Attorney will need to arrange to hire an appearance attorney",
        color:"bg-pink-600"
    },
    // Add more cards if needed
];


const Card = ({ icon, title, description,color }) => {
    return (
        <div className={`${color} text-center px-12 py-12 w-full`}>
            {/* Icon */}
            <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-100 mt-4 uppercase">{title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-100 mt-2">{description}</p>
        </div>
    );
};

const SubHeroSection = () => {
    return (
        <div className='container bg-white mx-auto'>
            <div className="flex justify-center">
                {cardData.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </div>
    )
}

export default SubHeroSection