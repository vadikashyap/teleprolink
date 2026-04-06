import React from "react";
import {
  History,
  Target,
  Users,
  Linkedin,
  Globe2,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import ourStoryImg from "../assets/Our-Story.png";
import Reveal from "../components/Reveal";

const AboutPage = () => {
  return (
    <div className='space-y-16 md:space-y-24 lg:space-y-32 py-10 lg:py-20'>
      <SEO
        title='About Us | Leadership & Vision'
        description='Learn about TeleProLink, a Hong Kong-based telecom startup led by industry veteran Ashish Dhar with 19 years of experience in global communication.'
      />
      {/* Hero Section */}
      <section className='container-wide'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            <span className='text-primary font-bold tracking-widest uppercase text-sm'>
              Our Story
            </span>
            <h1 className='heading-2 leading-tight'>
              Built on a simple belief:{" "}
              <span className='text-primary'>Communication</span> is the
              backbone of every successful business.
            </h1>
            <p className='text-xl mb-2 text-gray-600 leading-relaxed max-w-xl'>
              <b>Tekeprolink.com</b> is built on one belief: technology should
              simplify growth, not slow it down. We work with clients who value
              quality, clarity, and dependable outcomes—delivering solutions
              with a practical mindset and a strong focus on results. From
              discovery to execution, we stay transparent, responsive, and
              committed to work that holds up beyond launch.
            </p>
            <p className='text-primary font-bold text-xl'>
              Seamless Communication, Limitless Reach
            </p>
          </div>
          <div className='relative group overflow-hidden rounded-[2.5rem] shadow-2xl'>
            <div className='absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors' />
            <img src={ourStoryImg} alt='Our Story' className='w-full' />
          </div>
        </div>
      </section>

      {/* Trust & Security Content */}
      <section className='bg-gray-50'>
        <div className='container-wide py-16 mb-0 md:py-24 lg:py-32 border-t border-gray-100'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center'>
            <div className='space-y-8'>
              <h2 className='heading-2'>Your Security is Our Priority</h2>
              <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
                The telecommunications landscape requires vigilance. At
                TeleProLink, we prioritize clean, high-quality traffic.
              </p>
              <div className='space-y-4 md:space-y-6'>
                {[
                  "Combating fraud like smishing",
                  "Preventing Artificially Inflated Traffic (AIT)",
                  "Ensuring authentic human experiences",
                  "Protecting brand reputation",
                ].map((item, idx) => (
                  <div key={idx} className='flex items-center space-x-4'>
                    <CheckCircle2
                      className='text-primary flex-shrink-0'
                      size={24}
                    />
                    <span className='text-base md:text-lg text-gray-700'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className='bg-gray-900 rounded-[2.5rem] p-8 md:p-12 lg:p-20 text-white space-y-8 md:space-y-10 relative overflow-hidden shadow-2xl'>
              <div className='absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]' />
              <ShieldCheck size={48} className='text-primary mb-4 md:mb-6' />
              <h3 className='text-2xl md:text-3xl font-bold leading-tight'>
                Committed to Clean Traffic
              </h3>
              <p className='text-sm md:text-lg text-gray-400 leading-relaxed'>
                We work tirelessly to ensure your messaging and voice traffic is
                routed securely, ensuring your customers receive the authentic
                experiences they expect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
