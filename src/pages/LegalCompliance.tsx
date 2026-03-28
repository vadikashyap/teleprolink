import React from "react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { Mail, MapPin, Globe } from "lucide-react";

const LegalCompliance = () => {
  return (
    <div className='py-10 lg:py-20'>
      <SEO
        title='Legal & Compliance | TeleProLink'
        description='At TeleProLink, we are committed to providing secure, transparent, and compliant communication services. Learn how we manage data and ensure regulatory compliance.'
      />
      <div className='container-wide max-w-4xl'>
        <Reveal>
          <h1 className='heading-1 mb-8 text-gray-900'>Legal & Compliance</h1>
          
          <div className='space-y-12 text-gray-700 leading-relaxed'>
            <p className='text-lg'>
              At TeleProLink, we are committed to providing secure, transparent, and compliant communication services. This page outlines how we manage user data, protect privacy, and ensure our SMS, Voice, and CPaaS services are used responsibly.
            </p>

            <p className='font-semibold text-gray-900 italic'>
              TeleProLink is headquartered in Central, Hong Kong.
            </p>

            <section className='space-y-6'>
              <h2 className='text-2xl font-bold text-gray-900'>
                1. Privacy & Data Protection
              </h2>
              <p>
                We respect your privacy and safeguard your personal data using industry-standard practices.
              </p>
              
              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-gray-900'>What We Collect</h3>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>Basic account information (name, company, email)</li>
                  <li>Communication metadata (sender ID, destination number, timestamps, delivery status)</li>
                  <li>Website usage details (IP address, browser info, cookies)</li>
                </ul>
              </div>

              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-gray-900'>Message Content Handling</h3>
                <p>For SMS and Voice services:</p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>Message content is processed temporarily only for delivery and troubleshooting</li>
                  <li>It is automatically deleted after processing</li>
                  <li>We do not store message content permanently</li>
                  <li>Metadata is retained only for billing, compliance, and reporting</li>
                </ul>
              </div>

              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-gray-900'>Data Storage</h3>
                <p>
                  Your data is stored securely on servers located in Hong Kong, using encryption and access-control mechanisms.
                </p>
              </div>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                2. Terms of Service (Summary)
              </h2>
              <p>By using TeleProLink services, you agree to:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Use the platform responsibly and follow telecom regulations</li>
                <li>Not send spam, fraudulent messages, or harmful content</li>
                <li>Ensure all marketing messages have proper user consent</li>
                <li>Avoid activities such as smishing, phishing, or Artificially Inflated Traffic (AIT)</li>
              </ul>
              <p className='italic'>
                TeleProLink may suspend services in case of abuse, non-payment, or legal violations.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                3. Acceptable Use & Anti-Spam Policy
              </h2>
              <p>
                To maintain trust and network integrity, the following activities are strictly prohibited:
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Sending unsolicited messages</li>
                <li>Fraud, impersonation, or fake OTP traffic</li>
                <li>Bypassing carrier routes</li>
                <li>Offensive, illegal, or harmful content</li>
                <li>Using TeleProLink for scams, phishing, smishing, AIT, or malware</li>
              </ul>
              <p>
                You are responsible for ensuring that all recipients have opted in to receive communication from you.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                4. Security Practices
              </h2>
              <p>We follow strong security measures, including:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Encryption of sensitive data</li>
                <li>Secure API authentication</li>
                <li>Monitoring for fraud or unusual patterns</li>
                <li>Controlled internal access to customer information</li>
              </ul>
              <p>Our goal is to ensure clean, high-quality communication traffic.</p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                5. Cookie Usage
              </h2>
              <p>TeleProLink uses cookies to:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Improve website performance</li>
                <li>Analyze traffic</li>
                <li>Remember user preferences</li>
              </ul>
              <p>You can disable cookies anytime in your browser settings.</p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                6. Data Rights
              </h2>
              <p>Depending on your region, you may request:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Access to your personal data</li>
                <li>Correction or deletion</li>
                <li>Restriction of processing</li>
                <li>Export of your data</li>
              </ul>
              <p>To make a request, contact us anytime.</p>
            </section>

            <section className='space-y-6 pt-6 border-t border-gray-100'>
              <h2 className='text-2xl font-bold text-gray-900'>
                7. Contact for Legal or Compliance Queries
              </h2>
              <p>
                If you have questions regarding our legal policies, data handling, or compliance:
              </p>
              <div className='space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100'>
                <div className='flex items-center space-x-3'>
                  <Mail className='text-primary flex-shrink-0' size={20} />
                  <span className='font-semibold'>Email:</span>
                  <a href='mailto:support@teleprolink.com' className='text-primary hover:underline'>support@teleprolink.com</a>
                </div>
                <div className='flex items-center space-x-3'>
                  <MapPin className='text-primary flex-shrink-0' size={20} />
                  <span className='font-semibold'>Address:</span>
                  <span>Central, Hong Kong</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <Globe className='text-primary flex-shrink-0' size={20} />
                  <span className='font-semibold'>Website:</span>
                  <a href='https://www.teleprolink.com' target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>www.teleprolink.com</a>
                </div>
              </div>
            </section>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default LegalCompliance;
