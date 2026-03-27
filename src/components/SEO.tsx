import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'TeleProLink | Global A2P SMS & CPaaS Solutions',
  description = 'TeleProLink provides high-quality A2P SMS, OTP services, and crystal-clear voice solutions. Headquartered in Hong Kong, we power global communication for startups and enterprises.',
  keywords = 'A2P SMS, CPaaS, OTP Services, Bulk SMS, Wholesale Voice, Telecom Solutions Hong Kong, Ashish Dhar, SMS Monetization, Global Messaging',
  canonical = 'https://www.teleprolink.com',
  ogType = 'website',
  ogImage = '/src/assets/tpl-round-logo.svg',
}) => {
  const siteTitle = title.includes('TeleProLink') ? title : `${title} | TeleProLink`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;
