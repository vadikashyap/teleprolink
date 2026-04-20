import React from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Globe2,
  Zap,
} from "lucide-react";
import Reveal from "../Reveal";
import Section from "./Section";
import AnimatedElement from "../AnimatedElement";
import element11 from "../../assets/element11.svg";
import whyChoose2 from "../../assets/WhyChoose-2.png";
import communicationLottie from "../../assets/lottiefiles/Communication.lottie";
// @ts-ignore
import contactLottie from "../../assets/lottiefiles/contect.lottie";
import { cn } from "../../utils/cn";

const WhyChoose = () => {
  return (
    <Section
      className='py-16 md:pt-24 lg:pt-32 pb-10 mb-0'
      backgroundElements={
        <>
          {/* element11 decoration */}
          <div className='absolute left-[-3%] top-[10%] w-[12%] z-1 pointer-events-none animate-beat'>
            <img src={element11} alt='' className='w-full h-auto opacity-40' />
          </div>

          {/* Background Waves/Blobs */}
          <div className='absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4' />
          <div className='absolute bottom-0 left-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4' />
        </>
      }>
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
      <div className='mt-10'>
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
    </Section>
  );
};

export default WhyChoose;
