"use client";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = ({}) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 bg-white z-50 ${
        isScrolled ? "shadow-md border-b border-gray-300" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-orange-500">
          <Link href="/">Kider</Link>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem key="Home">
              <Link href="/kiddoquest" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-orange-500 transition duration-200`}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem key="About Us">
              <Link href="/kiddoquest/AboutUs" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-orange-500 transition duration-200`}
                >
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem key="Classes">
              <Link href="/kiddoquest/Classes" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-orange-500 transition duration-200`}
                >
                  Classes
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
              <NavigationMenuContent className="mt-2 w-[200px] rounded-md shadow-md bg-white">
                <ul className="grid gap-2 p-4">
                  <li>
                    <Link href="/kiddoquest/Facilities" passHref>
                      <NavigationMenuLink className="block text-sm font-medium hover:bg-gray-100 rounded p-2">
                        Facilities
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kiddoquest/Teachers" passHref>
                      <NavigationMenuLink className="block text-sm font-medium hover:bg-gray-100 rounded p-2">
                        Teachers
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kiddoquest/JoinUs" passHref>
                      <NavigationMenuLink className="block text-sm font-medium hover:bg-gray-100 rounded p-2">
                        Join Us
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kiddoquest/Appointment" passHref>
                      <NavigationMenuLink className="block text-sm font-medium hover:bg-gray-100 rounded p-2">
                        Appointment
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kiddoquest/Testimonials" passHref>
                      <NavigationMenuLink className="block text-sm font-medium hover:bg-gray-100 rounded p-2">
                        Testimonials
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kiddoquest/404Error" passHref>
                      <NavigationMenuLink className="block text-sm font-medium hover:bg-gray-100 rounded p-2">
                        404 Error
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem key="Contact">
              <Link href="/kiddoquest/ContactUs" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-orange-500 transition duration-200`}
                >
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div>
          <Link href="/join" passHref>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200">
              Join Us →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
