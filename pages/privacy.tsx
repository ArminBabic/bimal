import Head from "next/head";

import PrivacyHeader from "../components/PrivacyHeader";
import Footer from "../components/Footer";
import Police from "../components/Police";

const Privacy = () => {
  return (
    <div className="w-full">
      <Head>
        <title>ProjectPro </title>
        <meta
          name="description"
          content="Empowering Your Investments
    Energy, Acquisitions, and Real Estate Projects Tailored for Success.Explore the Future of Sustainable Development and Profitable Investments in the Western Balkan"
        />
        <meta
          name="keywords"
          content="Empowering Your Investments
    Energy, Acquisitions, and Real Estate Projects Tailored for Success.Explore the Future of Sustainable Development and Profitable Investments in the Western Balkan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo2.png" />
        {/* share image */}
        <meta property="og:url" content="https://www.investinbalkan.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ProProject" />
        <meta
          property="og:description"
          content="Empowering Your Investments
    Energy, Acquisitions, and Real Estate Projects Tailored for Success.Explore the Future of Sustainable Development and Profitable Investments in the Western Balkan"
        />
        <meta property="og:image" content="/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="https://www.investinbalkan.com/"
        />
        <meta
          property="twitter:url"
          content="https://www.investinbalkan.com/"
        />
        <meta name="twitter:title" content="ProProject" />
        <meta
          name="twitter:description"
          content="Empowering Your Investments
    Energy, Acquisitions, and Real Estate Projects Tailored for Success.Explore the Future of Sustainable Development and Profitable Investments in the Western Balkan"
        />
        <meta name="twitter:image" content="/social.jpg" />
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
