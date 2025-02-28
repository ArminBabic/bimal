import React from "react";
import Image from "next/image";
const InFocusContent = ({ infocus }: any) => {
  return (
    <div className="max-w-screen-lg mx-auto ">
      <main className="mt-0">
        <div className="mb-4 h-[26rem] md:mb-0 w-full max-w-screen-lg mx-auto relative">
          <div className="absolute left-0 bottom-0 w-full h-full z-10"></div>
          <div className="absolute left-0 top-0 w-full h-full z-0 object-cover  bg-black/40 ">
            <Image
              src={infocus.attributes.image}
              className="mix-blend-overlay"
              layout="fill"
              alt="infocus-image"
            />
          </div>
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <h2 className="text-4xl font-bold text-gray-100 leading-tight">
              {infocus.attributes.title}
            </h2>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-lg mx-auto text-lg leading-relaxed">
          <p className="pb-6">{infocus.attributes.contentA}</p>
          <p className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            {infocus.attributes.contentB}
          </p>

          <p className="pb-6">{infocus.attributes.contentC}</p>

          {/*   <div className="relative w-full h-[24rem] z-0 object-cover mb-6 ">
            <Image
              src={infocus.attributes.firstImage}
              className="rounded-lg"
              layout="fill"
              alt="infocus-image"
            />
          </div> */}

          <p className="pb-6">{infocus.attributes.contentD}</p>

          <p className="pb-6">{infocus.attributes.contentE}</p>
          <p className="pb-6">{infocus.attributes.contentF}</p>

          <p className="pb-6">{infocus.attributes.contentG}</p>
          <p className="pb-6">{infocus.attributes.contentH}</p>
          <p className="pb-6">{infocus.attributes.contentI}</p>
          <p className="pb-6">{infocus.attributes.contentJ}</p>
          <p className=" border-l-4 border-gray-500 pl-4 mb-6 italic rounded ">
            {infocus.attributes.contentK}
          </p>
          <p className="pb-6">{infocus.attributes.contentL}</p>
          <p className="pb-6">{infocus.attributes.contentM}</p>
          <p className="pb-6">{infocus.attributes.contentN}</p>
          <p className="pb-6">{infocus.attributes.contentO}</p>
          <p className="pb-6">{infocus.attributes.contentP}</p>
          <p className="pb-6">{infocus.attributes.contentR}</p>
          <p className="pb-6">{infocus.attributes.contentS}</p>
          <p className=" border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            {infocus.attributes.contentT}
          </p>
          <p className="pb-6">{infocus.attributes.contentU}</p>
          <p className="pb-6">{infocus.attributes.contentV}</p>
          <p className="pb-6">{infocus.attributes.contentZ}</p>
          <p className="pb-6">{infocus.attributes.conclusion}</p>
          <p className="pb-6">{infocus.attributes.textA}</p>
          <p className="pb-6">{infocus.attributes.textB}</p>
          <p className="pb-6">{infocus.attributes.textC}</p>
          <p className="pb-6">{infocus.attributes.textD}</p>
          <p className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            {infocus.attributes.textE}
          </p>
          <p className="pb-6">{infocus.attributes.textF}</p>
          <p className="pb-6">{infocus.attributes.textG}</p>
          <p className="pb-6">{infocus.attributes.textH}</p>
          <p className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            {infocus.attributes.textI}
          </p>
          <p className="pb-6">{infocus.attributes.textJ}</p>
          <p className="pb-6">{infocus.attributes.textK}</p>
          <p className="pb-6">{infocus.attributes.textL}</p>

          <p className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            {infocus.attributes.textM}
          </p>
          <p className="pb-6">{infocus.attributes.textN}</p>
          <p className="pb-6">{infocus.attributes.textO}</p>
        </div>
      </main>
    </div>
  );
};

export default InFocusContent;
