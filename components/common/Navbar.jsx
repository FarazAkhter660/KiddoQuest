// import React from 'react';
// import Link from 'next/link';
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { ChevronDown } from 'lucide-react';

// const Navbar = () => {
//   return (
//     <nav className="bg-black/70 text-white border-b shadow-sm">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <img
//                 src="/api/placeholder/40/40"
//                 alt="Ivy School Logo"
//                 className="h-10 w-10"
//               />
//               <span className="ml-2 text-xl font-bold text-gray-800">Ivy School</span>
//             </Link>
//           </div>

//           {/* Navigation Items */}
//           <div className="hidden md:block">
//             <NavigationMenu>
//               <NavigationMenuList className="flex space-x-2">
//                 <NavigationMenuItem>
//                   <Link href="/" className="px-3 py-2 text-white hover:text-gray-900">
//                     Home
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
//                     Pages
//                   </NavigationMenuTrigger>
//                   <NavigationMenuContent>
//                     <div className="w-48 p-2">
//                       <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 rounded">
//                         About Us
//                       </Link>
//                       <Link href="/team" className="block px-4 py-2 hover:bg-gray-100 rounded">
//                         Our Team
//                       </Link>
//                       <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 rounded">
//                         Contact
//                       </Link>
//                     </div>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
//                     Courses
//                   </NavigationMenuTrigger>
//                   <NavigationMenuContent>
//                     <div className="w-48 p-2">
//                       <Link href="/courses/music" className="block px-4 py-2 text-white hover:bg-gray-100 rounded">
//                         Music Education
//                       </Link>
//                       <Link href="/courses/marketing" className="block px-4 py-2 hover:bg-gray-100 rounded">
//                         Marketing
//                       </Link>
//                       <Link href="/courses/business" className="block px-4 py-2 hover:bg-gray-100 rounded">
//                         Business Administration
//                       </Link>
//                     </div>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link href="/events" className="px-3 py-2 text-gray-700 hover:text-gray-900">
//                     Events
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link href="/blog" className="px-3 py-2 text-gray-700 hover:text-gray-900">
//                     Blog
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-gray-900">
//                     Contact us
//                   </Link>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div>

//           {/* Apply Now Button */}
//           <div>
//             <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full">
//               APPLY NOW
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="h-10 w-10 p-0">
//                   <span className="sr-only">Open menu</span>
//                   <ChevronDown className="h-6 w-6" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48">
//                 <DropdownMenuItem>
//                   <Link href="/" className="w-full">Home</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link href="/pages" className="w-full">Pages</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link href="/courses" className="w-full">Courses</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link href="/events" className="w-full">Events</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link href="/blog" className="w-full">Blog</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link href="/contact" className="w-full">Contact us</Link>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="bg-black/70 text-white py-4 px-6 fixed top-0  w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <img src="/images/LOGO.png" className="w-20" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link href="/courses" className="hover:text-yellow-400">
            Courses
          </Link>
          <Link href="/events" className="hover:text-yellow-400">
            Events
          </Link>
          <Link href="/blog" className="hover:text-yellow-400">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </nav>

        {/* Call to Action */}
        <Button className="bg-yellow-500 text-black font-semibold hover:bg-yellow-600">
          Apply Now
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
