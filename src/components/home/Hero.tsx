import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Lock,
  Globe2,
} from "lucide-react";
import towerIcon from "../../assets/tower.svg";
import AnimatedElement from "../AnimatedElement";
import Section from "./Section";

const Hero = () => {
  return (
    <Section
      className='pt-4 lg:pt-10 bg-gray-50/50'
      containerClassName='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'
      backgroundElements={
        <>
          {/* Background Decorative Elements */}
          <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
            <div className='absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow' />
            <div className='absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px] animate-pulse-slow delay-700' />
            <div className='absolute -bottom-[10%] left-[20%] w-[25%] h-[25%] bg-primary/5 rounded-full blur-[80px] animate-pulse-slow delay-1000' />

            {/* Wave-like background shape */}
            <svg
              className='absolute bottom-0 left-0 w-full h-auto text-white fill-current'
              viewBox='0 0 1440 320'
              preserveAspectRatio='none'>
              <path d='M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
            </svg>
          </div>
          {/* Background Tower Icon */}
          <div className='absolute -left-0 bottom-[20%] w-[300px] h-[300px] pointer-events-none -z-10'>
            <img
              src={towerIcon}
              alt=''
              className='w-full h-full object-contain'
            />
          </div>
        </>
      }>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='space-y-10 relative'>
        <h1 className='heading-1 leading-[1.1] text-gray-900'>
          Powering Your <span className='text-primary'>Communication</span>{" "}
          Strategy. Seamless, Scalable, and Simple.
        </h1>

        <p className='text-xl text-gray-600 leading-relaxed max-w-xl'>
          TeleProLink is your trusted startup telecom partner headquartered in
          Hong Kong. We provide powerful, high-quality SMS and crystal-clear
          voice solutions designed to help businesses connect, engage, and grow
          globally.
        </p>

        <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6'>
          <Link to='/services' className='btn-primary flex items-center group'>
            Explore Our Solutions
            <ArrowRight
              className='ml-2 group-hover:translate-x-1 transition-transform'
              size={20}
            />
          </Link>
          <Link to='/contact' className='btn-secondary'>
            Let's Connect
          </Link>
        </div>

        {/* New Animated Element Example */}
        <div className='pt-8 flex items-center space-x-4 position-absolute -bottom-4 left-0'>
          <AnimatedElement size={140} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='relative lg:ml-auto w-full max-w-xl mx-auto lg:mx-0 mb-15'>
        {/* Visual representation of connectivity/network */}
        <div className='relative p-6 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-[3rem] border border-primary/10 shadow-[0_20px_50px_rgba(241,145,25,0.1)] overflow-hidden group/container'>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

          {/* Floating elements animation */}
          <div className='absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-pulse-slow' />
          <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse-slow delay-1000' />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl group-hover/container:scale-125 transition-transform duration-1000' />

          <div className='grid grid-cols-2 gap-4 md:gap-8 relative z-10'>
            {/* SMS Solutions */}
            <div className='aspect-square bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-xl flex flex-col items-center justify-center p-4 md:p-8 border border-white hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] group shadow-primary/5 hover:shadow-primary/10 relative overflow-hidden'>
              <div className='flex flex-col items-center justify-center space-y-4 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4'>
                <div className='w-14 h-14 md:w-20 md:h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary transform transition-all duration-500 group-hover:rotate-6'>
                  <MessageCircle size={32} className='md:hidden' />
                  <MessageCircle size={44} className='hidden md:block' />
                </div>
                <span className='font-bold text-gray-900 text-sm md:text-lg text-center'>
                  SMS Solutions
                </span>
              </div>

              {/* Hover Content */}
              <div className='absolute inset-0 p-4 md:p-6 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 bg-primary/5'>
                <h3 className='font-bold text-primary text-sm md:text-lg mb-2'>
                  SMS Solutions
                </h3>
                <p className='text-[10px] md:text-xs text-gray-600 leading-relaxed'>
                  SMS Solutions provide a fast and reliable way to send alerts,
                  OTPs, and promotional messages, ensuring instant communication
                  and high engagement across all mobile devices.
                </p>
              </div>
            </div>

            {/* Voice Solutions */}
            <div className='aspect-square bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-xl flex flex-col items-center justify-center p-4 md:p-8 border border-white hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] group shadow-primary/5 hover:shadow-primary/10 relative overflow-hidden'>
              <div className='flex flex-col items-center justify-center space-y-4 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4'>
                <div className='w-14 h-14 md:w-20 md:h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary transform transition-all duration-500 group-hover:-rotate-6'>
                  <PhoneCall size={32} className='md:hidden' />
                  <PhoneCall size={44} className='hidden md:block' />
                </div>
                <span className='font-bold text-gray-900 text-sm md:text-lg text-center'>
                  Voice Solutions
                </span>
              </div>

              {/* Hover Content */}
              <div className='absolute inset-0 p-4 md:p-6 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 bg-primary/5'>
                <h3 className='font-bold text-primary text-sm md:text-lg mb-2'>
                  Voice Solutions
                </h3>
                <p className='text-[10px] md:text-xs text-gray-600 leading-relaxed'>
                  Voice Solutions enable clear, reliable, and professional voice
                  communication through automated calls, inbound/outbound
                  calling, and smart call routing—helping businesses connect
                  faster and deliver better customer experiences.
                </p>
              </div>
            </div>

            {/* OTP Security */}
            <div className='aspect-square bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-xl flex flex-col items-center justify-center p-4 md:p-8 border border-white hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] group shadow-primary/5 hover:shadow-primary/10 relative overflow-hidden'>
              <div className='flex flex-col items-center justify-center space-y-4 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4'>
                <div className='w-14 h-14 md:w-20 md:h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary transform transition-all duration-500 group-hover:-rotate-6'>
                  <Lock size={32} className='md:hidden' />
                  <Lock size={44} className='hidden md:block' />
                </div>
                <span className='font-bold text-gray-900 text-sm md:text-lg text-center'>
                  OTP Security
                </span>
              </div>

              {/* Hover Content */}
              <div className='absolute inset-0 p-4 md:p-6 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 bg-primary/5'>
                <h3 className='font-bold text-primary text-sm md:text-lg mb-2'>
                  OTP Security
                </h3>
                <p className='text-[10px] md:text-xs text-gray-600 leading-relaxed'>
                  OTP Security enables secure user authentication through
                  one-time passwords, helping protect logins, transactions, and
                  sensitive actions with fast and reliable verification.
                </p>
              </div>
            </div>

            {/* Global Connectivity */}
            <div className='aspect-square bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-xl flex flex-col items-center justify-center p-4 md:p-8 border border-white hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] group shadow-primary/5 hover:shadow-primary/10 relative overflow-hidden'>
              <div className='flex flex-col items-center justify-center space-y-4 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4'>
                <div className='w-14 h-14 md:w-20 md:h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary transform transition-all duration-500 group-hover:rotate-6'>
                  <Globe2 size={32} className='md:hidden' />
                  <Globe2 size={44} className='hidden md:block' />
                </div>
                <span className='font-bold text-gray-900 text-sm md:text-lg text-center'>
                  Global Connectivity
                </span>
              </div>

              {/* Hover Content */}
              <div className='absolute inset-0 p-4 md:p-6 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 bg-primary/5'>
                <h3 className='font-bold text-primary text-sm md:text-lg mb-2'>
                  Global Connectivity
                </h3>
                <p className='text-[10px] md:text-xs text-gray-600 leading-relaxed'>
                  Global Connectivity enables seamless and reliable
                  communication across borders, helping businesses connect with
                  customers and partners worldwide through secure,
                  high-performance networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Hero;
