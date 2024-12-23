import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose, AiOutlineMail, AiFillYoutube } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebook, FaEnvelope } from "react-icons/fa";
import logo from "../public/logo7.png";
import logos from "../public/logo7.png";
import mobilelogo from "../public/logo7.png";
import Image from "next/image";

function Header() {
  const [nav, setNav] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const toggleHandler = () => setNav(!nav);

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
              <Link legacyBehavior href="/#projects">
                <a>Projects</a>
              </Link>
            </li>

            <li className={!scrollNav ? "ab " : "ab"}>
              <Link legacyBehavior href="/#faq">
                <a>Faq</a>
              </Link>
            </li>

            <li className={!scrollNav ? "ab " : "ab"}>
              <Link legacyBehavior href="/#blog">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <button
            onClick={(e) => scrollTo(e, "contact")}
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
              ? "fixed top-0  left-0 w-full sm:w-[75%] h-screen home  overflow-scroll py-2 bg-gradient-to-b from-white to-[#deeeee] ease-in duration-500"
              : "fixed top-0  left-[-200%] overflow-scroll  ease-in duration-500"
          }
        >
          <div className="">
            <div className="flex items-center justify-around w-full pt-4">
              <div className="text-[#303030]">
                <Link href="/">
                  <div
                    onClick={toggleHandler}
                    className="sm:hidden relative w-[60px] h-[60px]"
                  >
                    <Image
                      src={mobilelogo}
                      alt="logo"
                      fill
                      placeholder="blur"
                    />
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={toggleHandler}
                    className=" hidden sm:block relative w-[50px] h-[50px] cursor-pointer"
                  >
                    <Image src={logo} alt="logo" fill placeholder="blur" />
                  </div>
                </Link>
              </div>

              <div
                onClick={toggleHandler}
                className="relative  bg-white flex justify-center items-center text-secondary hover:bg-secondary hover:text-white    rounded-full p-2   cursor-pointer ease-in duration-300 shadow-md shadow-gray-500 "
              >
                <AiOutlineClose className="w-5 h-5 relative " />
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center ">
            <p className="text-[#303030] font-semibold  text-center text-base xs:text-xl  py-6 mt-8 border-b border-gray-700 w-full xs:w-[90%]">
              Empowering Your Investments
            </p>
          </div>

          <ul className=" flex flex-col justify-center gap-4 items-center py-12">
            <li
              onClick={toggleHandler}
              className="headerLinkMobile text-[#303030]  ab  cursor-pointer xs:text-lg sm:text-xl"
            >
              <Link href="/" onClick={(e) => scrollToTop()}>
                Home
              </Link>
            </li>

            <li
              onClick={toggleHandler}
              className="headerLinkMobile text-[#303030] ab cursor-pointer xs:text-lg sm:text-xl"
            >
              <Link legacyBehavior href="/#projects">
                <a>Projects</a>
              </Link>
            </li>

            <li
              onClick={toggleHandler}
              className="headerLinkMobile text-[#303030]   ab  cursor-pointer xs:text-lg sm:text-xl"
            >
              <Link legacyBehavior href="/#faq">
                <a>Faq</a>
              </Link>
            </li>

            <li
              onClick={toggleHandler}
              className="headerLinkMobile text-[#303030]   ab  cursor-pointer xs:text-lg sm:text-xl"
            >
              <Link legacyBehavior href="/#blog">
                <a>Blog</a>
              </Link>
            </li>

            <li
              onClick={toggleHandler}
              className="headerLinkMobile text-[#303030] ab   cursor-pointer xs:text-lg sm:text-xl"
            >
              <Link legacyBehavior href="/#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>

          <div className="flex justify-center my-12  gap-8  absolute left-1/2 bottom-2 transform -translate-x-1/2 -translate-y-1/2 ">
            <Link legacyBehavior href="https://www.linkedin.com">
              <a target="_blank">
                <RiLinkedinFill
                  aria-label="Visit LinkedIn account"
                  role="link"
                  className="relative bg-white rounded-full  w-6 h-6 sm:h-8 sm:w-8 p-1 hover:scale-110 hover:text-white hover:bg-blue-500 cursor-pointer text-blue-400 ease-in duration-300 shadow-md shadow-gray-500"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/">
              <a
                href="mailto:nantech.digital@gmail.com"
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

            <Link legacyBehavior href="https://www.facebook.com/">
              <a target="_blank">
                <FaFacebook
                  aria-label="Visit Facebook account"
                  role="link"
                  className="relative bg-white rounded-full  w-6 h-6 sm:h-8 sm:w-8 p-1 hover:scale-110 hover:text-white hover:bg-blue-500 cursor-pointer text-blue-400 ease-in duration-300 shadow-md shadow-gray-500"
                />
              </a>
            </Link>
            <Link legacyBehavior href="https://youtube.com">
              <a target="_blank">
                <AiFillYoutube
                  aria-label="Visit LinkedIn account"
                  role="link"
                  className="relative bg-white rounded-full  w-6 h-6 sm:h-8 sm:w-8 p-1 hover:scale-110 hover:text-white hover:bg-red-600 cursor-pointer text-red-500 ease-in duration-300 shadow-md shadow-gray-500"
                />
              </a>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Header;
