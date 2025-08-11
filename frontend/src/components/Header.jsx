import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Header = () => {
  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" }, // <-- actual link
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex sticky top-0 items-center justify-between px-8 py-4 bg-[#0F3D3A] absolute top-0 left-0 w-full z-10 border-b border-white/10">
      {/* Logo */}
      <div className="text-white font-bold text-3xl">
        <span className="text-green-400">E</span>thice
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-white font-medium">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="relative group">
            <span className="hover:text-green-300 transition-colors duration-300">
              {link.name}
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-0 bg-green-300 transition-all duration-300 transform group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <button className="bg-[#C8F8A9] hover:bg-green-900 hover:text-white text-black text-[14px] px-5 py-2 rounded-md shadow-md flex justify-between items-center gap-2">
          Contact Us <FiArrowRight />
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          <HiOutlineMenuAlt3 />
        </div>
      </div>
    </header>
  );
};

export default Header;
