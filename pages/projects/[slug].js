import React from "react";

import data1 from "../../data/projects.json";
import PrivacyHeader from "../../components/PrivacyHeader";
import Footer from "../../components/Footer";
import ProjectsContent from "../../components/ProjectsPage/ProjectsContent";
const Listings = ({ data, list }) => {
  const recentListings = list.slice(0, 4);

  return (
    <div className="bg-white">
      <PrivacyHeader />

      <div className="flex flex-col items-center">
        <ProjectsContent projects={data[0]} />
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticPaths({ params, locale }) {
  const data = data1.projects;

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
  const data = data1.projects.filter((item) => item.id == params.slug);

  //recent listings

  const list = data1.projects;

  //markdown a details

  return {
    props: {
      list,
      data,
    },
  };
}

export default Listings;
