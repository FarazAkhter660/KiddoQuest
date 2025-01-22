import React from "react";


const StatsCard = ({
    value,
    label,
    description,
    textColor = "text-black",
}) => {
    return (
        <div className="text-center">
            <p className={`text-4xl font-bold ${textColor}`}>{value}</p>
            <p className="text-lg font-semibold text-gray-600">{label}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    );
};


const StatsSection = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-10">
                    <h3 className="text-sm font-medium text-gray-400 uppercase">
                        Our Goals
                    </h3>
                    <h2 className="text-2xl font-bold text-gray-800">
                        Ivy School By The Numbers
                    </h2>
                </div>

                {/* Stats Cards */}

                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div>
                        <img src="/images/home/Pre-1.webp"/>
                    </div>
                    <StatsCard
                        value="89%"
                        label="Of class of 2023"
                        description="Bachelor’s recipients were employed"
                        textColor="text-orange-500"
                    />
                    <StatsCard
                        value="92%"
                        label="Of class of 2023"
                        description="Bachelor’s recipients were employed"
                        textColor="text-blue-600"
                    />
                    <StatsCard
                        value="3.045"
                        label="Students"
                        description="Bachelor’s recipients were employed"
                        textColor="text-pink-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

