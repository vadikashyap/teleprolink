import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import tplRoundLogo from "../assets/tpl-round-logo.svg";
import logoText from "../assets/logo-text.svg";
import { cn } from "../utils/cn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled ? "py-4" : "py-6",
      )}>
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500",
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-[2rem] py-3"
            : "bg-transparent py-0",
        )}>
        <div className='flex items-center justify-between'>
          <Link
            to='/'
            className='flex items-center space-x-2 md:space-x-3 group'>
            <img
              src={tplRoundLogo}
              alt='TeleProLink Logo'
              className='h-10 w-auto md:h-12 group-hover:scale-105 transition-transform'
            />
            <img
              src={logoText}
              alt='TeleProLink'
              className='h-5 w-auto md:h-7'
            />
          </Link>

          {/* Desktop Nav */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-all duration-300 hover:text-primary relative group/nav",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-gray-600",
                )}>
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover/nav:w-full",
                  )}
                />
              </Link>
            ))}
            <Link
              to='/contact'
              className='btn-primary py-2 px-8 shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all'>
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className='md:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-full transition-colors'
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl shadow-2xl rounded-[2.5rem] border border-white/50 animate-in fade-in slide-in-from-top-4 overflow-hidden z-50'>
          <div className='flex flex-col p-8 space-y-6'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-xl font-bold py-2 border-b border-gray-50 transition-colors",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-gray-600",
                )}
                onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link
              to='/contact'
              className='btn-primary w-full text-center py-4 text-lg shadow-primary/20'
              onClick={() => setIsOpen(false)}>
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
