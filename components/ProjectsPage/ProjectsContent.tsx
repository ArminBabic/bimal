import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const ProjectsContent = ({ projects }: any) => {
  return (
    <div className="max-w-screen-lg mx-auto ">
      <main className="mt-0">
        <div className="mb-4 h-[26rem] md:mb-0 w-full max-w-screen-lg mx-auto relative">
          <div className="absolute left-0 bottom-0 w-full h-full z-10"></div>
          <div className="absolute left-0 top-0 w-full h-full z-0 object-cover  bg-black/40 ">
            <Image
              src={projects.attributes.image}
              className="mix-blend-overlay"
              layout="fill"
              alt="projects-image"
            />
          </div>
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <a
              href="#"
              className="px-4 py-1 bg-secondary text-gray-100 inline-flex items-center justify-center mb-2"
            >
              {projects.attributes.category}
            </a>
            <h2 className="xs:text-xl lg:text-4xl font-bold text-gray-100 leading-tight">
              {projects.attributes.title}
            </h2>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-lg mx-auto text-lg leading-relaxed">
          <p className="pb-6">{projects.attributes.contentA}</p>

          <p className="pb-6">{projects.attributes.contentB}</p>

          <p className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            {projects.attributes.contentC}
          </p>

          {/*   <div className="relative w-full h-[24rem] z-0 object-cover mb-6 ">
            <Image
              src={projects.attributes.firstImage}
              className="rounded-lg"
              layout="fill"
              alt="projects-image"
            />
          </div>
 */}
          <p className="pb-6">{projects.attributes.contentD}</p>

          <p className="pb-6">{projects.attributes.contentE}</p>
          <p className="pb-6">{projects.attributes.contentF}</p>
          <section className="flex flex-col w-full">
              <article
              className={
                projects.attributes.content1
                  ? "flex  items-center gap-3  mb-6 italic rounded"
                  : "hidden"
              }
            >
              <div>
                <FaCheck className="w-6 h-5 text-secondary" />
              </div>
              <p> {projects.attributes.content1} </p>
            </article>
         
              <article
              className={
                projects.attributes.content2
                  ? "flex  items-center gap-3  mb-6 italic rounded"
                  : "hidden"
              }
            >
              <div>
                <FaCheck className="w-6 h-5 text-secondary" />
              </div>
              <p> {projects.attributes.content2} </p>
            </article>
           
                  <article
              className={
                projects.attributes.content3
                  ? "flex  items-center gap-3  mb-6 italic rounded"
                  : "hidden"
              }
            >
              <div>
                <FaCheck className="w-6 h-5 text-secondary" />
              </div>
              <p> {projects.attributes.content3} </p>
            </article>
                   <article
              className={
                projects.attributes.content4
                  ? "flex  items-center gap-3  mb-6 italic rounded"
                  : "hidden"
              }
            >
              <div>
                <FaCheck className="w-6 h-5 text-secondary" />
              </div>
              <p> {projects.attributes.content4} </p>
            </article>
            
            <article
              className={
                projects.attributes.content5
                  ? "flex  items-center gap-3  mb-6 italic rounded"
                  : "hidden"
              }
            >
              <div>
                <FaCheck className="w-6 h-5 text-secondary" />
              </div>
              <p> {projects.attributes.content5} </p>
            </article>
            <article
              className={
                projects.attributes.content6
                  ? "flex  items-center gap-3  mb-6 italic rounded"
                  : "hidden"
              }
            >
              <div>
                <FaCheck className="w-6 h-5 text-secondary" />
              </div>
              <p> {projects.attributes.content6} </p>
            </article>
            <article
              className={
                projects.attributes.content7
                  ? "flex  items-center gap-3  mb-6 italic rounded"
                  : "hidden"
              }
            >
              <div>
                <FaCheck className="w-6 h-5 text-secondary" />
              </div>
              <p> {projects.attributes.content7} </p>
            </article>
            <article
              className={
                projects.attributes.content8
                  ? "flex  items-center gap-3  mb-6 italic rounded"
                  : "hidden"
              }
            >
              <div>
                <FaCheck className="w-6 h-5 text-secondary" />
              </div>
              <p> {projects.attributes.content8} </p>
            </article>
          </section>

          <p className="pb-6">{projects.attributes.conclusion}</p>
        </div>
      </main>
    </div>
  );
};

export default ProjectsContent;
