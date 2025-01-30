"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function PopularTeachers() {
  const teachers = [
    {
      name: "John Doe",
      designation: "Math Teacher",
      imgSrc: "/images/team-1.jpg",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Jane Smith",
      designation: "Science Teacher",
      imgSrc: "/images/team-2.jpg",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Alice Johnson",
      designation: "English Teacher",
      imgSrc: "/images/team-3.jpg",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <section className="py-16 bg-white text-center px-40">
      <div className="container mx-auto px-8">
        <h2
          className="text-4xl font-bold text-teal-900 mb-4"
          style={{ fontFamily: "'Lobster Two', cursive" }}
        >
          Popular Teachers
        </h2>
        <p className="text-gray-500 mb-12">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
          dolor duo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="relative text-center bg-white rounded-lg p-4 transition group"
            >
              <div className="relative w-72 h-132 mx-auto rounded-[70%] bg-pink-100 overflow-hidden">
                <img
                  src={teacher.imgSrc}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute bottom-10 right-[-20%] transform translate-x-[-50%] w-48 h-48 bg-white rounded-full flex flex-col 
                justify-center items-center  border-[12px] border-orange-50 group-hover:border-orange-600 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {teacher.name}
                </h3>
                <p className="text-gray-500 text-sm">{teacher.designation}</p>
                <div className="flex justify-center gap-2 mt-2">
                  <a
                    href={teacher.socialLinks.facebook}
                    className="text-gray-500 hover:text-blue-600 bg-orange-500 p-2 rounded-full transition-all duration-300"
                  >
                    <FaFacebookF className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href={teacher.socialLinks.twitter}
                    className="text-gray-500 hover:text-blue-400 bg-orange-500 p-2 rounded-full transition-all duration-300"
                  >
                    <FaTwitter className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href={teacher.socialLinks.instagram}
                    className="text-gray-500 hover:text-pink-600 bg-orange-500 p-2 rounded-full transition-all duration-300"
                  >
                    <FaInstagram className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
