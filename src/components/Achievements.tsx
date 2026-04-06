import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  PhoneCall,
  MessageSquare,
  Building2,
  ArrowRight,
  Mic,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import serviceLeftLayer from "../assets/service-leftlayer.png";

const Achievements = () => {
  const stats = [
    {
      number: "30+",
      label: "Leading Carriers & Global Partners",
      icon: Globe,
      delay: 0.1,
      position: "translate-y-[-20px] lg:translate-y-[-40px]",
    },
    {
      number: "300M+",
      label: "Minutes Delivered Worldwide",
      icon: PhoneCall,
      delay: 0.2,
      position: "translate-y-[20px] lg:translate-y-[40px]",
    },
    {
      number: "250M+",
      label: "Messages Delivered Worldwide",
      icon: MessageSquare,
      delay: 0.3,
      position: "translate-y-[-20px] lg:translate-y-[-40px]",
    },
    {
      number: "30+",
      label: "Businesses Empowered Globally",
      icon: Building2,
      delay: 0.4,
      position: "translate-y-[20px] lg:translate-y-[40px]",
    },
  ];

  return (
    <section className='relative pt-24 overflow-hidden bg-white'>
      {/* Background Decorative Images */}
      {/* <img 
        src={serviceLeftLayer} 
        alt="" 
        className="absolute bottom-[-10%] left-[-5%] w-[30%] opacity-10 pointer-events-none -z-10 rotate-180"
      />
      <img 
        src={serviceLeftLayer} 
        alt="" 
        className="absolute top-[-10%] right-[-5%] w-[30%] opacity-10 pointer-events-none -z-10"
      /> */}

      <div className='container-wide'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Left Side Content */}
          <div className='space-y-8'>
            <Reveal>
              <div className='space-y-4'>
                <span className='text-primary font-bold tracking-widest uppercase text-sm'>
                  Achievements
                </span>
                <h2 className='heading-1 text-gray-900 uppercase'>
                  Scaling New Heights in <br />
                  <span className='text-primary'>Global Communication</span>
                </h2>
                <div className='w-24 h-1.5 bg-primary rounded-full' />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className='text-lg text-gray-600 leading-relaxed max-w-xl'>
                Driving global communication with excellence and reliability.
                Our numbers speak for our commitment to seamless connectivity
                across borders and industries.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className='flex items-center justify-center pb-5'>
                <div className='relative w-[80%] max-w-[300px] aspect-square mx-auto lg:mx-0 mt-6 flex items-center justify-center'>
                  {/* Outer Dashed Orbit */}
                  <div className='absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-[spin_20s_linear_infinite]' />

                  {/* Inner Glow Circle */}
                  <div className='absolute inset-[25%] bg-primary/10 rounded-full blur-2xl' />
                  <div className='absolute inset-[20%] bg-primary/5 rounded-full border border-primary/10' />

                  {/* Center Icon - Globe (50% smaller) */}
                  <div className='relative z-10 w-16 h-16 md:w-16 md:h-16 bg-white rounded-full shadow-xl shadow-primary/10 flex items-center justify-center text-primary group'>
                    <Globe
                      size={40}
                      className='md:size-25 group-hover:scale-110 transition-transform duration-500'
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Orbiting Icons Container - Single Rotation Speed and Direction */}
                  <div className='absolute inset-0 pointer-events-none'>
                    {/* 1. Phone/Call Icon (Orange) - 0 degrees */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className='absolute inset-0'>
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className='absolute top-[-5%] left-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center pointer-events-auto'>
                        <PhoneCall size={24} strokeWidth={2.5} />
                      </motion.div>
                    </motion.div>

                    {/* 2. Mic Icon (White) - 120 degrees */}
                    <motion.div
                      initial={{ rotate: 120 }}
                      animate={{ rotate: 480 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className='absolute inset-0'>
                      <motion.div
                        initial={{ rotate: -120 }}
                        animate={{ rotate: -480 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className='absolute top-[-5%] left-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-white text-gray-400 rounded-full shadow-md flex items-center justify-center border border-gray-100 pointer-events-auto'>
                        <Mic size={24} strokeWidth={2} />
                      </motion.div>
                    </motion.div>

                    {/* 3. Message Icon (Cyan) - 240 degrees */}
                    <motion.div
                      initial={{ rotate: 240 }}
                      animate={{ rotate: 600 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className='absolute inset-0'>
                      <motion.div
                        initial={{ rotate: -240 }}
                        animate={{ rotate: -600 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className='absolute top-[-5%] left-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-[#FAEEE4] text-white rounded-full shadow-lg shadow-primary/10 flex items-center justify-center pointer-events-auto'>
                        <MessageCircle
                          size={24}
                          strokeWidth={2.5}
                          color='#F1911A'
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side Stats - Diamond/Staggered Layout */}
          <div className='grid grid-cols-2 gap-4 md:gap-8'>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className={`flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-gray-50 hover:border-primary/20 transition-all hover:shadow-primary/5 group ${stat.position}`}>
                <div className='w-14 h-14 md:w-16 md:h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4'>
                  <stat.icon size={28} />
                </div>
                <h3 className='text-2xl md:text-3xl font-bold text-gray-900 text-center'>
                  {stat.number}
                </h3>
                <p className='text-xs md:text-sm text-gray-500 font-medium text-center mt-2 leading-tight'>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
