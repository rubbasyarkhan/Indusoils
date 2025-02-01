import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);
  const dropdownRef = useRef(null);
  const nestedDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        nestedDropdownRef.current && !nestedDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
        setNestedOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Blurred Overlay when menu is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40" onClick={() => setIsOpen(false)}></div>
      )}

      <nav className="bg-white text-black shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-red-600">■</span> INDUS
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-bold hover:text-gray-400">Home</Link>
            <Link to="/about" className="font-bold hover:text-gray-400">About</Link>

            {/* Dropdown */}
            <div className="relative group" ref={dropdownRef}>
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center font-bold hover:text-gray-400">
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <div className={`absolute left-0 mt-2 w-40 bg-gray-100 rounded-lg py-2 shadow-lg transition-all duration-300 ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <Link to="/services" className="block px-4 py-2 hover:bg-gray-200">Web Development</Link>

                {/* Nested Dropdown */}
                <div className="relative group" ref={nestedDropdownRef}>
                  <button onClick={() => setNestedOpen(!nestedOpen)} className="flex justify-between w-full px-4 py-2 hover:bg-gray-200">
                    Digital Marketing <ChevronDown size={14} />
                  </button>
                  <div className={`absolute left-full top-0 ml-2 w-40 bg-gray-100 rounded-lg py-2 shadow-lg transition-all duration-300 ${nestedOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    <Link to="/seo" className="block px-4 py-2 hover:bg-gray-200">SEO</Link>
                    <Link to="/social-media" className="block px-4 py-2 hover:bg-gray-200">Social Media</Link>
                  </div>
                </div>

                <Link to="/graphic-design" className="block px-4 py-2 hover:bg-gray-200">Graphic Design</Link>
              </div>
            </div>

            <Link to="/products" className="font-bold hover:text-gray-400">Products</Link>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:flex items-center justify-center">
            <Link
              to="/contact"
              className=" font-bold py-2 px-6 rounded-full hover:bg-black hover:text-white transition duration-200  ease-in-out"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-gray-100 text-black p-6 transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>

        <div className="flex flex-col space-y-4 mt-8">
          <Link to="/" className="font-bold hover:text-gray-400">Home</Link>
          <Link to="/about" className="font-bold hover:text-gray-400">About</Link>

          {/* Mobile Dropdown */}
          <div>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full text-left flex justify-between font-bold hover:text-gray-400">
              Services <ChevronDown size={16} />
            </button>
            <div className={`${dropdownOpen ? "block" : "hidden"} pl-4 space-y-2`}>
              <Link to="/services" className="block hover:text-gray-400">Web Development</Link>

              {/* Mobile Nested Dropdown */}
              <button onClick={() => setNestedOpen(!nestedOpen)} className="w-full text-left flex justify-between font-bold hover:text-gray-400">
                Digital Marketing <ChevronDown size={14} />
              </button>
              <div className={`${nestedOpen ? "block" : "hidden"} pl-4 space-y-2`}>
                <Link to="/seo" className="block hover:text-gray-400">SEO</Link>
                <Link to="/social-media" className="block hover:text-gray-400">Social Media</Link>
              </div>

              <Link to="/graphic-design" className="block hover:text-gray-400">Graphic Design</Link>
            </div>
          </div>

          <Link to="/products" className="font-bold hover:text-gray-400">Products</Link>
          <Link to="/contact" className="bg-red-600 px-3 py-3 rounded-full block text-center hover:bg-red-700 transition">Contact Us</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
