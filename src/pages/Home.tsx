import React from "react";
import SEO from "../components/SEO";
import Hero from "../components/home/Hero";
import WhoWeServe from "../components/home/WhoWeServe";
import WhyChoose from "../components/home/WhyChoose";
import FAQ from "../components/home/FAQ";
import Achievements from "../components/Achievements";

const HomePage = () => {
  return (
    <div className='space-y-16'>
      <SEO
        title='TeleProLink | Powering Your Communication Strategy'
        description='Headquartered in Hong Kong, TeleProLink provides high-quality A2P SMS and crystal-clear voice solutions designed for startups, enterprises, and fintech companies.'
      />
      {/* Hero Section */}
      <Hero />

      {/* Who We Serve */}
      <WhoWeServe />

      {/* Achievements Section */}
      <Achievements />

      {/* Why Choose TeleProLink */}
      <WhyChoose />

      {/* FAQ Section */}
      <FAQ />

      {/* Connected Clients Section */}
      {/* <ConnectedClients /> */}
    </div>
  );
};

export default HomePage;
