// import Container from './Container'
// import React from 'react'
// import logo from "../assets/logo.png"
// import { IoIosArrowForward } from "react-icons/io";


// const NavBer = () => {
//   return (
//     <section className='py-10'>
//      <Container>
//      <div className="flex items-center ">
//         <div className="w-20%">
//           <img src={logo} alt="" />
//           </div>

//           <div className="w-[60%]">
//             <ul className='flex items-center gap-10 justify-center text-[16px] text-[#707070] font-DMs font-semibold'>
//               <li className='flex items-center'>Home <IoIosArrowForward /></li>
//               <li className='flex items-center'>Services <IoIosArrowForward /> </li>
//               <li className='flex items-center'>Cases <IoIosArrowForward /></li>
//               <li className='flex items-center'>Blog <IoIosArrowForward /></li>
//               <li className='flex items-center'>Contact Us <IoIosArrowForward /></li>
//             </ul>
//           </div>

//           <div className="w-[20%]">
//             <button className='bg-[#B68C5A] text-[18px] font-DMs px-3 py-5 text-[#FFFF] font-bold'>Free Consultation</button>
//           </div>


//         </div>

//      </Container>
//     </section>
//   )
// }

// export default NavBer

import React, { useState } from 'react';
import Container from './Container';
import logo from "../assets/logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBer = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className='py-10'>
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-[20%]">
            <img src={logo} alt="Logo" />
          </div>

          {/* Navigation Menu for Desktop */}
          <div className="w-[60%] hidden md:block">
            <ul className='flex items-center gap-10 justify-center text-[16px] text-[#707070] font-DMs font-semibold'>
              <li className='relative group'>
                Home
                <IoIosArrowForward className="inline-block ml-2" />
                {/* Dropdown for Home */}
                <div className="absolute left-0 hidden group-hover:block bg-white border shadow-md mt-2">
                  <ul className="p-2">
                    <li>Home Submenu 1</li>
                    <li>Home Submenu 2</li>
                  </ul>
                </div>
              </li>
              <li className='relative group'>
                Services
                <IoIosArrowForward className="inline-block ml-2" />
                {/* Dropdown for Services */}
                <div className="absolute left-0 hidden group-hover:block bg-white border shadow-md mt-2">
                  <ul className="p-2">
                    <li>Service Submenu 1</li>
                    <li>Service Submenu 2</li>
                  </ul>
                </div>
              </li>
              <li className='relative group'>
                Cases
                <IoIosArrowForward className="inline-block ml-2" />
                {/* Dropdown for Cases */}
                <div className="absolute left-0 hidden group-hover:block bg-white border shadow-md mt-2">
                  <ul className="p-2">
                    <li>Case Submenu 1</li>
                    <li>Case Submenu 2</li>
                  </ul>
                </div>
              </li>
              <li className='relative group'>
                Blog
                <IoIosArrowForward className="inline-block ml-2" />
                {/* Dropdown for Blog */}
                <div className="absolute left-0 hidden group-hover:block bg-white border shadow-md mt-2">
                  <ul className="p-2">
                    <li>Blog Submenu 1</li>
                    <li>Blog Submenu 2</li>
                  </ul>
                </div>
              </li>
              <li className='relative group'>
                Contact Us
                <IoIosArrowForward className="inline-block ml-2" />
                {/* Dropdown for Contact Us */}
                <div className="absolute left-0 hidden group-hover:block bg-white border shadow-md mt-2">
                  <ul className="p-2">
                    <li>Contact Submenu 1</li>
                    <li>Contact Submenu 2</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Button for Free Consultation */}
          <div className="w-[20%] hidden md:block">
            <button className='bg-[#B68C5A] rounded-[8px] text-[18px] font-DMs px-3 py-5 text-[#FFFF] font-bold'>
              Free Consultation
            </button>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <FaTimes className="text-[24px]" />
              ) : (
                <FaBars className="text-[24px]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <ul className='flex flex-col items-center gap-5'>
            <li className='relative group'>
              Home
              <IoIosArrowForward className="inline-block ml-2" />
              {/* Dropdown for Home in Mobile */}
              <div className="absolute left-0 hidden group-hover:block bg-white border shadow-md mt-2">
                <ul className="p-2">
                  <li>Home Submenu 1</li>
                  <li>Home Submenu 2</li>
                </ul>
              </div>
            </li>
            <li className='relative group'>
              Services
              <IoIosArrowForward className="inline-block ml-2" />
              {/* Dropdown for Services in Mobile */}
              <div className="absolute left-0 hidden group-hover:block bg-white border shadow-md mt-2">
                <ul className="p-2">
                  <li>Service Submenu 1</li>
                  <li>Service Submenu 2</li>
                </ul>
              </div>
            </li>
            <li className='relative group'>
              Cases
              <IoIosArrowForward className="inline-block ml-2" />
              {/* Dropdown for Cases in Mobile */}
              <div className="absolute left-0 hidden group-hover:block bg-white border shadow-md mt-2">
                <ul className="p-2">
                  <li>Case Submenu 1</li>
                  <li>Case Submenu 2</li>
                </ul>
              </div>
            </li>
            <li className='relative group'>
              Blog
              <IoIosArrowForward className="inline-block ml-2" />
              {/* Dropdown for Blog in Mobile */}
              <div className="absolute left-0 hidden group-hover:block bg-white border shadow-md mt-2">
                <ul className="p-2">
                  <li>Blog Submenu 1</li>
                  <li>Blog Submenu 2</li>
                </ul>
              </div>
            </li>
            <li className='relative group'>
              Contact Us
              <IoIosArrowForward className="inline-block ml-2" />
              {/* Dropdown for Contact Us in Mobile */}
              <div className="absolute left-0 hidden group-hover:block bg-white border shadow-md mt-2">
                <ul className="p-2">
                  <li>Contact Submenu 1</li>
                  <li>Contact Submenu 2</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default NavBer;

