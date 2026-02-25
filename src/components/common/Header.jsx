import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  Phone,
  Sparkles
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // 🔒 Body scroll lock when sidebar open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Yellow Announcement Bar */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 
  w-full md:w-full
  bg-yellow-500 text-black text-sm py-2 px-6
  overflow-hidden whitespace-nowrap
   shadow-xl z-[60]">

        <div className="marquee-track flex gap-36 font-semibold">
          <span>
            🌟 आज ही अपनी कुंडली जांचें और जानें अपना भविष्य |
            विशेषज्ञ ज्योतिष परामर्श उपलब्ध 🌟
          </span>

          <span>
            🌟 आज ही अपनी कुंडली जांचें और जानें अपना भविष्य |
            विशेषज्ञ ज्योतिष परामर्श उपलब्ध 🌟
          </span>
          <span>
            🌟 आज ही अपनी कुंडली जांचें और जानें अपना भविष्य |
            विशेषज्ञ ज्योतिष परामर्श उपलब्ध 🌟
          </span>
          <span>
            🌟 आज ही अपनी कुंडली जांचें और जानें अपना भविष्य |
            विशेषज्ञ ज्योतिष परामर्श उपलब्ध 🌟
          </span>
        </div>

      </div>

      {/* Header */}
      <header className="fixed top-[28px] left-0 w-full z-50  backdrop-blur-md bg-[#0b0b57d2] border-b border-white/20 shadow-lg">
        <div className="max-w-7xl  mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a
              href="/"
              className="text-2xl font-bold tracking-wide text-white flex items-center gap-2"
            >
              <Sparkles className="text-yellow-400" size={24} />
              <span className="text-red-500 font-bold">Naksh</span>
              <span className="text-white font-bold">veda</span>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center font-semibold space-x-8 text-lg text-white">
              <a href="#home" className="hover:text-yellow-400 transition">
                Home
              </a>
              <a href="#about" className="hover:text-yellow-400 transition">
                About
              </a>
              <a href="#about" className="hover:text-yellow-400 transition">
                Services
              </a>
              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </a>

            </nav>
            <div><button className="bg-yellow-500 cursor-pointer hover:bg-yellow-400 text-black px-5 py-1 rounded-full font-semibold transition">
              Get Consultation
            </button></div>

            {/* Mobile Menu Button */}
            <div className="md:hidden text-white">
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open Menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* English Line Below Header */}
      <div className="fixed top-[88px] left-0 w-full 
  bg-[red] text-white text-sm py-2 
  overflow-hidden whitespace-nowrap z-40">

        <div className="marquee-track flex gap-36 font-semibold px-6">
          <span>
            ✨ Get Accurate Horoscope Predictions Today |
            Trusted Astrology Consultation Available ✨
          </span>

          <span>
            ✨ Get Accurate Horoscope Predictions Today |
            Trusted Astrology Consultation Available ✨
          </span>
          <span>
            ✨ Get Accurate Horoscope Predictions Today |
            Trusted Astrology Consultation Available ✨
          </span>
          <span>
            ✨ Get Accurate Horoscope Predictions Today |
            Trusted Astrology Consultation Available ✨
          </span>
        </div>

      </div>

      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } z-40`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-black via-gray-900 to-black text-white shadow-2xl transform transition-all duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          } z-80 p-6`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-semibold">Menu</span>
          <button onClick={closeMenu} aria-label="Close Menu">
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col  space-y-6 text-lg">

          <a
            href="#home"
            onClick={closeMenu}
            className="flex  items-center gap-3 hover:text-yellow-400 transition"
          >
            <Home size={20} />
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="flex items-center gap-3 hover:text-yellow-400 transition"
          >
            <Info size={20} />
            About
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="flex items-center gap-3 hover:text-yellow-400 transition"
          >
            <Phone size={20} />
            Contact
          </a>

          <button
            onClick={closeMenu}
            className="mt-[350px] bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold transition"
          >
            Get Consultation
          </button>

        </nav>
      </aside>


      {/* Marquee Animation */}
      <style>
        {`
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 18s linear infinite;
  will-change: transform;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`}
      </style>
    </>
  );
}