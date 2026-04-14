import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  X,
  Globe,
  Instagram,
  MessageSquare,
} from "lucide-react";
import tplRoundLogo from "../assets/tpl-round-logo.svg";
import logoText from "../assets/logo-text.svg";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white pt-20 pb-10'>
      <div className='container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
        <div className='flex flex-col items-center md:items-start space-y-8'>
          <Link to='/' className='flex flex-col items-center space-y-4 group'>
            <img
              src={tplRoundLogo}
              alt='TeleProLink Round Logo'
              className='h-20 w-auto group-hover:scale-105 transition-transform'
            />
            <img
              src={logoText}
              alt='TeleProLink'
              className='h-6 w-auto brightness-0 invert'
            />
          </Link>

          <div className='flex flex-col items-center md:items-start space-y-6'>
            <div className='flex space-x-4'>
              <a
                href=''
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors'>
                <Linkedin size={20} />
              </a>
              <a
                href=''
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors'>
                <X size={20} />
              </a>

              <a
                href=''
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors'>
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 className='text-lg font-semibold mb-6'>Our Services</h4>
          <ul className='space-y-4 text-gray-400'>
            <li>
              <a
                href='/services#sms'
                className='hover:text-primary transition-colors'>
                SMS Service
              </a>
            </li>
            <li>
              <a
                href='/services#voice'
                className='hover:text-primary transition-colors'>
                Voice Service
              </a>
            </li>
            <li>
              <a
                href='/services#otp'
                className='hover:text-primary transition-colors'>
                OTP Services
              </a>
            </li>
            <li>
              <a
                href='/services#global'
                className='hover:text-primary transition-colors'>
                Global Connectivity
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-lg font-semibold mb-6'>Company</h4>
          <ul className='space-y-4 text-gray-400'>
            <li>
              <Link
                to='/about'
                className='hover:text-primary transition-colors'>
                About Us
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='hover:text-primary transition-colors'>
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to='/legal-compliance'
                className='hover:text-primary transition-colors '>
                Legal & Compliance
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-lg font-semibold mb-6'>Contact Info</h4>
          <ul className='space-y-4 text-gray-400'>
            <li className='flex items-start space-x-3'>
              <MapPin className='text-primary mt-1 flex-shrink-0' size={18} />
              <span>Central, Hong Kong</span>
            </li>
            <li className='flex items-center space-x-3'>
              <Globe className='text-primary flex-shrink-0' size={18} />
              <span>www.teleprolink.com</span>
            </li>
            <li className='flex items-center space-x-3'>
              <Mail className='text-primary flex-shrink-0' size={18} />
              <span>sales@teleprolink.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='container-wide pt-10 border-t border-gray-800 flex flex-col items-center text-center space-y-6'>
        <div className='w-full flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm'>
          <p>© {new Date().getFullYear()} TeleProLink. All rights reserved.</p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <Link
              to='/privacy'
              className='hover:text-gray-300 transition-colors'>
              Privacy Policy
            </Link>
            <Link to='/terms' className='hover:text-gray-300 transition-colors'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
