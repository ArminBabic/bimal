import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "@/styles/Home.module.css";

import Banner from "../components/Banner";

import Header from "../components/Header";
import Features from "../components/Features";
import OurServices from "../components/OurServices";
import QualityFeatures from "../components/QualityFeatures";
import CoreFeatures from "../components/CoreFeatures";
import HowItWorks from "../components/HowItWorks";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>nanTech Solution </title>
        <meta
          name="description"
          content="Looking for top web development services, design solutions, digital marketing, and testing? Look no further than Nantech! Our team of experts will work with you to build your online presence and create customized solutions tailored to your business needs."
        />
        <meta
          name="keywords"
          content="Web development Website design User experience (UX) User interface (UI) Mobile optimization E-commerce Content management systems (CMS) Custom solutions SEO SEM PPC advertising Social media marketing Email marketing Conversion rate optimization (CRO) A/B testing Quality assurance (QA) Testing and debugging"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/n.webp" />
        {/* share image */}
        <meta property="og:url" content="https://www.nantechsolution.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="nanTech Solution" />
        <meta
          property="og:description"
          content="Looking for top web development services, design solutions, digital marketing, and testing? Look no further than Nantech! Our team of experts will work with you to build your online presence and create customized solutions tailored to your business needs."
        />
        <meta property="og:image" content="/social.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="https://www.nantechsolution.com/"
        />
        <meta
          property="twitter:url"
          content="https://www.nantechsolution.com/"
        />
        <meta name="twitter:title" content="nanTech Solution" />
        <meta
          name="twitter:description"
          content="Looking for top web development services, design solutions, digital marketing, and testing? Look no further than Nantech! Our team of experts will work with you to build your online presence and create customized solutions tailored to your business needs."
        />
        <meta name="twitter:image" content="/social.png" />
      </Head>
      <main>
        {" "}
        <Header />
        <Banner />
        <Features />
        <OurServices />
        <QualityFeatures />
        {/*  <CoreFeatures /> */}
        <HowItWorks />
        {/*  <Team /> */}
        <Testimonials />
        <Contact />
        {/*   <Subscribe /> */}
        <Footer />
      </main>
    </>
  );
}
