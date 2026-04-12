import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Section from "./Section";
import Reveal from "../Reveal";
import { cn } from "../../utils/cn";
import faqLottie from "../../assets/lottiefiles/faq.lottie";

const faqData = [
  {
    question: "What is Global Connectivity?",
    answer:
      "Global Connectivity enables businesses to communicate seamlessly across countries through reliable international messaging, voice connectivity, and multi-region network support.",
  },
  {
    question: "Can these services be used for international customers?",
    answer:
      "Yes, Global Connectivity is designed specifically to support cross-border communication and global customer engagement.",
  },
  {
    question: "Does Global Connectivity ensure reliable performance worldwide?",
    answer:
      "Yes, the solution is built for high availability, low latency, and consistent performance across regions.",
  },
  {
    question: "Are your communication services secure?",
    answer:
      "Yes, all services are designed with security, reliability, and compliance in mind to protect business and customer data.",
  },
  {
    question: "Can these solutions be integrated with existing systems?",
    answer:
      "Yes, the solutions can be integrated with business applications, platforms, and workflows as required.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className='border-b border-gray-100 last:border-0'>
      <button
        className='w-full py-6 flex items-center justify-between text-left group'
        onClick={onClick}>
        <span
          className={cn(
            "text-lg font-semibold transition-colors duration-300",
            isOpen ? "text-primary" : "text-gray-900 group-hover:text-primary",
          )}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "flex-shrink-0 ml-4 p-1 rounded-full bg-gray-50 text-gray-400 group-hover:text-primary group-hover:bg-primary/5 transition-colors",
            isOpen && "text-primary bg-primary/5",
          )}>
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='overflow-hidden'>
            <div className='pb-6 text-gray-600 leading-relaxed'>{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className='bg-gray-50/30 py-20'>
      <div className='max-w-7xl mx-auto'>
        <Reveal>
          <div className='text-center mb-16'>
            <h2 className='inline-block px-6 py-2 bg-primary/10 text-primary font-bold text-lg rounded-full mb-6'>
              FAQ
            </h2>
            <h3 className='heading-2 mb-4'>Frequently Asked Questions</h3>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Find answers to common questions about our communication solutions
              and how we can help your business grow globally.
            </p>
          </div>
        </Reveal>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center'>
          {/* Left side - Lottie animation */}
          <Reveal
            direction='right'
            height='100%'
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <div className='w-full transform scale-100 lg:scale-[1.8] relative -top-[30px] lg:-top-[60px]'>
              <DotLottieReact
                src={faqLottie}
                loop
                autoplay
                className='w-full h-auto'
              />
            </div>
          </Reveal>

          {/* Right side - FAQ items */}
          <div className='bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100'>
            {faqData.map((item, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <FAQItem
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
