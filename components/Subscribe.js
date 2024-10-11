import React from "react";
import { BiSupport } from "react-icons/bi";
import { TbMessages, TbBulb } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";

const Subscribe = () => {
  return (
    <div className="w-full flex flex-col items-center px-3 gap-16">
      {" "}
      <section className="w-full max-w-[1140px] pt-1  px-2 xs:px-6 sm:px-16 xl:px-2 2xl:px-16  gap-6 xl:gap-10 2xl:gap-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  place-items-center ">
        <article
          className="max-w-[250px] xs:w-[380px] sm:w-[256px] md:w-[310px]
            xl:w-[250px] h-[256px] 2xl:w-[17.5rem]   flex flex-col gap-4 justify-center items-center text-center 
            cursor-pointer "
        >
          <div className=" relative flex items-center justify-center rounded-3xl w-16 h-16">
            <BsPeopleFill className=" text-secondary w-[3.5rem] h-[3.5rem] relative" />
          </div>
          <h4 className="font-bold text-[#303030]  text-lg">
            Join the Network
          </h4>
          <p className="text-base text-[#303030]  ">
            Subscribe to our blog to receive expert tips, advice, and insights
            from our experts.
          </p>
        </article>
        <article
          className="max-w-[250px] xs:w-[380px] sm:w-[256px] md:w-[310px]
            xl:w-[250px] h-[256px] 2xl:w-[17.5rem]   flex flex-col gap-4 justify-center items-center text-center 
            cursor-pointer "
        >
          <div className=" relative flex items-center justify-center rounded-3xl w-16 h-16">
            <TbMessages className=" text-secondary w-[3.5rem] h-[3.5rem] relative" />
          </div>
          <h4 className="font-bold text-[#303030]  text-lg">
            Digital Conversation
          </h4>
          <p className="text-base text-[#303030]  ">
            Reach a broader audience, expand their brand presence, and gather
            valuable feedback.
          </p>
        </article>{" "}
        <article
          className="max-w-[250px] xs:w-[380px] sm:w-[256px] md:w-[310px]
            xl:w-[250px] h-[256px] 2xl:w-[17.5rem]   flex flex-col gap-4 justify-center items-center text-center 
            cursor-pointer "
        >
          <div className=" relative flex items-center justify-center rounded-3xl w-16 h-16">
            <TbBulb className=" text-secondary w-[3.5rem] h-[3.5rem] relative" />
          </div>
          <h4 className="font-bold text-[#303030]  text-lg">Great Ideas</h4>
          <p className="text-base text-[#303030]  ">
            We foster a culture of creativity and encourage employees to think
            outside the box.
          </p>
        </article>
      </section>
      <section className="bg-secondary w-full max-w-[1140px] flex flex-col gap-6 items-center rounded-xl py-12 sm:py-20 px-4">
        <h4 className=" text-2xl sm:text-4xl font-semibold  text-white text-center max-w-[540px]">
          Join our community
        </h4>
        <p className="text-white text-base sm:text-lg text-center max-w-[400px] sm:max-w-[520px]">
          Keep up-to-date with the latest news and join our community of readers
          by subscribing to our blog
        </p>

        {/* mobile form */}
        <form className="mt-8 flex flex-col gap-2 w-full sm:hidden max-w-[400px]">
          <input
            type="email"
            placeholder="Enter your email address"
            className="rounded-[3rem] pl-6 pr-6 py-4 outline-none w-full placeholder:text-secondary placeholder:text-center"
          />

          <button className="text-white bg-[#343D48] w-full rounded-[30px] border-2 py-4 hover:bg-white hover:text-secondary border-secondary ease-in duration-300">
            Join Us
          </button>
        </form>

        {/* desktop form */}
        <form className="bg-white rounded-[3rem] py-1 items-center gap-20 mt-12 hidden sm:flex">
          <input
            type="email"
            placeholder="Enter your email address"
            className="rounded-[3rem] pl-6 pr-20 py-5 outline-none placeholder:text-secondary"
          />
          <button className="text-white bg-secondary rounded-[30px] border-2 py-2 sm:py-4 px-8 mx-1 hover:bg-white hover:text-secondary border-secondary ease-in duration-300">
            Join Us
          </button>
        </form>
      </section>
    </div>
  );
};

export default Subscribe;
