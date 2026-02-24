import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide cursor-pointer">
            🔮 AstroWorld
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 text-lg">

            <a href="#home" className="hover:text-yellow-400 transition duration-300">
              Home
            </a>

            <a href="#about" className="hover:text-yellow-400 transition duration-300">
              About
            </a>

            <a href="#contact" className="hover:text-yellow-400 transition duration-300">
              Contact Us
            </a>

            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold transition duration-300">
              Contact
            </button>

          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95 px-6 py-4 space-y-4 text-lg">

          <a href="#home" className="block hover:text-yellow-400 transition duration-300">
            Home
          </a>

          <a href="#about" className="block hover:text-yellow-400 transition duration-300">
            About
          </a>

          <a href="#contact" className="block hover:text-yellow-400 transition duration-300">
            Contact Us
          </a>

          <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold transition duration-300">
            Contact
          </button>

        </div>
      )}
    </header>
  );
}