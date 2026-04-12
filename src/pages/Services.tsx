import React from "react";
import {
  MessageSquare,
  Smartphone,
  Key,
  RefreshCcw,
  PhoneIncoming,
  Globe2,
  Zap,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import bg1 from "../assets/bg-1.png";
import Reveal from "../components/Reveal";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import audioPlaying from "../assets/lottiefiles/audio-playing.lottie";
import messageSend from "../assets/lottiefiles/message-send.lottie";
import communicationLottie from "../assets/lottiefiles/Communication.lottie";

const ServicesPage = () => {
  const smsServices = [
    {
      title: "A2P & Bulk SMS",
      desc: "Execute large-scale marketing campaigns and notifications with high throughput and reliable global delivery.",
      icon: MessageSquare,
    },
    {
      title: "Transactional Messaging",
      desc: "Keep your customers informed in real-time with automated alerts, order updates, and appointment reminders.",
      icon: Smartphone,
    },
    {
      title: "OTP Services",
      desc: "Secure your platform with fast, secure One-Time Passcodes. We treat OTPs as the backbone of digital authentication, ensuring they reach your users without delay.",
      icon: Key,
    },
    {
      title: "Wholesale SMS Trading",
      desc: "Leveraging decades of industry relationships to provide competitive rates and premium routing for wholesale partners.",
      icon: RefreshCcw,
    },
  ];

  const voiceServices = [
    {
      title: "Crystal-Clear Voice",
      desc: "High-quality voice termination and connectivity for enterprises, retailers and mvno.",
      icon: PhoneIncoming,
    },
    {
      title: "DID & SS7",
      desc: "Direct Inward Dialing numbers and secure SS7 signaling capabilities to power your global voice infrastructure.",
      icon: Zap,
    },
    {
      title: "Wholesale Voice",
      desc: "Extensive carrier relations to deliver premium voice transit globally.",
      icon: Globe2,
    },
  ];

  return (
    <div className='space-y-16 md:space-y-24 lg:space-y-32'>
      <SEO
        title='Our Services | A2P SMS & Voice Solutions'
        description="Explore TeleProLink's high-quality SMS solutions including A2P, Bulk SMS, OTP services, and premium voice connectivity for global businesses."
      />
      {/* Header */}
      <section className='relative overflow-hidden bg-gray-50 mb-0'>
        <div className='container-wide relative z-10 py-12 md:py-16'>
          <div className='max-w-2xl space-y-6 position-relative z-10'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}>
              <h1 className='heading-1 mb-4'>
                Comprehensive{" "}
                <span className='text-primary text-glow'>Solutions</span> for
                Modern Businesses
              </h1>
              <p className='text-lg text-gray-600 leading-relaxed max-w-xl'>
                We offer a full suite of telecommunication services designed to
                streamline your business communications and ensure reliable
                global connectivity.
              </p>
            </motion.div>
          </div>
          {/* Background Image */}
          <div className='absolute inset-0 z-[-1] flex justify-end items-center opacity-50'>
            <img
              src={bg1}
              alt='Background'
              className='h-full w-auto object-contain'
            />
          </div>
        </div>
      </section>

      {/* SMS Solutions */}
      <section className='bg-gray-50 py-16 mb-0 relative overflow-hidden'>
        <div className='container-wide relative z-10'>
          <Reveal direction='left'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-end'>
              <div className='space-y-6'>
                <span className='text-primary font-bold tracking-widest uppercase text-sm'>
                  Communication
                </span>
                <h2 className='heading-2'>High-Quality SMS Solutions</h2>
                <p className='text-lg text-gray-600'>
                  Reach your audience wherever they are with our robust SMS
                  infrastructure.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction='down' height='100%'>
            <div className=''>
              <p className='text-lg text-gray-600 mt-2'>
                Global Connectivity provides businesses with seamless, reliable,
                and scalable communication infrastructure to operate efficiently
                across international markets. Designed to support worldwide
                operations, our global connectivity solutions ensure
                uninterrupted communication, consistent performance, and secure
                data transmission across regions and networks.
              </p>
            </div>
          </Reveal>

          <div className='mt-4 mb-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center'>
              <Reveal direction='left'>
                <div className=''>
                  <p className='text-lg text-gray-600 mb-4 text-justify'>
                    With support for international messaging, crossborder voice
                    connectivity, and multiregion network access, Global
                    Connectivity helps organizations maintain a unified
                    communication experience for customers and teams around the
                    world. Built for high availability and low latency, the
                    solution enables businesses to deliver messages, calls, and
                    verification services with speed and reliability—regardless
                    of location.
                  </p>

                  <p className='text-lg text-gray-600 mb-4 text-justify'>
                    Whether expanding into new markets or managing global
                    customer engagement, enterprise global
                    connectivity simplifies communication complexity while
                    ensuring compliance, performance, and scalability. Ideal
                    for multinational enterprises, fintech platforms, e-commerce
                    businesses, and global service providers, Global
                    Connectivity empowers organizations to grow globally while
                    staying reliably connected.
                  </p>
                </div>
              </Reveal>
              <Reveal
                direction='right'
                height='100%'
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <div className='space-y-6'>
                  <div className='w-full' style={{ transform: "scale(1.4)" }}>
                    <DotLottieReact src={messageSend} loop autoplay />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Decorative Flash Call Elements on Left */}
          <div className='absolute right-[-30px] top-0 right-[5%] pointer-events-none -z-1 flex flex-col items-end'>
            <div className='relative'>
              <div className='flex items-center'>
                {/* Animated SMS Icon */}
                <motion.div
                  animate={{
                    scale: [0.7, 1.6, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className='text-primary opacity-60 ml-4 hidden md:block'>
                  <MessageSquare size={64} strokeWidth={1.5} />
                </motion.div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
            {smsServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className='bg-white p-6 md:p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group'>
                <div className='w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 md:mb-8 group-hover:bg-primary group-hover:text-white transition-colors'>
                  <service.icon size={32} />
                </div>
                <h3 className='text-xl md:text-2xl font-bold mb-4 text-gray-900'>
                  {service.title}
                </h3>
                <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Solutions */}
      <section className='bg-white py-16 mb-0 relative overflow-hidden'>
        <div className='container-wide relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-20'>
            <Reveal direction='left'>
              <div className='space-y-8'>
                <div className='space-y-6'>
                  <span className='text-primary font-bold tracking-widest uppercase text-sm'>
                    Connectivity
                  </span>
                  <h2 className='heading-2'>Premium Voice Solutions</h2>
                  <div className='space-y-4'>
                    <p className='text-lg text-gray-700 leading-relaxed'>
                      Voice Solutions provide a dependable and scalable way for
                      businesses to manage voice communication with customers,
                      teams, and partners. From inbound and outbound calling to
                      automated voice interactions, the solution helps
                      organizations improve responsiveness, streamline
                      operations, and maintain a consistent communication
                      experience across channels.
                    </p>
                    <p className='text-lg text-gray-700 leading-relaxed'>
                      Whether it’s supporting customer service calls, enabling
                      automated voice notifications, or handling high call
                      volumes with intelligent routing, Voice Solutions are
                      designed to deliver clear call quality and efficient call
                      handling. With business-focused features such as call
                      flows, IVR-style automation, and centralized management,
                      organizations can reduce manual effort while improving
                      service speed and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal
              direction='right'
              height='100%'
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <div className='relative'>
                <div className='w-full' style={{ transform: "scale(1.3)" }}>
                  <DotLottieReact src={communicationLottie} loop autoplay />
                </div>
              </div>
            </Reveal>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8'>
            {voiceServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className='bg-gray-900 p-6 md:p-8 lg:p-10 rounded-3xl text-white hover:bg-gray-800 transition-all hover:-translate-y-1 group border border-white/5'>
                <div className='w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary mb-6 md:mb-8 group-hover:bg-primary group-hover:text-white transition-colors'>
                  <service.icon size={32} />
                </div>
                <h3 className='text-xl md:text-2xl font-bold mb-4'>
                  {service.title}
                </h3>
                <p className='text-base md:text-lg text-gray-400 leading-relaxed'>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className='bg-primary py-24 overflow-hidden relative'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />
        <div className='container-wide relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-white'>
          <div className='max-w-2xl space-y-6'>
            <h2 className='text-4xl md:text-5xl font-bold'>
              Your Security is Our Priority
            </h2>
            <p className='text-xl text-white/90 leading-relaxed'>
              At TeleProLink, we prioritize clean, high-quality traffic. We work
              to ensure your messaging and voice traffic is routed securely,
              protecting your brand's reputation.
            </p>
          </div>
          <div className='flex-shrink-0'>
            <button className='bg-white text-primary hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105'>
              Learn About Security
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
