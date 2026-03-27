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
            <p className='text-xl text-gray-600 leading-relaxed max-w-xl'>
              Founded in 2025 and headquartered in Central, Hong Kong,
              TeleProLink was built to cut through the complexity of global
              telecom, offering businesses of all sizes access to top-tier SMS
              and voice communication services. As an agile startup, we
              specialize in cutting through the complexity of global telecom.
            </p>
          </div>
          <div className='relative group overflow-hidden rounded-[2.5rem] shadow-2xl'>
            <div className='absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors' />
            <img src={ourStoryImg} alt='Our Story' className='w-full' />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className='bg-gray-50 py-16 md:py-24 lg:py-32 mb-0'>
        <div className='container-wide'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center'>
            <div className='relative overflow-hidden rounded-[3rem] shadow-2xl group'>
              {/* Professional Representation for Ashish Dhar */}
              <div className='aspect-[3/4] relative overflow-hidden'>
                <img
                  src=''
                  alt=''
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent' />
                <div className='absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 p-6 md:p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl'>
                  <h3 className='text-xl md:text-2xl font-bold text-gray-900'>
                    Ashish Dhar
                  </h3>
                  <p className='text-primary font-semibold text-sm md:text-base'>
                    Founder
                  </p>
                </div>
              </div>
            </div>

            <div className='space-y-8 md:space-y-10'>
              <div className='space-y-6'>
                <span className='text-primary font-bold tracking-widest uppercase text-sm'>
                  Meet Our Founder
                </span>
                <h2 className='heading-2'>Leadership Powered by Experience</h2>
                <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
                  TeleProLink is guided by Mr. Ashish Dhar, an industry expert
                  with 19 years of hands-on experience in the global
                  telecommunications domain.
                </p>
              </div>

              <div className='space-y-6 md:space-y-8'>
                <p className='text-gray-600 leading-relaxed text-sm md:text-base'>
                  With a rich background spanning across APAC, the Middle East,
                  Africa, and the Americas, Ashish has a proven track record in
                  Sales, Business Development, and A2P Monetization.
                </p>
                <p className='text-gray-600 leading-relaxed text-sm md:text-base'>
                  Throughout his career at organizations like Toku, C3NTRO
                  Telecom, and Bankai Group, he has specialized in A2P, SMS,
                  SS7, DID (Numbers), and Wholesale SMS & Voice trading. His
                  natural ability to build productive global client
                  relationships and navigate complex carrier networks ensures
                  that TeleProLink delivers unparalleled service quality and
                  connectivity.
                </p>
              </div>

              <div className='flex flex-wrap gap-4 pt-4 md:pt-6'>
                <a
                  href=''
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center space-x-3 bg-primary hover:bg-primary-dark text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold shadow-lg transition-all hover:scale-105 text-sm md:text-base'>
                  <Linkedin size={20} />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className='container-wide py-16 md:py-24 lg:py-32 mb-0'>
        <Reveal>
          <div className='text-center max-w-3xl mx-auto space-y-6 mb-12 md:mb-20'>
            <h2 className='heading-2'>Our Global Expertise</h2>
            <p className='text-lg text-gray-600'>
              Decades of experience navigating complex carrier networks and
              building productive global relationships.
            </p>
          </div>
        </Reveal>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8'>
          {[
            { title: "APAC", icon: Globe2 },
            { title: "Middle East", icon: Globe2 },
            { title: "Africa", icon: Globe2 },
            { title: "Americas", icon: Globe2 },
          ].map((region, idx) => (
            <div
              key={idx}
              className='p-6 md:p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all text-center group'>
              <div className='w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-colors'>
                <region.icon size={28} />
              </div>
              <h3 className='text-lg md:text-xl font-bold text-gray-900'>
                {region.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Security Content */}
      <section className='container-wide py-16 md:py-24 lg:py-32 border-t border-gray-100'>
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
      </section>
    </div>
  );
};

export default AboutPage;
