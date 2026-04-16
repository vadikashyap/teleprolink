import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Hero from "../components/home/Hero";
import WhoWeServe from "../components/home/WhoWeServe";
import WhyChoose from "../components/home/WhyChoose";
import FAQ from "../components/home/FAQ";
import Achievements from "../components/Achievements";

const HomePage = () => {
  return (
    <div className='space-y-16'>
      <SEO
        title='TeleProLink | Powering Your Communication Strategy'
        description='Headquartered in Hong Kong, TeleProLink provides high-quality A2P SMS and crystal-clear voice solutions designed for startups, enterprises, and fintech companies.'
      />
      {/* Hero Section */}
      <Hero />

      <section className='w-full bg-gray-100 py-10'>
        <div className='max-w-6xl mx-auto px-4 relative'>
          {/* Left Decorative Lines */}
          <div className='absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2'>
            {/* Line 1 */}
            <div className='w-3 h-20 bg-primary/20 transform -skew-x-12'></div>

            {/* Line 2 */}
            <div className='w-3 h-24 bg-primary/40 transform -skew-x-12'></div>

            {/* Line 3 (Main bold) */}
            <div className='w-5 h-28 bg-primary transform -skew-x-12'></div>

            {/* Line 4 */}
            <div className='w-3 h-24 bg-primary/40 transform -skew-x-12'></div>

            {/* Line 5 */}
            <div className='w-3 h-20 bg-primary/20 transform -skew-x-12'></div>
          </div>

          {/* Main Card */}
          <div className='ml-16 bg-white shadow-lg relative px-8 py-6 transform skew-x-[-10deg]'>
            <div className='transform skew-x-[10deg] text-center'>
              <h2 className='text-2xl md:text-3xl font-bold text-primary'>
                Seamless Communication, Limitless Reach
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <WhoWeServe />

      {/* Achievements Section */}
      <Achievements />

      {/* Why Choose TeleProLink */}
      <WhyChoose />

      {/* FAQ Section */}
      <FAQ />

      {/* Connected Clients Section */}
      {/* <ConnectedClients /> */}
    </div>
  );
};

export default HomePage;
