import React from "react";
import logo from "../public/assets/cdzdesktop.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
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
    <div className="w-full flex justify-center pt-16 px-3">
      <section className="w-full max-w-[1420px] flex flex-col items-center gap-8 border-t-[1px] py-10 ">
        <div onClick={(e) => scrollToTop()}>
          <div className="  relative w-[201px] h-[75px] cursor-pointer">
            <Image src={logo} alt="logo" fill placeholder="blur" />
          </div>
        </div>

        <ul className="flex flex-col items-center xs:flex-row gap-5 xs:gap-5 sm:gap-7 lg:gap-12 text-[17px] xs:text-[15px] sm:text-[17px] font-[400] px-3 ">
          <li className=" cursor-pointer">
            <div onClick={(e) => scrollToTop()}>Home</div>
          </li>
          <li>
            <Link legacyBehavior href="/">
              <a onClick={(e) => scrollTo(e, "services")}>Services</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/">
              <a onClick={(e) => scrollTo(e, "qualityfeatures")}>Features</a>
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/">
              <a onClick={(e) => scrollTo(e, "contact")}>Contact</a>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link legacyBehavior href="/privacy">
              <span>Privacy</span>
            </Link>
          </li>
        </ul>
        <p className="text-center text-sm xs:text-base pt-5">
          Copyright © 2023 All rights reserved nanTech
        </p>
      </section>
    </div>
  );
};

export default Footer;
