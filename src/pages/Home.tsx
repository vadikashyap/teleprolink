import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import tplRoundLogo from "../assets/tpl-round-logo.svg";
import towerIcon from "../assets/tower.svg";
import flashCallIcon from "../assets/flash-call.svg";
import element11 from "../assets/element11.svg";
import whyChoose1 from "../assets/WhyChoose-1.png";
import whyChoose2 from "../assets/WhyChoose-2.png";
import joinImg from "../assets/Join.png";
import { cn } from "../utils/cn";
import Reveal from "../components/Reveal";
import ConnectedClients from "../components/ConnectedClients";
import Achievements from "../components/Achievements";
import AnimatedElement from "../components/AnimatedElement";
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
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import audioPlaying from "../assets/lottiefiles/audio-playing.lottie";
import communicationLottie from "../assets/lottiefiles/Communication.lottie";
// @ts-ignore
import contactLottie from "../assets/lottiefiles/contect.lottie";

const HomePage = () => {
  return (
    <div className='space-y-16'>
      <SEO
        title='TeleProLink | Powering Your Communication Strategy'
        description='Headquartered in Hong Kong, TeleProLink provides high-quality A2P SMS and crystal-clear voice solutions designed for startups, enterprises, and fintech companies.'
      />
      {/* Hero Section */}
      <section className='relative overflow-hidden pt-4 lg:pt-10 bg-gray-50/50'>
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

        <div className='container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10'>
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
                      SMS Solutions provide a fast and reliable way to send
                      alerts, OTPs, and promotional messages, ensuring instant
                      communication and high engagement across all mobile
                      devices.
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
                      Voice Solutions enable clear, reliable, and professional
                      voice communication through automated calls,
                      inbound/outbound calling, and smart call routing—helping
                      businesses connect faster and deliver better customer
                      experiences.
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
                      one-time passwords, helping protect logins, transactions,
                      and sensitive actions with fast and reliable verification.
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
                      communication across borders, helping businesses connect
                      with customers and partners worldwide through secure,
                      high-performance networks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className='bg-white pt-16 overflow-hidden relative mb-0'>
        {/* Background blobs for "Who We Serve" */}
        <div className='absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2' />
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-x-1/4' />

        {/* Decorative Flash Call Elements on Left */}
        <div className='absolute right-[-30px] -top-[5%] w-[300px] md:w-[450px] pointer-events-none z-1 flex flex-col items-end'>
          <div className='relative'>
            <div className='flex items-center'>
              <Reveal>
                <div className='w-[150px] md:w-[250px] 2xl:w-[350px]'>
                  <DotLottieReact src={audioPlaying} loop autoplay />
                </div>
              </Reveal>
              {/* Vertical Line */}
              <div className='w-1 h-48 bg-primary opacity-40 ml-4 rounded-full' />
            </div>
          </div>
        </div>

        <div className='container-wide relative z-10'>
          <Reveal>
            <div className='text-center max-w-3xl mx-auto'>
              <h2 className='inline-block px-6 py-2 bg-primary/10 text-primary font-bold text-2xl md:text-3xl rounded-full mb-8'>
                Who We Serve
              </h2>
              <p className='heading-2 mb-4'>
                Solutions for Every Business Scale
              </p>
              <p className='text-lg text-gray-600 mb-4'>
                Empowering businesses of all sizes to connect with their
                customers instantly and efficiently through our specialized
                telecom infrastructure.
              </p>
              <div className='w-24 h-1.5 bg-primary mx-auto rounded-full mb-6' />
            </div>
          </Reveal>

          <div className='relative flex flex-col lg:flex-row items-center justify-center min-h-[500px] '>
            {/* Background Glow */}
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full hidden lg:block animate-pulse-slow' />

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
                    "flex items-center justify-between py-2 px-4 md:py-3 md:px-6 bg-gradient-to-r from-orange-50 to-white border border-primary/20 rounded-2xl md:rounded-full shadow-sm hover:shadow-lg transition-all duration-500 group",
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
                  className='w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain relative z-10 animate-float drop-shadow-[0_20px_50px_rgba(241,145,25,0.3)]'
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
                    "flex items-center gap-4 py-2 px-4 md:py-3 md:px-6 bg-gradient-to-l from-orange-50 to-white border border-primary/20 rounded-2xl md:rounded-full shadow-sm hover:shadow-lg transition-all duration-500 group",
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

      {/* Achievements Section */}
      <Achievements />

      {/* Why Choose TeleProLink */}
      <section className='relative py-16 md:py-24 lg:py-32 overflow-hidden'>
        {/* element11 decoration */}
        <div className='absolute left-[-3%] top-[10%] w-[12%] z-1 pointer-events-none animate-beat'>
          <img src={element11} alt='' className='w-full h-auto opacity-40' />
        </div>

        {/* Background Waves/Blobs */}
        <div className='absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4' />
        <div className='absolute bottom-0 left-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4' />

        <div className='container-wide relative z-10'>
          <Reveal>
            <div className='text-center max-w-3xl mx-auto mb-16 md:mb-24'>
              <h2 className='heading-2 mb-4'>Why Choose TeleProLink?</h2>
              <div className='w-24 h-1.5 bg-primary mx-auto rounded-full' />
            </div>
          </Reveal>

          <div className='space-y-24 md:space-y-32'>
            {/* Row 1: Left (3 Points) | Right (WhyChoose-1.png) */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center'>
              <div className='space-y-8 order-2 lg:order-1'>
                {[
                  {
                    title: "Comprehensive Communication Solutions",
                    desc: "From SMS and Voice Solutions to OTP Security and Global Connectivity, TeleProLink offers an integrated portfolio that supports end-to-end business communication from a single platform.",
                    icon: MessageSquare,
                    color: "bg-blue-500/10 text-blue-500",
                  },
                  {
                    title: "Reliability You Can Trust",
                    desc: "Our solutions are built to ensure consistent delivery, clear communication, and dependable performance—helping businesses send critical messages, handle customer interactions, and authenticate users with confidence.",
                    icon: CheckCircle2,
                    color: "bg-primary/10 text-primary",
                  },
                  {
                    title: "Security-First Approach",
                    desc: "With built-in OTP authentication, 2FA/MFA support, and secure communication practices, TeleProLink helps businesses protect user data, prevent fraud, and maintain trust.",
                    icon: ShieldCheck,
                    color: "bg-emerald-500/10 text-emerald-500",
                  },
                ].map((feature, idx) => (
                  <Reveal key={feature.title} delay={idx * 0.1}>
                    <div className='flex space-x-5 group'>
                      <div
                        className={cn(
                          "flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm",
                          feature.color,
                        )}>
                        <feature.icon size={22} />
                      </div>
                      <div className='space-y-1'>
                        <h3 className='text-base md:text-lg font-bold text-gray-900 group-hover:text-primary transition-colors flex items-center'>
                          {feature.title}
                        </h3>
                        <p className='text-xs md:text-sm text-gray-600 leading-relaxed'>
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className='order-1 lg:order-2 flex justify-center'>
                <Reveal direction='left'>
                  {/* <img
                    src={whyChoose1}
                    alt='WhyChoose-1'
                    className='w-full max-w-lg h-auto object-contain'
                  /> */}
                  <div className='w-full' style={{ transform: "scale(1.6)" }}>
                    <DotLottieReact src={contactLottie} loop autoplay />
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Row 2: Left (WhyChoose-2.png) | Right (3 Points) */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center relative'>
              {/* New Animated Element Example */}
              <div className='pt-8 flex items-center space-x-4 absolute -top-45 right-0 z-10'>
                <AnimatedElement size={200} />
              </div>
              <div className='flex justify-center'>
                <Reveal direction='right'>
                  <img
                    src={whyChoose2}
                    alt='WhyChoose-2'
                    className='w-full max-w-lg h-auto object-contain'
                  />
                </Reveal>
              </div>
              <div className='space-y-8'>
                {[
                  {
                    title: "Scalable for Growing Businesses",
                    desc: "Whether you’re serving local customers or expanding globally, TeleProLink’s solutions are designed to scale effortlessly as your communication needs grow.",
                    icon: TrendingUp,
                    color: "bg-purple-500/10 text-purple-500",
                  },
                  {
                    title: "Global Reach, Local Performance",
                    desc: "Through Global Connectivity, we enable seamless cross-border communication, ensuring your messages, calls, and verification services perform reliably worldwide.",
                    icon: Globe2,
                    color: "bg-cyan-500/10 text-cyan-500",
                  },
                  {
                    title: "Business-Focused & Easy to Integrate",
                    desc: "Our services are designed to fit into existing business workflows and platforms, enabling faster deployment and simplified communication management.",
                    icon: Zap,
                    color: "bg-orange-500/10 text-orange-500",
                  },
                ].map((feature, idx) => (
                  <Reveal key={feature.title} delay={idx * 0.1}>
                    <div className='flex space-x-5 group'>
                      <div
                        className={cn(
                          "flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm",
                          feature.color,
                        )}>
                        <feature.icon size={22} />
                      </div>
                      <div className='space-y-1'>
                        <h3 className='text-base md:text-lg font-bold text-gray-900 group-hover:text-primary transition-colors flex items-center'>
                          {feature.title}
                        </h3>
                        <p className='text-xs md:text-sm text-gray-600 leading-relaxed'>
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Card */}
          <div className='mt-20 md:mt-32'>
            <Reveal delay={0.5}>
              <div className='relative group max-w-5xl mx-auto'>
                <div className='absolute -inset-6 bg-primary/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                <div className='bg-gray-900 rounded-[3rem] p-8 md:p-12 lg:p-16 text-white space-y-10 relative overflow-hidden shadow-2xl border border-gray-800 flex flex-col md:flex-row items-center gap-12'>
                  <div className='absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow' />
                  <div className='w-full md:w-1/2 relative z-10 space-y-6'>
                    <h3 className='text-3xl md:text-4xl font-bold leading-tight'>
                      Ready to transform your communication?
                    </h3>
                    <p className='text-gray-400 text-lg leading-relaxed'>
                      Join dozens of global companies that trust TeleProLink for
                      their SMS and voice connectivity needs.
                    </p>
                    <div className='pt-4'>
                      <Link
                        to='/contact'
                        className='btn-primary w-full sm:w-auto hover:scale-105 transition-transform inline-block text-center'>
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 relative h-64 md:h-80 rounded-[2rem] overflow-hidden group-hover:scale-105 transition-transform duration-1000'>
                    <DotLottieReact
                      src={communicationLottie}
                      loop
                      autoplay
                      className='w-full h-full'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60' />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Connected Clients Section */}
      {/* <ConnectedClients /> */}
    </div>
  );
};

export default HomePage;
