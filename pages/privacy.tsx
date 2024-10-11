import Head from "next/head";

import PrivacyHeader from "../components/PrivacyHeader";
import Footer from "../components/Footer";
import Police from "../components/Police";

const Privacy = () => {
  return (
    <div className="w-full">
      <Head>
        <title>nanTech Solution </title>
        <meta
          name="description"
          content="Looking for top-notch web development services, design solutions, digital marketing, and testing? Look no further than Nantech! Our team of experts will work with you to build your online presence and create customized solutions tailored to your business needs."
        />
        <meta
          name="keywords"
          content="Web development Website design User experience (UX) User interface (UI) Mobile optimization E-commerce Content management systems (CMS) Custom solutions SEO SEM PPC advertising Social media marketing Email marketing Conversion rate optimization (CRO) A/B testing Quality assurance (QA) Testing and debugging"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/n.webp" />
      </Head>

      <div className="w-full">
        <PrivacyHeader />

        <Police />
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
