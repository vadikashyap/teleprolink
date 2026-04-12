import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Zap,
  Globe2,
  ShieldCheck,
  TrendingUp,
  Activity,
  Award,
} from "lucide-react";
import Reveal from "../Reveal";
import Section from "./Section";
import tplRoundLogo from "../../assets/tpl-round-logo.svg";
import audioPlaying from "../../assets/lottiefiles/audio-playing.lottie";
import { cn } from "../../utils/cn";

const WhoWeServe = () => {
  return (
    <Section
      className='bg-white pt-16 mb-0'
      backgroundElements={
        <>
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
              </div>
            </div>
          </div>
        </>
      }>
      <Reveal>
        <div className='text-center max-w-3xl mx-auto'>
          <h2 className='inline-block px-6 py-2 bg-primary/10 text-primary font-bold text-2xl md:text-3xl rounded-full mb-8'>
            Who We Serve
          </h2>
          <p className='heading-2 mb-4'>Solutions for Every Business Scale</p>
          <p className='text-lg text-gray-600 mb-4'>
            Empowering businesses of all sizes to connect with their customers
            instantly and efficiently through our specialized telecom
            infrastructure.
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
    </Section>
  );
};

export default WhoWeServe;
