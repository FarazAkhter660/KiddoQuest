import Image from "next/image";
import { Play, SquareCheckBigIcon } from "lucide-react";

import { Calendar, Clock, MapPin } from "lucide-react";

export const eventData = {
  title: "Open Day 2023",
  description:
    "For 23 years of existence, Ed Foundation has implemented more than 1,700 activities, the total value about 10 million euros. We are home to 1,500 students (aged 12 to 16) and 100 expert faculty and staff, representing over 40 different nations.",
  date: "Saturday, 26 August 2023",
  time: "9am – 4pm",
  location: "Marmora Road, Glasgow, D04 89GR",
  image: "/images/home/boy.jpg", // Replace with actual image path
  videoLink: "#", // Replace with actual video link
  whyChooseUs: [
    "Curriculum & instruction start",
    "Student support services",
    "Human resources ED center",
    "Early childhood center",
    "Auditorium with stage",
    "Ed middle school",
    "Three athletic fields",
  ],
};

const EventImage = ({ image, videoLink }) => {
  return (
    <div className="relative w-full border md:w-[40%] mr-6">
      <Image src={image} alt="Event Image" layout="fill" className="" />

      <div className="absolute bottom-0 h-1/2 bg-black/70 w-full flex flex-col justify-center items-center">
        <a
          href={videoLink}
          className="absolute -top-10 bg-yellow-500 p-8 flex items-center justify-center rounded-full"
        >
          <Play size={20} className="text-white " />
        </a>
        <p className="text-center mt-2 text-base text-white font-semibold uppercase">
          TAKE A TOUR IN EDUMA SCHOOL
        </p>
        <p className="text-sm text-gray-300">Making your achivement</p>
      </div>
    </div>
  );
};

const EventDetails = ({ title, description, date, time, location }) => {
  return (
    <div className="w-full md:w-2/3">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <p className="mt-4 text-lg text-gray-700">{description}</p>

      <div className="mt-4 space-y-2 text-gray-700">
        <p className="flex items-center gap-2">
          <Calendar className="text-yellow-500" /> {date}
        </p>
        <p className="flex items-center gap-2">
          <Clock className="text-yellow-500" /> {time}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="text-yellow-500" /> {location}
        </p>
      </div>
    </div>
  );
};

const WhyChooseUs = ({ items }) => {
  return (
    <div className="w-full md:w-1/3">
      <h3 className="text-3xl font-bold text-gray-900">Why choose us</h3>
      <ul className="mt-4 space-y-4 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-yellow-500">
              <SquareCheckBigIcon size={20} />
            </span>{" "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// import EventImage from "./EventImage";
// import EventDetails from "./EventDetails";
// import WhyChooseUs from "./WhyChooseUs";
// import { eventData } from "@/data/events";

const EventSection = () => {
  return (
    <section className="container bg-white mx-auto z-30 px-4 py-20">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <EventImage image={eventData.image} videoLink={eventData.videoLink} />
        <EventDetails
          title={eventData.title}
          description={eventData.description}
          date={eventData.date}
          time={eventData.time}
          location={eventData.location}
        />
        <WhyChooseUs items={eventData.whyChooseUs} />
      </div>
      {/* <div className="mt-6">
        
      </div> */}
    </section>
  );
};

export default EventSection;
