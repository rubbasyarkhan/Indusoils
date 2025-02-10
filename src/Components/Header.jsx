"use client";
import { ArrowRight } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open
  const dropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Blurred Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <nav className="bg-white text-black shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-red-600">■</span> INDUS
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-bold hover:text-gray-500 transition">
              Home
            </Link>
            <Link to="/about" className="font-bold hover:text-gray-500 transition">
              About
            </Link>

            {/* Dropdown */}
            <div className="relative group" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(dropdownOpen === "services" ? null : "services")}
                className=" flex items-center font-bold hover:text-gray-500 transition"
              >
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-44 bg-gray-100 rounded-lg shadow-lg transition-all duration-300 ${dropdownOpen === "services" ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
              >
                <Link to="/services" className="block px-4 py-2 hover:bg-gray-200">
                  Web Development
                </Link>

                {/* Nested Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(dropdownOpen === "marketing" ? "services" : "marketing")}
                    className="flex justify-between w-full px-4 py-2 hover:bg-gray-200"
                  >
                    Digital Marketing <ChevronDown size={14} />
                  </button>
                  <div
                    className={`absolute left-full top-0 ml-2 w-40 bg-gray-100 rounded-lg shadow-lg transition-all duration-300 ${dropdownOpen === "marketing" ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                  >
                    <Link to="/seo" className="block px-4 py-2 hover:bg-gray-200">
                      SEO
                    </Link>
                    <Link to="/social-media" className="block px-4 py-2 hover:bg-gray-200">
                      Social Media
                    </Link>
                  </div>
                </div>

                <Link to="/graphic-design" className="block px-4 py-2 hover:bg-gray-200">
                  Graphic Design
                </Link>
              </div>
            </div>

            <Link to="/products" className="font-bold hover:text-gray-500 transition">
              Products
            </Link>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="font-bold py-2 px-6 rounded-full w-auto flex hover:bg-black hover:text-white transition duration-300"
            >
              <span>Contact Us</span>
            <ArrowRight className="ml-2" />

            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-100 text-black p-6 transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>

        <div className="flex flex-col space-y-4 mt-8">
          <Link to="/" className="font-bold hover:text-gray-500 transition">
            Home
          </Link>
          <Link to="/about" className="font-bold hover:text-gray-500 transition">
            About
          </Link>


          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setDropdownOpen(dropdownOpen === "mobile-services" ? null : "mobile-services")}
              className="w-full text-left flex justify-between font-bold hover:text-gray-500 transition"
            >
              Services <ChevronDown size={16} />
            </button>
            <div className={`${dropdownOpen === "mobile-services" ? "block" : "hidden"} pl-4 space-y-2`}>
              <Link to="/services" className="block hover:text-gray-500 transition">
                Web Development
              </Link>

              {/* Mobile Nested Dropdown */}
              <button
                onClick={() => setDropdownOpen(dropdownOpen === "mobile-marketing" ? null : "mobile-marketing")}
                className="w-full text-left flex justify-between font-bold hover:text-gray-500 transition"
              >
                Digital Marketing <ChevronDown size={14} />
              </button>
              <div className={`${dropdownOpen === "mobile-marketing" ? "block" : "hidden"} pl-4 space-y-2`}>
                <Link to="/seo" className="block hover:text-gray-500 transition">
                  SEO
                </Link>
                <Link to="/social-media" className="block hover:text-gray-500 transition">
                  Social Media
                </Link>
              </div>

              <Link to="/graphic-design" className="block hover:text-gray-500 transition">
                Graphic Design
              </Link>
            </div>
          </div>

          <Link to="/products" className="font-bold hover:text-gray-500 transition">
            Products
          </Link>
          <Link to="/contact" className="font-bold gap-0 hover:gap-5 w-auto transition flex items-center">
            <span>Contact</span>
            <ArrowRight className="ml-2" />
          </Link>

        </div>
      </div>
    </>
  );
};

export default Header;
