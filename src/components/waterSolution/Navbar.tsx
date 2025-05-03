import { useState } from "react";
import { ArrowDown, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full text-white">
      {/* Main navigation */}
      <nav className="bg-black bg-opacity-5 px-7 shadow relative flex items-center backdrop-blur-lg mt-2 rounded-lg justify-between">
        {/* Left links */}
        <div className="w-40 lg:w-60">
          <img
            src="/logo.png"
            alt="X Poll"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Logo centered */}
        <div className="md:flex justify-center hidden gap-7 text-xs lg:text-base 2xl:text-xl items-center">
          <a href="#solutions">Solutions</a>
          <a href="#articles" className="flex items-center gap-1">
            Articles <ArrowDown className="w-4 2xl:w-5" />
          </a>
          <a href="#about">About</a>
        </div>

        {/* Right link */}
        <a
          href="#contact"
          className="hidden md:flex justify-end text-xs lg:text-base 2xl:text-xl bg-[#004AAD] rounded-full items-center px-4 py-2 gap-1"
        >
          <p>Get in touch</p>
          <ArrowRight className="w-4 2xl:w-5" />
        </a>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex-1 flex justify-end">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu items */}
      {menuOpen && (
        <div className="md:hidden bg-[#080808] p-7 space-y-4 shadow-lg text-xl font-semibold flex flex-col">
          <a href="#solutions">Solutions</a>
          <a href="#articles" className="flex items-center">
            Articles <ArrowDown />
          </a>
          <a href="#about">About</a>
          <a
            href="#contact"
            className="flex w-fit bg-[#004AAD] rounded-full items-center px-4 py-2"
          >
            <p>Get in touch</p>
            <ArrowRight />
          </a>
        </div>
      )}
    </header>
  );
}
