import React, { useState } from 'react';
import Container from './Container';
import logo from "../assets/logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBer = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // To track the active dropdown

  // Function to handle dropdown toggle on small devices
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <section className='py-10'>
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-[20%]">
            <img src={logo} alt="Logo" />
          </div>

          {/* Navigation Menu for Desktop */}
          <div className="w-[60%] hidden md:block   cursor-pointer">
            <ul className='flex items-center gap-10 justify-center text-[16px] text-[#707070] font-DMs font-semibold'>
              <li className='relative group hover:text-[#B68C5A]'>
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
              <li className='relative group hover:text-[#B68C5A]'>
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
              <li className='relative group hover:text-[#B68C5A]'>
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
              <li className='relative group hover:text-[#B68C5A]'>
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
              <li className='relative group hover:text-[#B68C5A]'>
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
            <button className='bg-[#B68C5A] rounded-[8px] text-[18px] font-DMs px-3 py-5 text-[#FFFF] font-bold hover:bg-[#A57C4A]'>
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
            <li className='relative'>
              <button
                onClick={() => toggleDropdown(0)}
                className='flex items-center justify-between w-full text-left hover:text-[#B68C5A]'
              >
                Home
                <IoIosArrowForward className="inline-block ml-2" />
              </button>
              {/* Dropdown for Home in Mobile */}
              {activeDropdown === 0 && (
                <div className="bg-white border shadow-md mt-2">
                  <ul className="p-2">
                    <li>Home Submenu 1</li>
                    <li>Home Submenu 2</li>
                  </ul>
                </div>
              )}
            </li>
            <li className='relative'>
              <button
                onClick={() => toggleDropdown(1)}
                className='flex items-center justify-between w-full text-left hover:text-[#B68C5A]'
              >
                Services
                <IoIosArrowForward className="inline-block ml-2" />
              </button>
              {/* Dropdown for Services in Mobile */}
              {activeDropdown === 1 && (
                <div className="bg-white border shadow-md mt-2">
                  <ul className="p-2">
                    <li>Service Submenu 1</li>
                    <li>Service Submenu 2</li>
                  </ul>
                </div>
              )}
            </li>
            <li className='relative'>
              <button
                onClick={() => toggleDropdown(2)}
                className='flex items-center justify-between w-full text-left hover:text-[#B68C5A]'
              >
                Cases
                <IoIosArrowForward className="inline-block ml-2" />
              </button>
              {/* Dropdown for Cases in Mobile */}
              {activeDropdown === 2 && (
                <div className="bg-white border shadow-md mt-2">
                  <ul className="p-2">
                    <li>Case Submenu 1</li>
                    <li>Case Submenu 2</li>
                  </ul>
                </div>
              )}
            </li>
            <li className='relative'>
              <button
                onClick={() => toggleDropdown(3)}
                className='flex items-center justify-between w-full text-left hover:text-[#B68C5A]'
              >
                Blog
                <IoIosArrowForward className="inline-block ml-2" />
              </button>
              {/* Dropdown for Blog in Mobile */}
              {activeDropdown === 3 && (
                <div className="bg-white border shadow-md mt-2">
                  <ul className="p-2">
                    <li>Blog Submenu 1</li>
                    <li>Blog Submenu 2</li>
                  </ul>
                </div>
              )}
            </li>
            <li className='relative'>
              <button
                onClick={() => toggleDropdown(4)}
                className='flex items-center justify-between w-full text-left hover:text-[#B68C5A]'
              >
                Contact Us
                <IoIosArrowForward className="inline-block ml-2" />
              </button>
              {/* Dropdown for Contact Us in Mobile */}
              {activeDropdown === 4 && (
                <div className="bg-white border shadow-md mt-2">
                  <ul className="p-2">
                    <li>Contact Submenu 1</li>
                    <li>Contact Submenu 2</li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default NavBer;
