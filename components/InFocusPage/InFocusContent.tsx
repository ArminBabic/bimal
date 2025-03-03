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

          <p className={infocus.attributes.contentC ? "pb-6" : "hidden"}>
            {infocus.attributes.contentC}{" "}
          </p>

          {/*   <div className="relative w-full h-[24rem] z-0 object-cover mb-6 ">
            <Image
              src={infocus.attributes.firstImage}
              className="rounded-lg"
              layout="fill"
              alt="infocus-image"
            />
          </div> */}

          <p className={infocus.attributes.contentD ? "pb-6" : "hidden"}>
            {infocus.attributes.contentD}
          </p>

          <p className={infocus.attributes.contentE ? "pb-6" : "hidden"}>
            {infocus.attributes.contentE}
          </p>
          <p className={infocus.attributes.contentF ? "pb-6" : "hidden"}>
            {infocus.attributes.contentF}
          </p>

          <p className={infocus.attributes.contentG ? "pb-6" : "hidden"}>
            {infocus.attributes.contentG}
          </p>
          <p className={infocus.attributes.contentH ? "pb-6" : "hidden"}>
            {infocus.attributes.contentH}
          </p>
          <p className={infocus.attributes.contentI ? "pb-6" : "hidden"}>
            {infocus.attributes.contentI}
          </p>
          <p className={infocus.attributes.contentJ ? "pb-6" : "hidden"}>
            {infocus.attributes.contentJ}
          </p>
          <p
            className={
              infocus.attributes.contentK
                ? "border-l-4 border-gray-500 pl-4 mb-6 italic rounded"
                : "hidden"
            }
          >
            {infocus.attributes.contentK}
          </p>
          <p className={infocus.attributes.contentL ? "pb-6" : "hidden"}>
            {infocus.attributes.contentL}
          </p>
          <p className={infocus.attributes.contentM ? "pb-6" : "hidden"}>
            {infocus.attributes.contentM}
          </p>
          <p className={infocus.attributes.contentN ? "pb-6" : "hidden"}>
            {infocus.attributes.contentN}
          </p>
          <p className={infocus.attributes.contentO ? "pb-6" : "hidden"}>
            {infocus.attributes.contentO}
          </p>
          <p className={infocus.attributes.contentP ? "pb-6" : "hidden"}>
            {infocus.attributes.contentP}
          </p>
          <p className={infocus.attributes.contentR ? "pb-6" : "hidden"}>
            {infocus.attributes.contentR}
          </p>
          <p className={infocus.attributes.contentS ? "pb-6" : "hidden"}>
            {infocus.attributes.contentS}
          </p>
          <p
            className={
              infocus.attributes.contentT
                ? "border-l-4 border-gray-500 pl-4 mb-6 italic rounded"
                : "hidden"
            }
          >
            {infocus.attributes.contentT}
          </p>
          <p className={infocus.attributes.contentU ? "pb-6" : "hidden"}>
            {infocus.attributes.contentU}
          </p>
          <p className={infocus.attributes.contentV ? "pb-6" : "hidden"}>
            {infocus.attributes.contentV}
          </p>
          <p className={infocus.attributes.contentZ ? "pb-6" : "hidden"}>
            {infocus.attributes.contentZ}
          </p>
          <p className={infocus.attributes.conclusion ? "pb-6" : "hidden"}>
            {infocus.attributes.conclusion}
          </p>
          <p className={infocus.attributes.textA ? "pb-6" : "hidden"}>
            {infocus.attributes.textA}
          </p>
          <p className={infocus.attributes.textB ? "pb-6" : "hidden"}>
            {infocus.attributes.textB}
          </p>
          <p className={infocus.attributes.textC ? "pb-6" : "hidden"}>
            {infocus.attributes.textC}
          </p>
          <p className={infocus.attributes.textD ? "pb-6" : "hidden"}>
            {infocus.attributes.textD}
          </p>
          <p
            className={
              infocus.attributes.textE
                ? "border-l-4 border-gray-500 pl-4 mb-6 italic rounded"
                : "hidden"
            }
          >
            {infocus.attributes.textE}
          </p>
          <p className={infocus.attributes.textF ? "pb-6" : "hidden"}>
            {infocus.attributes.textF}
          </p>
          <p className={infocus.attributes.textG ? "pb-6" : "hidden"}>
            {infocus.attributes.textG}
          </p>
          <p className={infocus.attributes.textH ? "pb-6" : "hidden"}>
            {infocus.attributes.textH}
          </p>
          <p
            className={
              infocus.attributes.textI
                ? "border-l-4 border-gray-500 pl-4 mb-6 italic rounded"
                : "hidden"
            }
          >
            {infocus.attributes.textI}
          </p>
          <p className={infocus.attributes.textJ ? "pb-6" : "hidden"}>
            {infocus.attributes.textJ}
          </p>
          <p className={infocus.attributes.textK ? "pb-6" : "hidden"}>
            {infocus.attributes.textK}
          </p>
          <p className={infocus.attributes.textL ? "pb-6" : "hidden"}>
            {infocus.attributes.textL}
          </p>

          <p
            className={
              infocus.attributes.textM
                ? "border-l-4 border-gray-500 pl-4 mb-6 italic rounded"
                : "hidden"
            }
          >
            {infocus.attributes.textM}
          </p>
          <p className={infocus.attributes.textN ? "pb-6" : "hidden"}>
            {infocus.attributes.textN}
          </p>
          <p className={infocus.attributes.textO ? "pb-6" : "hidden"}>
            {infocus.attributes.textO}
          </p>
        </div>
      </main>
    </div>
  );
};

export default InFocusContent;
