import React from "react";
import Image from "next/image";
import img1 from "../public/assets/member-1.png";
import img2 from "../public/assets/member-2.png";
import img3 from "../public/assets/member-3.png";
import img4 from "../public/assets/member-4.png";
import img5 from "../public/assets/member-5.png";
import img6 from "../public/assets/member-6.png";
const Team = () => {
  return (
    <div
      id="team"
      className="w-full flex justify-center  pt-10  pb-4 xl:pb-20 "
    >
      <section className="w-full max-w-[780px] lg:max-w-[960px] 2xl:max-w-[1250px] flex flex-col items-center gap-12">
        <header className="my-8 px-2 xs:px-6 sm:px-16 xl:px-6 2xl:px-16 flex flex-col items-center ">
          <h3 className=" uppercase text-[12px] font-semibold sm:text-base text-secondary py-2 px-2 max-w-[24rem] ">
            our team
          </h3>
          <p className=" text-2xl sm:text-4xl font-semibold  text-headings text-center max-w-[540px]">
            Our top-tier workforce
          </p>
        </header>
        <main className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-20 lg:gap-44 xl:gap-52">
          <article className="flex flex-col items-center gap-3 sm:mx-10 md:mx-16 lg:mx-0 cursor-pointer ">
            <div className="relative w-24 h-24 2xl:w-[130px] 2xl:h-[130px] border-2 border-secondary rounded-full">
              <Image src={img1} alt="person1" fill />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-headings font-bold text-[20px]">
                Ahmed Arimi
              </h4>
              <p className="text-[#343D48]">CEO & Founder</p>
            </div>
          </article>
          <article className="flex flex-col items-center gap-3 sm:mx-10 md:mx-16 lg:mx-0  cursor-pointer">
            <div className="relative w-24 h-24 2xl:w-[130px] 2xl:h-[130px] border-2 border-secondary rounded-full">
              <Image src={img2} alt="person1" fill />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-headings font-bold text-[20px]">
                Jasmine Kurtey
              </h4>
              <p className="text-[#343D48]">Co-Founder</p>
            </div>
          </article>
          <article className="flex flex-col items-center gap-3 sm:mx-10 md:mx-16 lg:mx-0 cursor-pointer">
            <div className="relative w-24 h-24 2xl:w-[130px] 2xl:h-[130px] border-2 border-secondary rounded-full">
              <Image src={img3} alt="person1" fill />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-headings font-bold text-[20px]">
                Jahja Mumic
              </h4>
              <p className="text-[#343D48]">Graphic Designer</p>
            </div>
          </article>
          <article className="flex flex-col items-center gap-3 sm:mx-10 md:mx-16 lg:mx-0  cursor-pointer">
            <div className="relative w-24 h-24 2xl:w-[130px] 2xl:h-[130px] border-2 border-secondary rounded-full">
              <Image src={img4} alt="person1" fill />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-headings font-bold text-[20px]">
                Todor Ilic
              </h4>
              <p className="text-[#343D48]">UI/UX Designer</p>
            </div>
          </article>
          <article className="flex flex-col items-center gap-3 sm:mx-10 md:mx-16 lg:mx-0  cursor-pointer">
            <div className="relative w-24 h-24 2xl:w-[130px] 2xl:h-[130px] border-2 border-secondary rounded-full">
              <Image src={img5} alt="person1" fill />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-headings font-bold text-[20px]">
                Armin Babic
              </h4>
              <p className="text-[#343D48]">Web Developer</p>
            </div>
          </article>
          <article className="flex flex-col items-center gap-3 sm:mx-10 md:mx-16 lg:mx-0  cursor-pointer">
            <div className="relative w-24 h-24 2xl:w-[130px] 2xl:h-[130px] border-2 border-secondary rounded-full">
              <Image src={img6} alt="person1" fill />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-headings font-bold text-[20px]">
                Neon Antunovic
              </h4>
              <p className="text-[#343D48]">Digital Marketing Specialist</p>
            </div>
          </article>
        </main>
      </section>
    </div>
  );
};

export default Team;
