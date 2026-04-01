import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import tplRoundLogo from "../assets/tpl-round-logo.svg";
import { cn } from "../utils/cn";
import Reveal from "../components/Reveal";
import ConnectedClients from "../components/ConnectedClients";
import {
  ArrowRight,
  MessageSquare,
  Zap,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Globe2,
  Lock,
  MessageCircle,
  PhoneCall,
  Activity,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className='space-y-16'>
      <SEO
        title='TeleProLink | Powering Your Communication Strategy'
        description='Headquartered in Hong Kong, TeleProLink provides high-quality A2P SMS and crystal-clear voice solutions designed for startups, enterprises, and fintech companies.'
      />
      {/* Hero Section */}
      <section className='relative overflow-hidden pt-10 lg:pt-20'>
        <div className='container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='space-y-10'>
            {/* <div className='inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm'>
              <span className='animate-pulse w-2 h-2 bg-primary rounded-full' />
              <span>Headquartered in Central, Hong Kong</span>
            </div> */}

            <h1 className='heading-1 leading-[1.1] text-gray-900'>
              Powering Your <span className='text-primary'>Communication</span>{" "}
              Strategy. Seamless, Scalable, and Simple.
            </h1>

            <p className='text-xl text-gray-600 leading-relaxed max-w-xl'>
              TeleProLink is your trusted startup telecom partner headquartered
              in Hong Kong. We provide powerful, high-quality SMS and
              crystal-clear voice solutions designed to help businesses connect,
              engage, and grow globally.
            </p>

            <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6'>
              <Link
                to='/services'
                className='btn-primary flex items-center group'>
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

            <div className='flex items-center space-x-8 pt-8'>
              <div className='flex flex-col'>
                <span className='text-2xl font-bold text-gray-900'>19+</span>
                <span className='text-sm text-gray-500 uppercase tracking-wider'>
                  Years Exp
                </span>
              </div>
              <div className='w-px h-10 bg-gray-200' />
              <div className='flex flex-col'>
                <span className='text-2xl font-bold text-gray-900'>Global</span>
                <span className='text-sm text-gray-500 uppercase tracking-wider'>
                  Reach
                </span>
              </div>
              <div className='w-px h-10 bg-gray-200' />
              <div className='flex flex-col'>
                <span className='text-2xl font-bold text-gray-900'>A2P</span>
                <span className='text-sm text-gray-500 uppercase tracking-wider'>
                  Monetization
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative lg:ml-auto w-full max-w-xl mx-auto lg:mx-0 mb-15'>
            {/* Visual representation of connectivity/network */}
            <div className='relative p-6 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-[2.5rem] border border-primary/10 shadow-2xl overflow-hidden'>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

              <div className='grid grid-cols-2 gap-6 md:gap-8 relative z-10'>
                {/* SMS Solutions */}
                <div className='aspect-square bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 md:p-8 space-y-4 border border-gray-50 hover:border-primary/20 transition-all hover:scale-105 group'>
                  <div className='w-14 h-14 md:w-20 md:h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
                    <MessageCircle size={32} className='md:hidden' />
                    <MessageCircle size={44} className='hidden md:block' />
                  </div>
                  <span className='font-bold text-gray-900 text-sm md:text-lg text-center'>
                    SMS Solutions
                  </span>
                </div>

                {/* Voice Solutions */}
                <div className='aspect-square bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 md:p-8 space-y-4 border border-gray-50 hover:border-primary/20 transition-all hover:scale-105 group'>
                  <div className='w-14 h-14 md:w-20 md:h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
                    <PhoneCall size={32} className='md:hidden' />
                    <PhoneCall size={44} className='hidden md:block' />
                  </div>
                  <span className='font-bold text-gray-900 text-sm md:text-lg text-center'>
                    Voice Solutions
                  </span>
                </div>

                {/* OTP Security */}
                <div className='aspect-square bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 md:p-8 space-y-4 border border-gray-50 hover:border-primary/20 transition-all hover:scale-105 group'>
                  <div className='w-14 h-14 md:w-20 md:h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
                    <Lock size={32} className='md:hidden' />
                    <Lock size={44} className='hidden md:block' />
                  </div>
                  <span className='font-bold text-gray-900 text-sm md:text-lg text-center'>
                    OTP Security
                  </span>
                </div>

                {/* Global Connectivity */}
                <div className='aspect-square bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 md:p-8 space-y-4 border border-gray-50 hover:border-primary/20 transition-all hover:scale-105 group'>
                  <div className='w-14 h-14 md:w-20 md:h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
                    <Globe2 size={32} className='md:hidden' />
                    <Globe2 size={44} className='hidden md:block' />
                  </div>
                  <span className='font-bold text-gray-900 text-sm md:text-lg text-center'>
                    Global Connectivity
                  </span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className='absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse' />
              <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000' />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className='bg-white pt-16 overflow-hidden'>
        <div className='container-wide'>
          <Reveal>
            <div className='text-center max-w-3xl mx-auto'>
              <h2 className='inline-block px-6 py-2 text-gray-900 font-bold text-2xl md:text-3xl rounded-lg mb-8'>
                Who We Serve
              </h2>
              <p className='text-lg text-gray-600'>
                Empowering businesses of all sizes to connect with their
                customers instantly and efficiently through our specialized
                telecom infrastructure.
              </p>
            </div>
          </Reveal>

          <div className='relative flex flex-col lg:flex-row items-center justify-center min-h-[600px] py-12'>
            {/* Background Glow */}
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full hidden lg:block' />

            {/* Left Column - Curved */}
            <div className='flex flex-col gap-8 w-full lg:w-1/3 z-10'>
              {[
                {
                  name: "Startups",
                  icon: Zap,
                  desc: "Agile tools to scale and engage users globally.",
                  offset: "lg:translate-x-12",
                },
                {
                  name: "Enterprises",
                  icon: Globe2,
                  desc: "Secure infrastructure for large-scale communications.",
                  offset: "lg:-translate-x-4",
                },
                {
                  name: "Fintech",
                  icon: ShieldCheck,
                  desc: "High-security OTP and transactional messaging.",
                  offset: "lg:translate-x-12",
                },
              ].map((item, idx) => (
                <div
                  key={item.name}
                  className={cn(
                    "flex items-center justify-between p-4 md:p-6 bg-gradient-to-r from-orange-50 to-white border border-primary/20 rounded-2xl md:rounded-full shadow-sm hover:shadow-lg transition-all duration-500 group",
                    item.offset,
                  )}>
                  <div className='flex flex-col space-y-1 pl-2 text-right flex-grow pr-4'>
                    <span className='font-bold text-gray-900 md:text-lg'>
                      {item.name}
                    </span>
                    <p className='text-[10px] md:text-xs text-gray-500 leading-tight ml-auto'>
                      {item.desc}
                    </p>
                  </div>
                  <div className='w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0'>
                    <item.icon size={28} className='md:hidden' />
                    <item.icon size={32} className='hidden md:block' />
                  </div>
                </div>
              ))}
            </div>

            {/* Center Logo */}
            <div className='relative w-full lg:w-1/3 flex justify-center py-12 lg:py-0'>
              <div className='relative group'>
                <div className='absolute inset-0 bg-primary/20 blur-[60px] rounded-full group-hover:blur-[80px] transition-all duration-700' />
                <img
                  src={tplRoundLogo}
                  alt='TeleProLink'
                  className='w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain relative z-10 animate-pulse-slow drop-shadow-[0_20px_50px_rgba(241,145,25,0.3)]'
                />
              </div>
            </div>

            {/* Right Column - Curved */}
            <div className='flex flex-col gap-8 w-full lg:w-1/3 z-10'>
              {[
                {
                  name: "E-commerce",
                  icon: TrendingUp,
                  desc: "Real-time updates and promotional SMS.",
                  offset: "lg:-translate-x-12",
                },
                {
                  name: "Service Providers",
                  icon: Activity,
                  desc: "Carrier-grade connectivity for global infrastructure.",
                  offset: "lg:translate-x-4",
                },
                {
                  name: "Wholesale Partners",
                  icon: Award,
                  desc: "Premium routing and competitive global rates.",
                  offset: "lg:-translate-x-12",
                },
              ].map((item, idx) => (
                <div
                  key={item.name}
                  className={cn(
                    "flex items-center gap-4 p-4 md:p-6 bg-gradient-to-l from-orange-50 to-white border border-primary/20 rounded-2xl md:rounded-full shadow-sm hover:shadow-lg transition-all duration-500 group",
                    item.offset,
                  )}>
                  <div className='w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0'>
                    <item.icon size={28} className='md:hidden' />
                    <item.icon size={32} className='hidden md:block' />
                  </div>
                  <div className='flex flex-col space-y-1 flex-grow'>
                    <span className='font-bold text-gray-900 md:text-lg'>
                      {item.name}
                    </span>
                    <p className='text-[10px] md:text-xs text-gray-500 leading-tight'>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TeleProLink */}
      <section className='container-wide py-16 md:py-24 lg:py-32'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center'>
          <div className='space-y-12'>
            <h2 className='heading-2'>Why Choose TeleProLink?</h2>

            <div className='space-y-8 md:space-y-10'>
              {[
                {
                  title: "Advanced Infrastructure",
                  desc: "Robust, reliable, and built to scale with your business needs.",
                  icon: Cpu,
                },
                {
                  title: "Seamless API Integration",
                  desc: "Easy-to-implement developer tools that connect your applications to global telecom networks instantly.",
                  icon: Zap,
                },
                {
                  title: "Trusted Delivery",
                  desc: "In a world where customer trust is paramount, we ensure your critical messages—like OTPs and transactional alerts—are delivered securely and on time.",
                  icon: Award,
                },
              ].map((feature) => (
                <div key={feature.title} className='flex space-x-6'>
                  <div className='flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary'>
                    <feature.icon size={28} />
                  </div>
                  <div className='space-y-2'>
                    <h3 className='text-lg md:text-xl font-bold text-gray-900'>
                      {feature.title}
                    </h3>
                    <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='relative group'>
            <div className='absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
            <div className='bg-gray-900 rounded-[2.5rem] p-8 md:p-12 lg:p-20 text-white space-y-10 relative overflow-hidden shadow-2xl'>
              <div className='absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]' />
              <div className='absolute bottom-0 left-0 w-full h-1/2 opacity-20'>
                <img
                  src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000'
                  alt='Global Data Network'
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-3xl font-bold leading-tight relative z-10'>
                Ready to transform your communication?
              </h3>
              <p className='text-gray-400 text-lg leading-relaxed relative z-10'>
                Join dozens of global companies that trust TeleProLink for their
                SMS and voice connectivity needs.
              </p>
              <div className='pt-6 relative z-10'>
                <Link to='/contact' className='btn-primary w-full sm:w-auto'>
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connected Clients Section */}
      {/* <ConnectedClients /> */}
    </div>
  );
};

export default HomePage;
