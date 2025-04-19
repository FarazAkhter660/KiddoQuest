import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="bg-white min-h-screen px-6 sm:px-1 py-2 flex justify-center items-center">
      <div className="flex flex-col md:flex-row max-w-7xl w-full gap-8 items-center">
        <div className="flex-1 text-center md:text-left">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800"
            style={{ fontFamily: "'Lobster Two', cursive" }}
          >
            Learn More About Our Work And Our Cultural Activities
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet
            est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy
            clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no
            sea diam.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-10">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
              Read More
            </button>
            <div className="flex items-center">
              <img
                src="/images/user.jpg"
                alt="Jhon Doe"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium text-gray-800">Jhon Doe</p>
                <p className="text-gray-500 text-sm">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center gap-6 justify-center mt-8 md:mt-0 relative">
          <div className="relative w-96 h-96 sm:w-[28rem] sm:h-[28rem] rounded-full bg-pink-100 shadow-md group">
            <Image
              src="/images/classes-1.jpg"
              alt="Child 1"
              layout="fill"
              className="rounded-full object-cover"
            />
            <div className="absolute inset-0 rounded-full border-[12px] border-orange-50 group-hover:border-orange-600 transition-all duration-300"></div>
          </div>

          <div className="absolute flex w-full justify-center gap-16 mt-24 sm:mt-28">
            <div
              className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-pink-100 shadow-md group"
              style={{ top: "100px" }}
            >
              <Image
                src="/images/classes-2.jpg"
                alt="Child 2"
                layout="fill"
                className="rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border-[12px] border-orange-50 group-hover:border-orange-600 transition-all duration-300"></div>
            </div>
            <div
              className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-pink-100 shadow-md group"
              style={{ top: "100px" }}
            >
              <Image
                src="/images/classes-3.jpg"
                alt="Child 3"
                layout="fill"
                className="rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border-[12px] border-orange-50 group-hover:border-orange-600 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
