'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex flex-wrap justify-between items-center p-4 md:p-8 bg-[url('/images/header-bg.png')] bg-repeat h-auto md:h-[150px]">
      <div className="flex items-center">
        <div className="w-[150px] md:w-[200px] h-auto mr-4 md:mr-8">
          <Link href="/">
            <Image src="/images/logo.png" alt="Skyhawks Logo" width={200} height={75} />
          </Link>
        </div>
      </div>

      <button onClick={toggleMobileMenu} className="md:hidden text-black">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 gap-4 md:gap-8 items-start md:items-center md:justify-start`}>
        <Link href="https://register.skyhawks.com/" className="bg-blue-600 text-white px-4 py-2 rounded hover:underline transition duration-300 w-full md:w-auto text-center">
          FIND YOUR PROGRAM
        </Link>
        <div className="relative w-full md:w-auto">
          <button
            onClick={toggleDropdown}
            className="flex items-center text-blue-600 hover:underline transition duration-300 focus:outline-none w-full md:w-auto"
          >
            SELECT A SPORT
            <svg
              className="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 7l5 5 5-5H5z" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute w-full md:w-40 bg-white shadow-lg rounded-md mt-2 z-10">
              <Link href="/kidsports/Baseball/" className="dropdown-link w-dropdown-link block px-4 py-2 text-gray-700 hover:bg-gray-200">Baseball</Link>
              <Link href="#" className="dropdown-link w-dropdown-link block px-4 py-2 text-gray-700 hover:bg-gray-200">Basketball</Link>
              <Link href="#" className="dropdown-link w-dropdown-link block px-4 py-2 text-gray-700 hover:bg-gray-200">Cheerleading</Link>
              <Link href="#" className="dropdown-link w-dropdown-link block px-4 py-2 text-gray-700 hover:bg-gray-200">Flag Football</Link>
              <Link href="#" className="dropdown-link w-dropdown-link block px-4 py-2 text-gray-700 hover:bg-gray-200">Golf</Link>
              <Link href="#" className="dropdown-link w-dropdown-link block px-4 py-2 text-gray-700 hover:bg-gray-200">Lacrosse</Link>
              <Link href="#" className="dropdown-link w-dropdown-link block px-4 py-2 text-gray-700 hover:bg-gray-200">Mini-Hawk</Link>
              <Link href="#" className="dropdown-link w-dropdown-link block px-4 py-2 text-gray-700 hover:bg-gray-200">Soccer</Link>
              <Link href="#" className="dropdown-link w-dropdown-link block px-4 py-2 text-gray-700 hover:bg-gray-200">Tennis</Link>
              <Link href="#" className="dropdown-link w-dropdown-link block px-4 py-2 text-gray-700 hover:bg-gray-200">Track and Field</Link>
              <Link href="#" className="dropdown-link w-dropdown-link block px-4 py-2 text-gray-700 hover:bg-gray-200">Volleyball</Link>
              <Link href="#" className="dropdown-link w-dropdown-link block px-4 py-2 text-gray-700 hover:bg-gray-200">Pickleball</Link>
              <Link href="#" className="dropdown-link w-dropdown-link block px-4 py-2 text-gray-700 hover:bg-gray-200">STEM Sports®</Link>
              <Link href="https://www.supertotsports.com/" className="dropdown-link w-dropdown-link block px-4 py-2 text-gray-700 hover:bg-gray-200">SuperTots</Link>
            </div>
          )}
        </div>
        <Link href="/page/company/jobs/" className="text-blue-600 hover:underline transition duration-300 w-full md:w-auto text-center">
          WORK WITH US
        </Link>
        <Link href="/store/" className="text-blue-600 hover:underline transition duration-300 w-full md:w-auto text-center">
          STORE
        </Link>
        <Link href="/page/company/family-resources/" className="text-blue-600 hover:underline transition duration-300 w-full md:w-auto text-center">
          FAMILY RESOURCES
        </Link>
        <Link href="/franchise/franchise/" className="text-blue-600 bg-white border-2 border-blue-600 px-4 py-2 rounded hover:underline transition duration-300 w-full md:w-auto text-center">
          FRANCHISE
        </Link>
      </nav>

      <div className="hidden md:flex ml-auto">
        <Link href="https://register.skyhawks.com/login" className="text-blue-600 underline hover:text-blue-800 transition duration-300">
          SIGN UP / LOGIN
        </Link>
      </div>
    </header>
  );
};

export default Header;
