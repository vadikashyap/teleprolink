import React from "react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";

const PrivacyPolicy = () => {
  return (
    <div className='py-10 lg:py-20'>
      <SEO
        title='Privacy Policy | TeleProLink'
        description='Learn how TeleProLink collects, uses, and protects your data in compliance with global telecom standards.'
      />
      <div className='container-wide max-w-4xl'>
        <Reveal>
          <h1 className='heading-1 mb-8'>Privacy Policy</h1>
          {/* <p className='text-gray-500 mb-12'>Last Updated: March 20, 2026</p> */}

          <div className='space-y-12 text-gray-700 leading-relaxed'>
            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                1. Introduction
              </h2>
              <p>
                TeleProLink ("we," "our," or "us"), headquartered in Central,
                Hong Kong, is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our A2P SMS, CPaaS, and Voice
                solutions.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                2. Information We Collect
              </h2>
              <p>
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>
                  Contact information (Name, Email, Company, Phone Number).
                </li>
                <li>
                  Message content and metadata required for routing and
                  delivery.
                </li>
                <li>
                  Technical data (IP address, browser type, device information)
                  when you access our platform.
                </li>
              </ul>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                3. How We Use Your Information
              </h2>
              <p>We use the collected information to:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>
                  Provide, operate, and maintain our telecommunication services.
                </li>
                <li>
                  Ensure secure delivery of critical messages like OTPs and
                  transactional alerts.
                </li>
                <li>
                  Combat fraud, smishing, and Artificially Inflated Traffic
                  (AIT).
                </li>
                <li>
                  Comply with legal obligations and telecom regulations in Hong
                  Kong and global markets.
                </li>
              </ul>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                4. Data Security
              </h2>
              <p>
                As a trusted telecom partner, security is our priority. We
                implement industry-standard technical and organizational
                measures to protect your data from unauthorized access,
                including encryption and secure routing protocols.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                5. Data Sharing
              </h2>
              <p>
                We do not sell your data. We only share information with carrier
                partners and service providers as necessary to route and deliver
                your messages globally.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                6. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact
                us at:
                <br />
                <strong>Email:</strong> info@teleprolink.com
                <br />
                <strong>Address:</strong> Central, Hong Kong
              </p>
            </section>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
