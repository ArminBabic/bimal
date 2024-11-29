import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "@/styles/Home.module.css";

import Banner from "../components/Banner";

import Header from "../components/Header";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";

import OurServices from "../components/OurServices";
import QualityFeatures from "../components/QualityFeatures";
import CoreFeatures from "../components/CoreFeatures";
import HowItWorks from "../components/HowItWorks";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
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
        <link rel="icon" href="/n.webp" />
        {/* share image */}
        <meta property="og:url" content="https://www.nantechsolution.com/" />
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
          content="https://www.nantechsolution.com/"
        />
        <meta
          property="twitter:url"
          content="https://www.nantechsolution.com/"
        />
        <meta name="twitter:title" content="ProProject" />
        <meta
          name="twitter:description"
          content="Empowering Your Investments
Energy, Acquisitions, and Real Estate Projects Tailored for Success.Explore the Future of Sustainable Development and Profitable Investments in the Western Balkan"
        />
        <meta name="twitter:image" content="/social.jpg" />
      </Head>
      <main>
        {" "}
        <Header />
        <Banner />
        <Services />
        <AboutUs />
        <CoreFeatures />
        <OurServices />
        <QualityFeatures />
        <HowItWorks />
        <Projects />
        {/*    <ServicesNews/> */}
        {/*  <Team /> */}
        {/*   <Testimonials /> */}
        <Contact />
        <Subscribe />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
