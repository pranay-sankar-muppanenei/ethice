import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Header = () => {
  const navLinks = [
    { name: "Services", href: "/services" },
    {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "Who We Are", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/about/careers" },
        { name: "Testimonials", href: "/about/testimonials" },
        { name: "Press Release", href: "/about/press-release" },
      ],
    },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <header className="flex sticky top-0 items-center justify-between px-8 py-4 bg-[#0F3D3A] w-full z-10 border-b border-white/10">
      {/* Logo */}
      <Link href='/'>
        <div className="text-white font-bold text-3xl cursor-pointer">
          <span className="text-green-400">E</span>xecor
        </div>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-white font-medium">
        {navLinks.map((link) => (
          <div key={link.name} className="relative group">
            <Link href={link.href}>
              <span className="hover:text-green-300 transition-colors duration-300 cursor-pointer">
                {link.name}
              </span>
            </Link>

            {/* Hover underline */}
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-0 bg-green-300 transition-all duration-300 transform group-hover:w-full"></span>

            {/* Dropdown */}
            {link.dropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {link.dropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <Link href="/contact-us">
          <button className="bg-[#C8F8A9] hover:bg-green-900 hover:text-white text-black text-[14px] px-5 py-2 rounded-md shadow-md flex justify-between items-center gap-2">
            Contact Us <FiArrowRight />
          </button>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          <HiOutlineMenuAlt3 />
        </div>
      </div>
    </header>
  );
};

export default Header;
