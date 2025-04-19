import Image from "next/image";

const TeacherSection = () => {
  return (
    <div className="bg-white py-20 px-40">
      <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row w-full mx-4 sm:mx-6">
        <div className="flex-1">
          <Image
            src="/images/call-to-action.jpg"
            alt="Teacher with students"
            width={600}
            height={400}
            className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none object-cover w-full h-full"
          />
        </div>

        <div
          className="flex-1 bg-orange-50 p-4 sm:p-6 rounded-b-lg md:rounded-r-lg md:rounded-bl-none 
          text-center w-full md:w-1/2 flex flex-col justify-center"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900 mb-4"
            style={{ fontFamily: "'Lobster Two', cursive" }}
          >
            Become A Teacher
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>
          <button
            className="bg-orange-500 text-white font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-orange-600 
            flex justify-center items-center gap-2 transition-all duration-300 ease-in-out"
          >
            <span>Get Started Now</span> <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherSection;
