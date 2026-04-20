import React, { useState } from "react";
import { Send, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { Loader2, CheckCircle, ChevronDown } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// @ts-ignore
import contactLottie from "../assets/lottiefiles/contect.lottie";
// @ts-ignore
import contactUsLottie from "../assets/lottiefiles/Contact-US.lottie";
import upImg from "../assets/up.png";

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
          access_key: " ", // User needs to replace this
          ...formData,
          subject: `Contact Form Submission from ${formData.name}`,
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
    >
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
      <section className='container-wide'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}>
              <h1 className='heading-1 mb-8'>
                Let's <span className='text-primary'>Connect</span> and Power
                Your Communication Strategy.
              </h1>
              <p className='text-xl text-gray-600 leading-relaxed'>
                Ready to elevate your customer engagement? Our experts are here
                to help you integrate seamless SMS and Voice solutions.
              </p>
            </motion.div>
          </div>
          <div className='flex justify-center lg:justify-end'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className='w-full'>
              <DotLottieReact src={contactLottie} loop autoplay />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className='container-wide relative'>
        <div className='absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none' />
        <div className='absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none' />

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start'>
          {/* Left Column: Contact Info */}
          <div className='lg:col-span-2 space-y-12'>
            <div className='space-y-6'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                Get in <span className='text-primary'>Touch</span>
              </h2>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Have a specific inquiry or need a custom solution? Our team is
                ready to discuss how we can help your business grow.
              </p>
              <div className='w-full 1 h-[500px]'>
                <DotLottieReact src={contactUsLottie} loop autoplay />
              </div>
            </div>
          </div>

          {/* Right Column: Form Column */}
          <div className='lg:col-span-3'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-100/50 relative overflow-hidden min-h-[600px]'>
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
                        <option value='Voice Services'>Voice Services</option>
                        <option value='Global Connectivity'>
                          Global Connectivity
                        </option>
                      </select>
                      <div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400'>
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>

                  {formData.serviceType ? (
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
                  ) : (
                    <div className='flex items-center bg-gray-50/70 border border-gray-100 rounded-2xl p-4 md:p-6'>
                      <img
                        src={upImg}
                        alt='Select service type'
                        className='w-[100px] md:w-[120px] mx-auto md:mx-0'
                      />
                      <p className='text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-left'>
                        Please select a service type (SMS, Voice, or Global) to
                        proceed with the contact form.
                      </p>
                    </div>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className='bg-gray-900 py-16 md:py-24 lg:py-32 text-center text-white relative overflow-hidden mb-0'>
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
