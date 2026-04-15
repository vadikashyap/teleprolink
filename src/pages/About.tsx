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
  Lightbulb,
  Award,
  PhoneCall,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import ourStoryImg from "../assets/Our-Story.png";
import Reveal from "../components/Reveal";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import missionLottie from "../assets/lottiefiles/Communication.lottie";
import visionLottie from "../assets/lottiefiles/VerificationCode.lottie";

const AboutPage = () => {
  return (
    <div className='space-y-16 md:space-y-24 lg:space-y-32 pt-10 lg:pt-20'>
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
              <b>Teleprolink.com</b> is built on one belief: technology should
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
      <section className='bg-gray-50 mb-0'>
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

      {/* Our Mission Section */}
      <section className='container-wide py-16 md:py-24 lg:py-32 mb-0'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center'>
          <Reveal direction='left'>
            <div className='space-y-8'>
              <div className='inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full'>
                <Target size={16} className='text-primary' />
                <span className='text-primary font-bold tracking-widest uppercase text-xs'>
                  Our Mission
                </span>
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
                Driving Growth with{" "}
                <span className='text-primary'>Dependable Solutions</span>
              </h2>
              <p className='text-xl text-gray-600 leading-relaxed'>
                To deliver dependable, modern solutions that help people and
                businesses grow with confidence—through quality work, honest
                communication, and long-term support.
              </p>
            </div>
          </Reveal>
          <Reveal direction='right'>
            <div className='relative bg-gradient-to-br from-primary/10 to-transparent rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-primary/20'>
              <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl' />
              <div className='flex items-center space-x-6 mb-6'>
                <div className='w-full' style={{ transform: "scale(1.2)" }}>
                  <DotLottieReact src={missionLottie} loop autoplay />
                </div>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 text-center'>
                Innovation
              </h3>
              <p className='text-lg text-gray-700 leading-relaxed text-center'>
                We believe in constantly evolving and adopting new technologies
                to provide cutting-edge solutions that meet the dynamic needs of
                the global market.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className='bg-gray-50 py-16 md:py-24 lg:py-32 mb-0'>
        <div className='container-wide'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center'>
            <Reveal direction='left'>
              <div className='relative bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-gray-100 shadow-xl'>
                <div className='absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl' />
                <div className='flex items-center space-x-6 mb-6'>
                  <div className='w-full' style={{ transform: "scale(1.2)" }}>
                    <DotLottieReact src={visionLottie} loop autoplay />
                  </div>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 text-center'>
                  Excellence
                </h3>
                <p className='text-lg text-gray-600 leading-relaxed text-center'>
                  We strive for excellence in every aspect of our work, from
                  product development to customer support, ensuring the highest
                  standards of quality and reliability.
                </p>
              </div>
            </Reveal>
            <Reveal direction='right'>
              <div className='space-y-8'>
                <div className='inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full'>
                  <TrendingUp size={16} className='text-primary' />
                  <span className='text-primary font-bold tracking-widest uppercase text-xs'>
                    Our Vision
                  </span>
                </div>
                <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
                  Building Trust with{" "}
                  <span className='text-primary'>Reliable Outcomes</span>
                </h2>
                <p className='text-xl text-gray-600 leading-relaxed'>
                  To become a trusted name for clients who want solutions that
                  are reliable, scalable, and built around real outcomes—not
                  empty promises.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Connect Banner Section */}
      <section className='bg-primary py-24 overflow-hidden relative mb-0'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />
        <div className='container-wide relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-white'>
          <div className='max-w-2xl space-y-6'>
            <h2 className='text-4xl md:text-5xl font-bold'>
              Ready to Connect?
            </h2>
            <p className='text-xl text-white/90 leading-relaxed'>
              Whether you have a question, need a quote, or want to explore
              partnership opportunities, our team is ready to assist you.
            </p>
            <div className='flex items-center space-x-6 pt-4'>
              <div className='flex items-center space-x-2'>
                <PhoneCall size={24} className='text-white' />
                <span className='text-lg font-medium'>Voice Solutions</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MessageSquare size={24} className='text-white' />
                <span className='text-lg font-medium'>SMS Services</span>
              </div>
            </div>
          </div>
          <div className='flex-shrink-0'>
            <a
              href='/contact'
              className='bg-white text-primary hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105'>
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
