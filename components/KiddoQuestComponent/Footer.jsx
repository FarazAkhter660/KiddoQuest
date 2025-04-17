import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#103741] text-white py-12 px-20">
      <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "'Lobster Two', cursive" }}
          >
            Get In Touch
          </h3>
          <p className="mb-2 text-gray-500">
            <FaMapMarkerAlt className="inline mr-2 text-gray-500" /> 123 Street,
            New York, USA
          </p>
          <p className="mb-2 text-gray-500">
            <FaPhoneAlt className="inline mr-2 text-gray-500" /> +012 345 67890
          </p>
          <p className="mb-4 text-gray-500">
            <FaEnvelope className="inline mr-2 text-gray-500" />{" "}
            info@example.com
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#103741] text-white hover:bg-orange-500 hover:text-gray-600 border border-white hover:border-orange-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#103741] text-white hover:bg-orange-500 hover:text-gray-600 border border-white hover:border-orange-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#103741] text-white hover:bg-orange-500 hover:text-gray-600 border border-white hover:border-orange-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#103741] text-white hover:bg-orange-500 hover:text-gray-600 border border-white hover:border-orange-500 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "'Lobster Two', cursive" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="relative pl-4 group hover:underline hover:text-orange-500 transition"
              >
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-orange-500 text-lg transition group-hover:scale-110">
                  &gt;
                </span>
                <span className="text-gray-500 group-hover:text-orange-500 group-hover:scale-110 transition">
                  About Us
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative pl-4 group hover:underline hover:text-orange-500 transition"
              >
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-orange-500 text-lg transition group-hover:scale-110">
                  &gt;
                </span>
                <span className="text-gray-500 group-hover:text-orange-500 group-hover:scale-110 transition">
                  Contact Us
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative pl-4 group hover:underline hover:text-orange-500 transition"
              >
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-orange-500 text-lg transition group-hover:scale-110">
                  &gt;
                </span>
                <span className="text-gray-500 group-hover:text-orange-500 group-hover:scale-110 transition">
                  Our Services
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative pl-4 group hover:underline hover:text-orange-500 transition"
              >
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-orange-500 text-lg transition group-hover:scale-110">
                  &gt;
                </span>
                <span className="text-gray-500 group-hover:text-orange-500 group-hover:scale-110 transition">
                  Privacy Policy
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative pl-4 group hover:underline hover:text-orange-500 transition"
              >
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-orange-500 text-lg transition group-hover:scale-110">
                  &gt;
                </span>
                <span className="text-gray-500 group-hover:text-orange-500 group-hover:scale-110 transition">
                  Terms & Conditions
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "'Lobster Two', cursive" }}
          >
            Photo Gallery
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <img
                key={i}
                src={`/images/classes-1.jpg`}
                alt={`Gallery ${i + 1}`}
                className="rounded-lg border-4 border-gray-300"
              />
            ))}
          </div>
        </div>

        <div>
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "'Lobster Two', cursive" }}
          >
            Newsletter
          </h3>
          <p className="mb-4">
            Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          <div className="flex border-2 rounded-r-lg">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-l-lg px-4 py-2 bg-[#103741] text-gray-700 focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 rounded-r-lg hover:bg-orange-600 transition">
              SignUp
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-gray-600 mt-8 pt-4 text-center text-gray-300">
        <p>
          <a
            href="#"
            className="text-white group hover:underline hover:text-orange-500 transition"
          >
            © Your Site Name,
          </a>{" "}
          <span className="text-gray-400">
            All Rights Reserved. Designed By
          </span>{" "}
          <a
            href="https://htmlcodex.com"
            className="text-white group hover:underline hover:text-orange-500 transition"
          >
            Faraz Akhter
          </a>
        </p>
        <div>
          <a
            href="#"
            className="text-white hover:underline mx-2 group hover:text-orange-500 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:underline mx-2 group hover:text-orange-500 transition"
          >
            Cookies
          </a>
          <a
            href="#"
            className="text-white hover:underline mx-2 group hover:text-orange-500 transition"
          >
            Help
          </a>
          <a
            href="#"
            className="text-white hover:underline mx-2 group hover:text-orange-500 transition"
          >
            FAQs
          </a>
        </div>
      </div>
    </footer>
  );
}
