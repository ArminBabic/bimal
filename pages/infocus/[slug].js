import React from "react";
import Head from "next/head";
import data1 from "../../data/infocus.json";
import PrivacyHeader from "../../components/PrivacyHeader";
import Footer from "../../components/Footer";
import InFocusContent from "../../components/InFocusPage/InFocusContent";
const Listings = ({ data, list }) => {
  const recentListings = list.slice(0, 4);

  return (
    <div className="bg-white">
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
      <PrivacyHeader />

      <div className="flex flex-col items-center">
        <InFocusContent infocus={data[0]} />
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticPaths({ params, locale }) {
  const data = data1.infocus;

  return {
    paths: data.map((listing) => ({
      params: {
        slug: `${listing.id}`,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ locale, params }) {
  const data = data1.infocus.filter((item) => item.id == params.slug);

  //recent listings

  const list = data1.infocus;

  //markdown a details

  return {
    props: {
      list,
      data,
    },
  };
}

export default Listings;
