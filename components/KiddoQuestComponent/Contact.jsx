"use client";

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const ContactSection = () => {
  const [position] = useState([40.7128, -74.006]);

  return (
    <section className="container mx-auto px-6 py-12">
      <h2
        className="text-3xl font-bold text-center"
        style={{ fontFamily: "'Lobster Two', cursive" }}
      >
        Get In Touch
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
        lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
        dolor duo.
      </p>

      <div className="flex justify-evenly space-x-10 mt-6 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-orange-50 p-4 rounded-full mb-2">
            <FaMapMarkerAlt className="text-orange-600 text-3xl" />
          </div>
          <p className="font-semibold">123 Street, New York, USA</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-orange-50 p-4 rounded-full mb-2">
            <FaEnvelope className="text-orange-600 text-3xl" />
          </div>
          <p className="font-semibold">info@example.com</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-orange-50 p-4 rounded-full mb-2">
            <FaPhoneAlt className="text-orange-600 text-3xl" />
          </div>
          <p className="font-semibold">+012 345 6789</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-0 mt-12">
        <div className="bg-red-50 p-6 rounded-lg">
          <p className="text-gray-700 text-sm mb-4">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.
            <span className="text-red-500 font-semibold">Download Now.</span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-2 rounded w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border p-2 rounded w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border p-2 rounded w-full mt-4"
          />
          <textarea
            placeholder="Leave a message here"
            className="border p-2 rounded w-full mt-4 h-32"
          />
          <button className="w-full mt-4 bg-red-500 text-white py-2 rounded">
            Send Message
          </button>
        </div>

        <MapContainer
          center={position}
          zoom={10}
          className="h-full w-full rounded-lg"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>New York, USA</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default ContactSection;
