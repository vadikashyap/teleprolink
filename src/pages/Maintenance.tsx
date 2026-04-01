import { motion } from "framer-motion";
import { Settings, Clock, Mail } from "lucide-react";
import SEO from "../components/SEO";
import LogoText from "../assets/logo-text.svg";
import tplRoundLogo from "../assets/logo.svg";

const Maintenance = () => {
  return (
    <div className='min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-900 overflow-hidden relative'>
      <SEO
        title='Under Maintenance | TeleProLink'
        description="We are currently performing scheduled maintenance to improve our services. We'll be back shortly."
      />

      {/* Background decoration */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40'>
        <div className='absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]' />
        <div className='absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]' />
      </div>

      <div className='max-w-2xl w-full text-center relative z-10'>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-12 flex items-center justify-center'>
          <img
            src={tplRoundLogo}
            alt='TeleProLink Logo'
            className='h-22 w-auto group-hover:scale-105 transition-transform'
          />
          <img src={LogoText} alt='TeleProLink Logo' className='h-12 md:h-16' />
        </motion.div>

        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          className='mb-8 relative inline-block'>
          <div className='p-8 bg-white rounded-3xl border border-primary/20 shadow-xl shadow-primary/5 relative'>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
              <Settings className='w-20 h-20 text-primary' />
            </motion.div>
            <motion.div
              className='absolute -top-2 -right-2'
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <div className='bg-primary p-2 rounded-lg shadow-lg'>
                <Clock className='w-6 h-6 text-white' />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          <h1 className='text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900'>
            We're <span className='text-primary'>Updating</span> Our System
          </h1>
          <p className='text-slate-600 text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed'>
            TeleProLink is currently undergoing scheduled maintenance to bring
            you a better experience. We'll be back online very soon!
          </p>

          <div className='grid items-center justify-center gap-4 max-w-md mx-auto'>
            <a
              href='mailto:sales@teleprolink.com'
              className='bg-white border border-slate-200 p-4 rounded-2xl flex items-center space-x-4 hover:border-primary/30 transition-all group shadow-sm'>
              <div className='bg-primary/10 p-2 rounded-lg text-primary group-hover:scale-110 transition-transform'>
                <Mail className='w-5 h-5' />
              </div>
              <div className='text-left'>
                <p className='text-sm text-slate-500 font-medium'>
                  Need Support?
                </p>
                <p className='text-slate-900 font-semibold text-xs'>Email Us</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Footer info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className='mt-16 text-slate-400 text-sm font-medium'>
          &copy; {new Date().getFullYear()} TeleProLink. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default Maintenance;
