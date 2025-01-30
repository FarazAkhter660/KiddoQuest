import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-black/30 h-screen flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div className="fixed inset-0 -z-20">
        <Image
          src="/images/home/Banner1.jpg"
          alt="School Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      </div>

      {/* Hero Content */}
      <div className="absolute bg-black/30 w-full h-full flex justify-center items-center z-0">
        <div className=" max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold">
            Better <span className="text-yellow-400">education</span> for <br />{" "}
            an Amazing world.
          </h1>
          <Button
            variant="outline"
            className="mt-10 uppercase border bg-transparent px-20 rounded-full py-6 text-white font-semibold
           hover:bg-orange-600 hover:border-orange-600 transition-all duration-500 hover:text-white"
          >
            Visit Campus
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
