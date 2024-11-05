import React from "react";

import data1 from "../../data/services.json";
import PrivacyHeader from "../../components/PrivacyHeader";
import Footer from "../../components/Footer";
import BlogContent from "../../components/blogPage/BlogContent";
const Listings = ({ data, list }) => {
  const recentListings = list.slice(0, 4);

  return (
    <div className="bg-white">
   
      <PrivacyHeader />

      <div className="flex flex-col items-center">
        <BlogContent blog={data[0]} />
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticPaths({ params, locale }) {
  const data = data1.services;

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
  const data = data1.services.filter((item) => item.id == params.slug);

  //recent listings

  const list = data1.services;

  //markdown a details

  return {
    props: {
      list,
      data,
    },
  };
}

export default Listings;
