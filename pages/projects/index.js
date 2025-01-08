import React from "react";

import Image from "next/image";
import Link from "next/link";

import data2 from "../../data/projects.json";

import PrivacyHeader from "../../components/PrivacyHeader";
import Footer from "../../components/Footer";

function index() {
  return (
    <>
      <PrivacyHeader />
      <main
        id="allprojects"
        className="w-full flex justify-center  pt-12 xs:pt-12 pb-4 xl:pb-16 "
      >
        <section className="w-full max-w-[1250px]">
          <header className="px-2 xs:px-6 sm:px-16 xl:px-6 2xl:px-16 flex flex-col items-center ">
            <h3 className=" uppercase text-[12px] font-semibold sm:text-3xl text-secondary py-2 px-2 max-w-[24rem] ">
              AVAILABLE PROJECTS
            </h3>
          </header>

          <div className="main my-8 ">
            <p className=" text-2xl font-semibold  text-headings text-center my-4">
              RES Projects
            </p>
            <ul className="cards-p ">
              {
                data2.projects
                  .filter((item, index) => item.category == "res")
                  .map(
                    (item, index) => (
                      console.log(item),
                      (
                        <Link
                          key={item.id}
                          href={`/projects/${item.id}`}
                          data-aos="fade-up"
                          data-aos-duration="200"
                          className="cards_item-p  duration-200 ease-in"
                        >
                          <div className="card-p">
                            <div className="card_image-p">
                              <Image
                                width={640}
                                height={500}
                                className="img"
                                src={item.attributes.mainImage}
                                alt="image"
                                loading="lazy"
                              />
                            </div>
                            <div className="card_content-p">
                              <h2 className="card_title-p">
                                {item.attributes.title.slice(0, 37)}...
                              </h2>
                              <p className="card_text-p">
                                {item.attributes.contentB.slice(0, 29)}...
                              </p>
                              <button className="btn-p card_btn-p">
                                Read More
                              </button>
                            </div>
                          </div>
                        </Link>
                      )
                    )
                  )
                /* .filter((item) => {
                  return console.log(item);
                }) */
              }
            </ul>
          </div>
          {/* investment projects */}

          <div className="main">
            <p className=" text-2xl  font-semibold  text-headings text-center my-4">
              Investment Projects
            </p>
            <ul className="cards-p ">
              {
                data2.projects
                  .filter((item, index) => item.category == "investment")
                  .map(
                    (item, index) => (
                      console.log(item),
                      (
                        <Link
                          key={item.id}
                          href={`/projects/${item.id}`}
                          data-aos="fade-up"
                          data-aos-duration="200"
                          className="cards_item-p  duration-200 ease-in"
                        >
                          <div className="card-p">
                            <div className="card_image-p">
                              <Image
                                width={640}
                                height={500}
                                className="img"
                                src={item.attributes.mainImage}
                                alt="image"
                                loading="lazy"
                              />
                            </div>
                            <div className="card_content-p">
                              <h2 className="card_title-p">
                                {item.attributes.title.slice(0, 37)}...
                              </h2>
                              <p className="card_text-p">
                                {item.attributes.contentB.slice(0, 29)}...
                              </p>
                              <button className="btn-p card_btn-p">
                                Read More
                              </button>
                            </div>
                          </div>
                        </Link>
                      )
                    )
                  )
                /* .filter((item) => {
                  return console.log(item);
                }) */
              }
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default index;
