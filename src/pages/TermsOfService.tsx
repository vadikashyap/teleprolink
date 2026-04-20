import React from "react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";

const TermsOfService = () => {
  return (
    <div className='py-10 lg:py-20'>
      <SEO
        title='Terms of Service | TeleProLink'
        description="Read the terms and conditions for using TeleProLink's services."
      />
      <div className='container-wide max-w-4xl'>
        <Reveal>
          <h1 className='heading-1 mb-8'>Terms of Service</h1>

          <div className='space-y-12 text-gray-700 leading-relaxed'>
            <section className='space-y-4'>
              <p>
                By accessing this Website, you acknowledge that you have read,
                understood and accepted the following terms. In case you do not
                understand or agree to any of the terms, you should immediately
                exit this Website. TELEPROLINK reserves the right to update the
                TERMS OF USE (TOU) at any time without notice to you. With
                regard to any behaviour of violation against the provisions of
                the TOU, TELEPROLINK shall have the right to seek legal and fair
                remedies.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                Limited License
              </h2>
              <p>
                All contents on this Website are copyrighted by TELEPROLINK
                unless otherwise stated. Without prior written consent of
                TELEPROLINK or other parties, any content on the Website shall
                not be reproduced, distributed, photocopied, played, linked or
                transmitted with super-links, loaded into other servers in
                “mirroring method”, stored in information retrieval system, or
                otherwise used for any commercial purpose by any person, unless
                otherwise downloaded or reproduced for private and
                non-commercial purposes (provided however, that such use shall
                not include any revision to the content and the copyright
                notices and other proprietary notices shall be retained in the
                same form and manner as on the original).
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>Disclaimer</h2>
              <p>
                This Website and its contents are provided for your convenience
                only. Although TELEPROLINK has attempted to provide accurate
                information on this Website, it assumes no obligation or
                responsibility regarding the accuracy of the information
                whatsoever. TELEPROLINK may change the contents available on
                this Website or the products mentioned at any time without
                notice. ALL INFORMATION PROVIDED ON THIS WEBSITE IS PROVIDED ON
                AN “AS IS” BASIS WITHOUT WARRANTIES, GUARANTEES OR
                REPRESENTATIONS OF ANY KIND. TELEPROLINK HEREBY EXPRESSLY
                DISCLAIMS, TO THE FULLEST EXTENT PERMITTED BY LAW, ALL EXPRESS,
                IMPLIED, STATUTORY OR OTHER WARRANTIES, GUARANTEES OR
                REPRESENTATIONS, INCLUDING BUT NOT LIMITED TO, THE IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                OR NONINFRINGEMENT.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                Limitation of Liability
              </h2>
              <p>
                Neither TELEPROLINK nor any of its affiliates, subsidiaries,
                directors, agents, employees or other representatives shall be
                liable for any direct, indirect, special, incidental,
                consequential, punitive, and/or exemplary damages including
                without limitation, loss of profits or revenues, loss of data,
                and/or loss of business, in connection with this Website or the
                use of or inability to use this Website or reliance on the
                contents contained herein, even if TELEPROLINK is advised of the
                possibility of such damages.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                Product Availability
              </h2>
              <p>
                The availability of the products and services described on this
                Website, and the descriptions of such products and services, may
                vary in your country or area. Please consult with TELEPROLINK’s
                local sales representatives or agents for specific products
                and/or services information. There may be certain times that
                products and services may not be available due to maintenance or
                malfunction of the Websites or such other reasons beyond the
                control of TELEPROLINK. TELEPROLINK makes no warranty that the
                products and services will be available at the times stated
                herein.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                Links to Third Parties
              </h2>
              <p>
                Although links to third party Websites may be contained in this
                Website for your convenience, TELEPROLINK shall not be
                responsible for any content of any such Websites. You might need
                to review and agree to applicable rules of use when using such
                Websites. In addition, a link to a third-party Website does not
                imply that TELEPROLINK endorses the site or the products or
                services referenced therein.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                Applicable Law and Jurisdiction
              </h2>
              <p>
                This TOU shall be governed by, construed and interpreted in
                accordance with the laws of Hong Kong, without giving effect to
                principles of conflicts of law therewith.
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                Company Profile and Logotypes Usage Policy
              </h2>
              <p>
                The TELEPROLINK company profile and logotypes are the sole and
                exclusive property of Teleprolink . Your use of any company
                profile and/or logo implies acceptance of, and agreement with,
                the terms of this policy. Media and partners are encouraged to
                download the TELEPROLINK company profile as a reference only and
                may not use for any other commercial purpose without permission
                from the Teleprolink . User groups may use the logo in their
                materials, as long as they don’t make any profit from it and
                comply with usage guidelines.
              </p>
            </section>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default TermsOfService;
