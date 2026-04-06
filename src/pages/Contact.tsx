import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Send,
  MessageSquare,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { Loader2, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    serviceType: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e6269acf-dd9b-4bdc-a02a-d485b435b965", // User needs to replace this
          ...formData,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          message: "",
          serviceType: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className='space-y-16 md:space-y-24 lg:space-y-32 py-10 lg:py-20'>
      <SEO
        title='Contact Us | Connect with TeleProLink'
        description='Contact TeleProLink for high-quality SMS and voice solutions. Headquartered in Central, Hong Kong, our team is ready to power your communication strategy.'
      />
      {/* Header Section */}
      <section className='container-wide'>
        <div className='max-w-3xl space-y-8'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            <h1 className='heading-1 mb-8'>
              Let's <span className='text-primary'>Connect</span> and Power Your
              Communication Strategy.
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed'>
              Ready to elevate your customer engagement? Our experts are here to
              help you integrate seamless SMS and Voice solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className='container-wide'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20'>
          {/* Contact Details Column */}
          <Reveal direction='right'>
            <div className='space-y-8 md:space-y-12'>
              <div className='space-y-8 md:space-y-10'>
                <div className='flex items-start space-x-4 md:space-x-6'>
                  <div className='w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0'>
                    <MapPin size={24} className='md:hidden' />
                    <MapPin size={28} className='hidden md:block' />
                  </div>
                  <div className='space-y-1 md:space-y-2'>
                    <h3 className='text-lg md:text-xl font-bold text-gray-900'>
                      Headquarters
                    </h3>
                    <p className='text-base md:text-lg text-gray-600'>
                      Central, Hong Kong
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 md:space-x-6'>
                  <div className='w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0'>
                    <Globe size={24} className='md:hidden' />
                    <Globe size={28} className='hidden md:block' />
                  </div>
                  <div className='space-y-1 md:space-y-2'>
                    <h3 className='text-lg md:text-xl font-bold text-gray-900'>
                      Website
                    </h3>
                    <p className='text-base md:text-lg text-gray-600'>
                      www.teleprolink.com
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 md:space-x-6'>
                  <div className='w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0'>
                    <Mail size={24} className='md:hidden' />
                    <Mail size={28} className='hidden md:block' />
                  </div>
                  <div className='space-y-1 md:space-y-2'>
                    <h3 className='text-lg md:text-xl font-bold text-gray-900'>
                      Direct Email
                    </h3>
                    <p className='text-base md:text-lg text-gray-600 hover:text-primary transition-colors cursor-pointer'>
                      sales@teleprolink.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form Column */}
          <Reveal direction='left' delay={0.4}>
            <div className='bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 border border-gray-100 relative overflow-hidden'>
              <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl' />

              {status === "success" ? (
                <div className='flex flex-col items-center justify-center space-y-6 py-12 text-center relative z-10'>
                  <div className='w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-inner'>
                    <CheckCircle size={48} />
                  </div>
                  <div className='space-y-2'>
                    <h3 className='text-2xl font-bold text-gray-900'>
                      Message Sent!
                    </h3>
                    <p className='text-gray-600 max-w-xs'>
                      Thank you for reaching out. Our team will get back to you
                      shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className='btn-secondary py-3 px-8'>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className='space-y-6 md:space-y-8 relative z-10'>
                  <div className='space-y-2'>
                    <label
                      htmlFor='serviceType'
                      className='text-xs md:text-sm font-bold text-gray-700 ml-1'>
                      Select Type
                    </label>
                    <div className='relative'>
                      <select
                        id='serviceType'
                        required
                        disabled={status === "loading"}
                        value={formData.serviceType}
                        onChange={handleChange}
                        className='w-full bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-2xl p-3 md:p-4 transition-all text-gray-900 text-sm md:text-base disabled:opacity-50 appearance-none cursor-pointer'>
                        <option value='' disabled>
                          Select a service
                        </option>
                        <option value='SMS Services'>SMS Services</option>
                        <option value='OTP Services'>OTP Services</option>
                        <option value='Voice Services'>Voice Services</option>
                      </select>
                      <div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400'>
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>

                  {formData.serviceType && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className='space-y-6 md:space-y-8'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
                        <div className='space-y-2'>
                          <label
                            htmlFor='name'
                            className='text-xs md:text-sm font-bold text-gray-700 ml-1'>
                            Full Name
                          </label>
                          <input
                            type='text'
                            id='name'
                            required
                            disabled={status === "loading"}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Your Name'
                            className='w-full bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-2xl p-3 md:p-4 transition-all text-gray-900 text-sm md:text-base disabled:opacity-50'
                          />
                        </div>
                        <div className='space-y-2'>
                          <label
                            htmlFor='company'
                            className='text-xs md:text-sm font-bold text-gray-700 ml-1'>
                            Company
                          </label>
                          <input
                            type='text'
                            id='company'
                            required
                            disabled={status === "loading"}
                            value={formData.company}
                            onChange={handleChange}
                            placeholder='Your Company'
                            className='w-full bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-2xl p-3 md:p-4 transition-all text-gray-900 text-sm md:text-base disabled:opacity-50'
                          />
                        </div>
                      </div>

                      <div className='space-y-2'>
                        <label
                          htmlFor='email'
                          className='text-xs md:text-sm font-bold text-gray-700 ml-1'>
                          Email Address
                        </label>
                        <input
                          type='email'
                          id='email'
                          required
                          disabled={status === "loading"}
                          value={formData.email}
                          onChange={handleChange}
                          placeholder='email@example.com'
                          className='w-full bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-2xl p-3 md:p-4 transition-all text-gray-900 text-sm md:text-base disabled:opacity-50'
                        />
                      </div>

                      <div className='space-y-2'>
                        <label
                          htmlFor='message'
                          className='text-xs md:text-sm font-bold text-gray-700 ml-1'>
                          Your Message
                        </label>
                        <textarea
                          id='message'
                          required
                          rows={5}
                          disabled={status === "loading"}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder='Tell us about your requirements'
                          className='w-full bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-2xl p-3 md:p-4 transition-all text-gray-900 resize-none text-sm md:text-base disabled:opacity-50'
                        />
                      </div>

                      {status === "error" && (
                        <p className='text-red-500 text-sm font-medium bg-red-50 p-3 rounded-xl border border-red-100'>
                          Oops! Something went wrong. Please try again later.
                        </p>
                      )}

                      <button
                        type='submit'
                        disabled={status === "loading"}
                        className='btn-primary w-full py-4 md:py-5 text-base md:text-lg font-bold flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed'>
                        {status === "loading" ? (
                          <>
                            <span>Sending...</span>
                            <Loader2 className='animate-spin' size={22} />
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={20} className='md:hidden' />
                            <Send size={22} className='hidden md:block' />
                          </>
                        )}
                      </button>
                    </motion.div>
                  )}
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer Info */}
      <section className='bg-gray-900 py-16 md:py-24 lg:py-32 text-center text-white relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[120px]' />
        <div className='container-wide relative z-10 space-y-6 md:space-y-8'>
          <MessageSquare
            size={48}
            className='text-primary mx-auto mb-6 md:mb-10 md:hidden'
          />
          <MessageSquare
            size={64}
            className='text-primary mx-auto mb-6 md:mb-10 hidden md:block'
          />
          <h2 className='heading-2 text-white'>Need immediate assistance?</h2>
          <p className='text-lg md:text-xl text-gray-400 max-w-2xl mx-auto'>
            Our team is available across multiple time zones to ensure your
            connectivity remains uninterrupted.
          </p>
          <div className='pt-6 md:pt-8'>
            <a
              href='mailto:sales@teleprolink.com'
              className='text-primary text-xl md:text-2xl font-bold hover:underline'>
              sales@teleprolink.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
