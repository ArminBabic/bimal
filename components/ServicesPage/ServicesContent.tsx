import React from "react";
import Image from "next/image";
const ServicesContent = ({ services }: any) => {
  return (
    <div className="max-w-screen-lg mx-auto ">
      <main className="mt-0">
        <div className="mb-4 h-[26rem] md:mb-0 w-full max-w-screen-lg mx-auto relative">
          <div className="absolute left-0 bottom-0 w-full h-full z-10"></div>
          <div className="absolute left-0 top-0 w-full h-full z-0 object-cover  bg-black/40 ">
            <Image
              src={services.attributes.image}
              className="mix-blend-overlay"
              layout="fill"
              alt="services-image"
            />
          </div>
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <a
              href="#"
              className="px-4 py-1 bg-secondary text-gray-100 inline-flex items-center justify-center mb-2"
            >
              {services.attributes.category}
            </a>
            <h2 className="text-4xl font-bold text-gray-100 leading-tight">
              {services.attributes.title}
            </h2>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-lg mx-auto text-lg leading-relaxed">
          <p className="pb-6">{services.attributes.contentA}</p>

          <p className="pb-6">{services.attributes.contentB}</p>

          <p className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            {services.attributes.contentC}
          </p>

          <div className="relative w-full h-[24rem] z-0 object-cover mb-6 ">
            <Image
              src={services.attributes.firstImage}
              className="rounded-lg"
              layout="fill"
              alt="services-image"
            />
          </div>

          <p className="pb-6">{services.attributes.contentD}</p>

          <p className="pb-6">{services.attributes.contentE}</p>
          <p className="pb-6">{services.attributes.contentF}</p>
          <p className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            {services.attributes.contentG}
          </p>
          <p className="pb-6">{services.attributes.conclusion}</p>
        </div>
      </main>
    </div>
  );
};

export default ServicesContent;
