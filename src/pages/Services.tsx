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
  ShieldCheck,
  Lock,
  Fingerprint,
  ShieldAlert,
  Globe,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import bg1 from "../assets/bg-1.png";
import Reveal from "../components/Reveal";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import audioPlaying from "../assets/lottiefiles/audio-playing.lottie";
import messageSend from "../assets/lottiefiles/message-send.lottie";
import communicationLottie from "../assets/lottiefiles/Communication.lottie";
import OPT from "../assets/lottiefiles/VerificationCode.lottie";
import radio from "../assets/lottiefiles/radio.lottie";

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

  const otpServices = [
    {
      title: "2FA & MFA",
      desc: "Implement two-factor and multi-factor authentication to strengthen identity verification.",
      icon: ShieldCheck,
    },
    {
      title: "Voice OTP",
      desc: "Reliable voice-based one-time passcodes for enhanced accessibility and security.",
      icon: PhoneIncoming,
    },
    {
      title: "Real-Time Validation",
      desc: "Instant verification of user identities to prevent fraud and unauthorized access.",
      icon: Lock,
    },
  ];

  const globalServices = [
    {
      title: "International Messaging",
      desc: "Seamlessly send and receive messages across international borders with high reliability.",
      icon: MessageSquare,
    },
    {
      title: "Cross-Border Voice",
      desc: "Connect globally with our high-quality cross-border voice connectivity solutions.",
      icon: PhoneIncoming,
    },
    {
      title: "Multi-Region Access",
      desc: "Access communication infrastructure across multiple regions with low latency.",
      icon: Network,
    },
  ];

  return (
    <div className='space-y-16 md:space-y-24 lg:space-y-32'>
      <SEO
        title='Our Services | A2P SMS, Voice, OTP & Global Connectivity'
        description="Explore TeleProLink's high-quality communication solutions: A2P SMS, Bulk Messaging, Premium Voice, secure OTP Security, and seamless Global Connectivity."
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
      <section
        id='sms'
        className='bg-gray-50 py-16 mb-0 relative overflow-hidden'>
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
      <section
        id='voice'
        className='bg-white py-16 mb-0 relative overflow-hidden'>
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

      {/* OTP Security */}
      {/* <section
        id='otp'
        className='bg-[#0a0a0c] py-24 mb-0 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-10 pointer-events-none'>
          <div className='absolute top-1/4 left-10 w-64 h-64 bg-primary rounded-full blur-[120px]' />
          <div className='absolute bottom-1/4 right-10 w-64 h-64 bg-primary rounded-full blur-[120px]' />
          <div
            className='absolute inset-0'
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className='container-wide relative z-10'>
          <div className='flex flex-col lg:flex-row gap-12 md:gap-16 items-center mb-20'>
            <Reveal direction='left' width='100%'>
              <div className='space-y-8 flex-1'>
                <div className='space-y-6'>
                  <div className='inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full'>
                    <ShieldCheck size={16} className='text-primary' />
                    <span className='text-primary font-bold tracking-widest uppercase text-xs'>
                      Identity Verification
                    </span>
                  </div>
                  <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                    Advanced <span className='text-primary'>OTP Security</span>{" "}
                    Infrastructure
                  </h2>
                </div>
              </div>
            </Reveal>
          </div>
          <div className='flex flex-col lg:flex-row gap-12 md:gap-16 items-center mb-20'>
            <Reveal direction='left' width='100%'>
              <div className='space-y-8 flex-1'>
                <div className='space-y-6'>
                  <div className='space-y-6'>
                    <p className='text-xl text-gray-400 leading-relaxed text-justify'>
                      OTP Security provides a robust and secure authentication
                      solution that helps businesses safeguard user access,
                      digital transactions, and sensitive operations. By using
                      One-Time Password (OTP) authentication, organizations can
                      verify user identities in real time and significantly
                      reduce the risk of unauthorized access and fraud.
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div className='flex items-start space-x-3 text-gray-300'>
                        <div className='mt-1 bg-primary/20 p-1 rounded-md'>
                          <Zap size={14} className='text-primary' />
                        </div>
                        <p className='text-sm'>Real-time Identity Validation</p>
                      </div>
                      <div className='flex items-start space-x-3 text-gray-300'>
                        <div className='mt-1 bg-primary/20 p-1 rounded-md'>
                          <Zap size={14} className='text-primary' />
                        </div>
                        <p className='text-sm'>Multi-Channel OTP Delivery</p>
                      </div>
                      <div className='flex items-start space-x-3 text-gray-300'>
                        <div className='mt-1 bg-primary/20 p-1 rounded-md'>
                          <Zap size={14} className='text-primary' />
                        </div>
                        <p className='text-sm'>Fraud Risk Mitigation</p>
                      </div>
                      <div className='flex items-start space-x-3 text-gray-300'>
                        <div className='mt-1 bg-primary/20 p-1 rounded-md'>
                          <Zap size={14} className='text-primary' />
                        </div>
                        <p className='text-sm'>Scalable Global Access</p>
                      </div>
                    </div>
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
                flex: "0 0 40%",
              }}>
              <div className='relative group'>
                <div className='absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500' />
                <div
                  className='relative w-full'
                  style={{ transform: "scale(1.4)" }}>
                  <DotLottieReact src={OPT} loop autoplay />
                </div>
              </div>
            </Reveal>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {otpServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className='relative bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] group hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-all duration-500' />

                <div className='w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20'>
                  <service.icon size={32} />
                </div>
                <h3 className='text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors'>
                  {service.title}
                </h3>
                <p className='text-lg text-gray-400 leading-relaxed'>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className='mt-20 p-12 bg-gradient-to-r from-primary/20 to-transparent border border-primary/20 rounded-[3rem] relative overflow-hidden'>
            <div className='absolute top-5 right-0 p-8 opacity-70'>
              <ShieldAlert size={120} className='text-white' />
            </div>
            <div className='relative z-10 max-w-3xl'>
              <h4 className='text-2xl font-bold text-white mb-4'>
                Compliance & Trust
              </h4>
              <p className='text-lg text-gray-400'>
                Ideal for banking and financial services, e-commerce platforms,
                enterprise applications, and customer onboarding, OTP Security
                helps businesses enhance security, meet compliance requirements,
                and build user trust.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Global Connectivity */}
      <section
        id='global'
        className='bg-white py-24 mb-0 relative overflow-hidden'>
        {/* World Map Background Pattern */}
        <div className='absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center'>
          <Globe size={800} strokeWidth={0.5} />
        </div>

        <div className='container-wide relative z-10'>
          <div className='flex flex-col items-center text-center max-w-4xl mx-auto mb-10 space-y-6'>
            <Reveal direction='down'>
              <span className='text-primary font-bold tracking-widest uppercase text-sm bg-primary/5 px-6 py-2 rounded-full'>
                Global Infrastructure
              </span>
            </Reveal>
            <Reveal direction='down' delay={0.2}>
              <h2 className='text-4xl md:text-6xl font-bold text-gray-900'>
                Connecting Your Business to the{" "}
                <span className='text-primary'>Whole World</span>
              </h2>
            </Reveal>
            <Reveal direction='down' delay={0.4}>
              <p className='text-xl text-gray-600 leading-relaxed'>
                Seamless, reliable, and scalable communication infrastructure
                designed to support worldwide operations across international
                markets.
              </p>
            </Reveal>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24'>
            <div className='order-2 lg:order-1'>
              <Reveal direction='left'>
                <div className='space-y-10'>
                  <div className=''>
                    <div className='flex items-start gap-6 p-6 rounded-3xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100'>
                      <div className='w-14 h-14 flex-shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center text-primary'>
                        <Globe size={28} />
                      </div>
                      <div className='space-y-2'>
                        <h4 className='text-xl font-bold text-gray-900'>
                          Unified Experience
                        </h4>
                        <p className='text-gray-600 leading-relaxed'>
                          Maintain a unified communication experience for
                          customers and teams around the world with multi-region
                          network access.
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start gap-6 p-6 rounded-3xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100'>
                      <div className='w-14 h-14 flex-shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center text-primary'>
                        <Zap size={28} />
                      </div>
                      <div className='space-y-2'>
                        <h4 className='text-xl font-bold text-gray-900'>
                          High Availability
                        </h4>
                        <p className='text-gray-600 leading-relaxed'>
                          Built for low latency and high reliability, ensuring
                          messages and calls reach their destination regardless
                          of location.
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start gap-6 p-6 rounded-3xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100'>
                      <div className='w-14 h-14 flex-shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center text-primary'>
                        <ShieldCheck size={28} />
                      </div>
                      <div className='space-y-2'>
                        <h4 className='text-xl font-bold text-gray-900'>
                          Global Compliance
                        </h4>
                        <p className='text-gray-600 leading-relaxed'>
                          Simplify communication complexity while ensuring
                          compliance, performance, and scalability across all
                          regions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className='order-1 lg:order-2 relative h-full'>
              <Reveal
                direction='right'
                height='100%'
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <div className='relative'>
                  <div className='w-full' style={{ transform: "scale(1.4)" }}>
                    <DotLottieReact src={radio} loop autoplay />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
            {globalServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className='bg-gray-50 p-8 md:p-12 rounded-[3rem] text-center group hover:bg-primary transition-all duration-500'>
                <div className='w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary mb-8 mx-auto shadow-sm group-hover:scale-110 transition-transform'>
                  <service.icon size={36} />
                </div>
                <h3 className='text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors'>
                  {service.title}
                </h3>
                <p className='text-lg text-gray-600 group-hover:text-white/80 transition-colors leading-relaxed'>
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
