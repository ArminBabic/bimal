import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose, AiOutlineMail, AiFillYoutube } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebook, FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa";
import logo from "../public/logo7.png";
import logos from "../public/logo7.png";
import mobilelogo from "../public/logo7.png";
import Image from "next/image";

function Header() {
  const [nav, setNav] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const toggleHandler = () => setNav(!nav);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenF, setIsOpenF] = useState(false);

  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isOpenFMobile, setIsOpenFMobile] = useState(false);

  /*  */

  useEffect(() => {
    const changeNavbar = () => {
      if (window.scrollY >= 30) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    if (typeof window !== "undefined") {
      // Client-side-only code
      window.addEventListener("scroll", changeNavbar);
    }
  }, []);

  const scrollTo = (e, id) => {
    const element = document.getElementById(id);
    e.preventDefault();
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={
        !scrollNav
          ? "w-full  flex justify-center bg-white py-2"
          : " w-full flex justify-center shadow-2xl bg-white sticky top-0 py-2 z-50"
      }
    >
      <nav className="w-full max-w-[1400px]  flex justify-between items-center py-[.5rem] px-2 xs:px-6 sm:px-8 lg:px-16 ">
        <Link href="/" className="text-[#303030]  ">
          <div
            onClick={(e) => scrollToTop()}
            className="sm:hidden relative w-[100px] h-[100px] cursor-pointer"
          >
            <Image src={logos} alt="logo" fill placeholder="blur" />
          </div>

          <div
            onClick={(e) => scrollToTop()}
            className=" hidden sm:block relative w-[100px] h-[100px] cursor-pointer"
          >
            <Image src={logos} alt="logo" fill placeholder="blur" />
          </div>
        </Link>

        <div className="hidden lg:block">
          <ul className="flex gap-12 text-[17px] font-[400] text-headings ">
            <li
              className={
                !scrollNav ? "ab  cursor-pointer" : "ab cursor-pointer"
              }
            >
              <Link href="/" onClick={(e) => scrollToTop()}>
                Home
              </Link>
            </li>

            <li className={!scrollNav ? "ab " : "ab"}>
              <Link legacyBehavior href="/#about">
                <a>About Us</a>
              </Link>
            </li>

            <li
              className={`relative z-50 ${!scrollNav ? "ab " : "ab"}`}
              onMouseLeave={() => setIsOpen(false)}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="cursor-pointer">
                <a onClick={(e) => {}}>Projects</a>
              </div>
              {isOpen && (
                <ul className="absolute  mx-auto left-0 top-8 w-[6.5rem] bg-white rounded-lg shadow-2xl  transition-all duration-200 flex flex-col  px-1 py-2 border-2 border-gray-100">
                  <li className={`relative ${!scrollNav ? "ab py-2" : "ab"}`}>
                    <Link legacyBehavior href="/projects">
                      <a className="py-2 ">RES</a>
                    </Link>
                  </li>
                  <li className={`relative ${!scrollNav ? "ab py-2" : "ab"}`}>
                    <Link legacyBehavior href="/projects#investment">
                      <a className="text-white ">Investment</a>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              className={`relative z-50 ${!scrollNav ? "ab " : "ab"}`}
              onClick={() => setIsOpenF(!isOpenF)}
              onMouseLeave={() => setIsOpenF(false)}
            >
              <div className="cursor-pointer">
                <a onClick={(e) => {}}>Investor Resources</a>
              </div>
              {isOpenF && (
                <ul className="absolute  mx-auto left-0 top-8 w-[6.5rem] bg-white rounded-md shadow-2xl  transition-all duration-200 flex flex-col  px-1 py-2 border-2 border-gray-100">
                  <li className={!scrollNav ? "ab py-2" : "ab"}>
                    <Link legacyBehavior href="/#infocus">
                      <a>In Focus</a>
                    </Link>
                  </li>
                  <li className={!scrollNav ? "ab py-2" : "ab"}>
                    <Link legacyBehavior href="/#faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <button
            className={
              !scrollNav
                ? "text-secondary hover:bg-secondary rounded-[30px] border-2 py-3 px-12 border-secondary hover:text-white ease-in duration-300"
                : "text-secondary hover:bg-secondary rounded-[30px] border-2 py-3 px-12 border-secondary hover:text-white ease-in duration-300"
            }
          >
            <Link legacyBehavior href="/#contact">
              <a>Contact Us</a>
            </Link>
          </button>
        </div>

        <div
          className={
            !scrollNav
              ? "lg:hidden relative w-8 h-8 cursor-pointer hover:text-[#6ec4d5] ease-in duration-300  shadow-white flex items-center mt-3 mb-2 justify-center"
              : "lg:hidden relative w-8 h-8 cursor-pointer hover:text-[#6ec4d5] ease-in duration-300  shadow-white flex items-center mt-3 mb-2 justify-center"
          }
          onClick={toggleHandler}
        >
          <CgMenuRight className="h-8 w-8 " />
        </div>
      </nav>

      <div
        className={
          nav
            ? "fixed top-0 left-0 z-[100] w-full h-screen bg-black/70 ease-in duration-500 lg:hidden"
            : ""
        }
      >
        <aside
          className={
            nav
              ? "fixed top-0  left-0 w-full sm:w-[75%] h-screen home  overflow-scroll  bg-gradient-to-b from-white to-[#deeeee] ease-in duration-500"
              : "fixed top-0  left-[-200%] overflow-scroll  ease-in duration-500"
          }
        >
          <div className="">
            <div className="flex items-center justify-between px-10 w-full ">
              <div className="text-[#303030]">
                <div className="cursor-pointer" onClick={(e) => scrollToTop()}>
                  <div
                    onClick={toggleHandler}
                    className="sm:hidden relative w-[50px] h-[50px]"
                  >
                    <Image src={logos} alt="logo" fill placeholder="blur" />
                  </div>
                </div>
                <div onClick={(e) => scrollToTop()} className="cursor-pointer">
                  {" "}
                  <div
                    onClick={toggleHandler}
                    className=" hidden sm:block relative w-[46px] h-[46px] cursor-pointer"
                  >
                    <Image src={logos} alt="logo" fill placeholder="blur" />
                  </div>
                </div>
              </div>

              <div
                onClick={toggleHandler}
                className="relative  bg-white flex justify-center items-center text-secondary hover:bg-secondary hover:text-white    rounded-full p-2   cursor-pointer ease-in duration-300 shadow-md shadow-gray-500 "
              >
                <AiOutlineClose className="w-5 h-5 relative " />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12 mt-6">
            <div className=" flex items-center justify-center ">
              <p className="text-headings font-semibold  text-center text-base xs:text-xl  py-6 mt-8 border-b border-gray-700 w-full xs:w-[90%]">
                Empowering Your Investments
              </p>
            </div>
            <ul className=" flex flex-col justify-center gap-4 items-center py-12">
              <li
                onClick={toggleHandler}
                className="headerLinkMobile text-[#303030]  ab  cursor-pointer text-xl sm:text-2xl"
              >
                <div onClick={(e) => scrollToTop()}>Home</div>
              </li>

              <li
                onClick={toggleHandler}
                className="headerLinkMobile text-[#303030] ab  cursor-pointer text-xl sm:text-2xl"
              >
                <Link legacyBehavior href="/#about">
                  <a>About Us</a>
                </Link>
              </li>

              {/* mobile projects ropdwon */}
              <li
                onMouseLeave={() => setIsOpenMobile(false)}
                onClick={() => setIsOpenMobile(!isOpenMobile)}
                className="headerLinkMobile text-[#303030] ab  cursor-pointer text-xl sm:text-2xl"
              >
                <Link legacyBehavior href="/">
                  <a>Projects</a>
                </Link>
              </li>
              <li
                onClick={toggleHandler}
                className={` ${
                  isOpenMobile
                    ? "ab headerLinkMobile text-[#303030] flex  cursor-pointer text-xl sm:text-2xl transition-all ease-in-out"
                    : "hidden"
                }`}
              >
                <Link legacyBehavior href="/projects">
                  <a>RES</a>
                </Link>
              </li>
              <li
                onClick={toggleHandler}
                className={` ${
                  isOpenMobile
                    ? "ab headerLinkMobile text-[#303030] flex  cursor-pointer text-xl sm:text-2xl transition-all ease-in-out"
                    : "hidden"
                }`}
              >
                <Link legacyBehavior href="/projects#investment">
                  <a>Investment</a>
                </Link>
              </li>

              {/* investment resource mobile */}
              <li
                onMouseLeave={() => setIsOpenFMobile(false)}
                onClick={() => setIsOpenFMobile(!isOpenFMobile)}
                className="headerLinkMobile text-[#303030] ab  cursor-pointer text-xl sm:text-2xl"
              >
                <Link legacyBehavior href="/">
                  <a>Investor Resources</a>
                </Link>
              </li>

              <li
                onClick={toggleHandler}
                className={` ${
                  isOpenFMobile
                    ? "ab headerLinkMobile text-[#303030] flex  cursor-pointer text-xl sm:text-2xl transition-all ease-in-out"
                    : "hidden"
                }`}
              >
                <Link legacyBehavior href="/#infocus">
                  <a>Investment</a>
                </Link>
              </li>
              <li
                onClick={toggleHandler}
                className={` ${
                  isOpenFMobile
                    ? "ab headerLinkMobile text-[#303030] flex  cursor-pointer text-xl sm:text-2xl transition-all ease-in-out"
                    : "hidden"
                }`}
              >
                <Link legacyBehavior href="/#faq">
                  <a>FAQ</a>
                </Link>
              </li>

              <li
                onClick={toggleHandler}
                className="headerLinkMobile text-[#303030] ab   cursor-pointer text-xl sm:text-2xl"
              >
                <Link legacyBehavior href="/">
                  <a onClick={(e) => scrollTo(e, "contact")}>Contact</a>
                </Link>
              </li>
            </ul>

            <div className="flex justify-center my-12  gap-8  absolute left-1/2 bottom-2 transform -translate-x-1/2 -translate-y-1/2 ">
              <Link legacyBehavior href={`tel:38761917739`}>
                <a target="_blank">
                  <FaPhone
                    aria-label="Visit LinkedIn account"
                    role="link"
                    className="relative bg-white rounded-full  w-6 h-6 sm:h-8 sm:w-8 p-1 hover:scale-110 hover:text-white hover:bg-blue-500 cursor-pointer text-blue-400 ease-in duration-300 shadow-md shadow-gray-500"
                  />
                </a>
              </Link>
              <Link legacyBehavior href="/">
                <a
                  href="mailto:nantechs@gmail.com"
                  target="_blank "
                  rel="noreferrer"
                >
                  <FaEnvelope
                    aria-label="Send me email"
                    role="link"
                    className="relative bg-white rounded-full  w-6 h-6 sm:h-8 sm:w-8 p-1 hover:scale-110 hover:text-white hover:bg-red-600 cursor-pointer text-red-500 ease-in duration-300 shadow-md shadow-gray-500"
                  />
                </a>
              </Link>

              <Link
                legacyBehavior
                href="https://www.facebook.com/nantechsolution"
              >
                <a target="_blank">
                  <FaFacebook
                    aria-label="Visit Facebook account"
                    role="link"
                    className="relative bg-white rounded-full  w-6 h-6 sm:h-8 sm:w-8 p-1 hover:scale-110 hover:text-white hover:bg-blue-500 cursor-pointer text-blue-400 ease-in duration-300 shadow-md shadow-gray-500"
                  />
                </a>
              </Link>
              <Link legacyBehavior href="https://instagram.com">
                <a target="_blank">
                  <FaInstagram
                    aria-label="Visit LinkedIn account"
                    role="link"
                    className="relative bg-white rounded-full  w-6 h-6 sm:h-8 sm:w-8 p-1 hover:scale-110 hover:text-white hover:bg-red-600 cursor-pointer text-red-500 ease-in duration-300 shadow-md shadow-gray-500"
                  />
                </a>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Header;
