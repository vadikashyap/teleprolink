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
        "fixed w-full z-50 transition-all duration-300 px-4 py-4",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent",
      )}>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link to='/' className='flex items-center space-x-2 md:space-x-3 group'>
          <img
            src={tplRoundLogo}
            alt='TeleProLink Logo'
            className='h-10 w-auto md:h-12 group-hover:scale-105 transition-transform'
          />
          <img src={logoText} alt='TeleProLink' className='h-5 w-auto md:h-7' />
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center space-x-8'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-gray-600",
              )}>
              {link.name}
            </Link>
          ))}
          <Link to='/contact' className='btn-primary py-2 px-6'>
            Book a Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className='md:hidden text-gray-900'
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t animate-in fade-in slide-in-from-top-4'>
          <div className='flex flex-col p-6 space-y-4'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-lg font-medium py-2 border-b border-gray-50",
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
              className='btn-primary w-full text-center mt-4'
              onClick={() => setIsOpen(false)}>
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
