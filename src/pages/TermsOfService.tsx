import React from "react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";

const TermsOfService = () => {
  return (
    <div className='py-10 lg:py-20'>
      <SEO
        title='Terms of Service | TeleProLink'
        description="Read We the terms and conditions for using TeleProLink's SMS and voice communication services."
      />
      <div className='container-wide max-w-4xl'>
        <Reveal>
          <h1 className='heading-1 mb-8'>Terms of Service</h1>
          {/* <p className='text-gray-500 mb-12'>Last Updated: March 20, 2026</p> */}

          <div className='space-y-12 text-gray-700 leading-relaxed'>
            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the services provided by TeleProLink
                ("we," "us," or "our"), you agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use
                our services.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                2. Services Provided
              </h2>
              <p>
                TeleProLink provides A2P SMS, CPaaS, OTP services, and wholesale
                voice solutions. We reserve the right to modify or discontinue
                any aspect of our services at any time.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                3. User Responsibilities
              </h2>
              <p>When using our services, you agree to:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Provide accurate and complete registration information.</li>
                <li>
                  Comply with all applicable local and international laws
                  regarding telecommunications.
                </li>
                <li>
                  Ensure that all traffic sent through our platform is "clean"
                  and free from smishing, spam, or Artificially Inflated Traffic
                  (AIT).
                </li>
                <li>
                  Maintain the confidentiality of your account credentials.
                </li>
              </ul>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                4. Prohibited Content
              </h2>
              <p>
                You may not use our platform to transmit any content that is
                illegal, fraudulent, harassing, or harmful. We reserve the right
                to suspend accounts that violate these restrictions without
                prior notice.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                5. Payment and Billing
              </h2>
              <p>
                Fees for our services are billed based on usage or agreed-upon
                rates. All payments must be made in accordance with the billing
                terms specified in your service agreement.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                6. Limitation of Liability
              </h2>
              <p>
                TeleProLink shall not be liable for any indirect, incidental, or
                consequential damages arising from the use of our services,
                including but not limited to loss of data or delivery delays
                caused by carrier networks.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                7. Governing Law
              </h2>
              <p>
                These terms are governed by and construed in accordance with the
                laws of the Hong Kong Special Administrative Region.
              </p>
            </section>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default TermsOfService;
