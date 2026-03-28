import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

// Logo imports
import elfoLogo from "../assets/connected-clients/Elfo.jpg";
import oakTelecomLogo from "../assets/connected-clients/Oak-Telecom.jpg";
import rouchMagLogo from "../assets/connected-clients/RouchMag.jpg";
import smartcomtechLogo from "../assets/connected-clients/SMartcomtech.jpg";
import bluemessaggioLogo from "../assets/connected-clients/bluemessaggio.jpg";
import cherryNetLogo from "../assets/connected-clients/cherry-net.jpg";
import cyvoratechLogo from "../assets/connected-clients/cyvoratech.jpg";
import goldexTelecomLogo from "../assets/connected-clients/goldex-telecom.jpg";
import muasrtLogo from "../assets/connected-clients/muasrt_pvt_ltd.jpg";
import telcodexLogo from "../assets/connected-clients/telcodex.jpg";
import vazqLogo from "../assets/connected-clients/vazq.jpg";
import vivaldiLogo from "../assets/connected-clients/vivaldi_telecom.jpg";

const clients = [
  { name: "Elfo", logo: elfoLogo },
  { name: "Oak Telecom", logo: oakTelecomLogo },
  { name: "RouchMag", logo: rouchMagLogo },
  { name: "SMartcomtech", logo: smartcomtechLogo },
  { name: "Bluemessaggio", logo: bluemessaggioLogo },
  { name: "Cherry Net", logo: cherryNetLogo },
  { name: "Cyvoratech", logo: cyvoratechLogo },
  { name: "Goldex Telecom", logo: goldexTelecomLogo },
  { name: "Muasrt Pvt Ltd", logo: muasrtLogo },
  { name: "Telcodex", logo: telcodexLogo },
  { name: "Vazq", logo: vazqLogo },
  { name: "Vivaldi Telecom", logo: vivaldiLogo },
];

// Doubling the list for infinite scroll
const duplicatedClients = [...clients, ...clients];

const ConnectedClients = () => {
  return (
    <section className='py-20 bg-gray-50/50 overflow-hidden border-y border-gray-100'>
      <div className='container-wide'>
        <Reveal>
          <div className='text-center mb-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Trusted by <span className='text-primary'>Global Leaders</span>
            </h2>
            <div className='w-20 h-1.5 bg-primary mx-auto rounded-full mb-6' />
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              We empower industry-leading companies with our carrier-grade
              connectivity solutions. Join our network of successful global
              partners.
            </p>
          </div>
        </Reveal>
      </div>

      <div className='relative flex overflow-hidden group'>
        <motion.div
          className='flex whitespace-nowrap py-2'
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}>
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className='flex items-center justify-center mx-8 min-w-[150px] md:min-w-[200px]'>
              <div className='relative group/logo transition-all duration-500 hover:scale-110'>
                <div className='absolute inset-0 bg-primary/5 blur-xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity' />
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className='min-h-20 md:min-h-30 w-auto object-contain grayscale opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-500 relative z-10 filter'
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth fading at edges */}
        <div className='absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none' />
        <div className='absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none' />
      </div>
    </section>
  );
};

export default ConnectedClients;
