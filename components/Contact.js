/* import React, { useState, useRef } from "react";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";

const Contact = () => {
  return (
    <div id="contact" className="flex justify-center bg-white  ">
      <section className="w-full mx-auto max-w-[450px] sm:max-w-[590px] 2xl:max-w-[1120px] flex flex-col md:flex-row md:max-w-[900px] lg:max-w-[1000px] md:items-start md:px-4 items-center  gap-8 px-3 py-16">
        <div className="flex flex-col md:flex-1 space-y-8 w-full sm:max-w-[590px] md:max-w-[690px] ">
          <div className="w-full">
            <h2 className="text-lg xl:text-xl text-secondary w-full font-md tracking-wide mb-2">
              Get in touch
            </h2>
            <p className="pt-2 text-[#000] font-bold text-2xl xl:text-3xl relative z-10 max-w-[300px]">
              Share your thoughts with us
            </p>
          </div>
          <div className="flex flex-col space-y-4 sm:space-y-6   relative z-10">
            <div className="flex  gap-2 text-sm w-full  xs:text-start">
              <HiLocationMarker className="text-secondary w-7 h-7 mb-1 relative" />
              <div className="flex flex-col ">
                <p className="font-semibold text-lg">Address</p>
                <p className="text-sm   italic ">Trg Mladih ,Brcko</p>
              </div>
            </div>
            <div className=" text-sm  flex  w-full   px-1 justify-start gap-3">
              <FaEnvelope className="text-secondary w-5 h-6 relative" />
              <div className="flex flex-col ">
                <p className="font-semibold text-lg">Email</p>
                <p className="text-sm   italic ">kurtovicg.kenan@gmail.com</p>
              </div>
            </div>
            <div className=" flex  px-1 gap-2 text-sm ">
              <GiRotaryPhone className="text-secondary w-6 h-6 relative" />
              <div className="flex flex-col ">
                <p className="font-semibold text-lg">Phone</p>
                <p className="text-sm   italic "> +387 61 917 739</p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-[100%]  sm:max-w-[590px] md:w-[690px] rounded-lg"
        >
          <div className="rounded-lg">
            <iframe
              src="https://maps.google.com/maps?q=Brcko%20Trg%20Mladih,%20Brcko&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="525"
              title="location map"
              loading="lazy"
              placeholder="blur"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
 */

import React, { useState, useRef, useContext } from "react";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";
import { GiRotaryPhone, GiPaperPlane } from "react-icons/gi";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { RiLinkedinFill, RiSendPlaneFill, RiPhoneFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from 'next/router';






import emailjs from "@emailjs/browser";

import toast, { Toaster } from "react-hot-toast";

const notify = () => {
  toast.error("Please make sure to fill out the entire form!");
};

const notifyNetwork = () => {
  toast.error("Something went wrong with email services!");
};

const notifySuccess = () => {
  toast.success(" Message was sent!");
};

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const form = useRef();

  const [errors, setErrors] = useState(false);
  const [send, setSend] = useState(false);
  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send Message");

  // Setting success or failure messages states

  const formValidty =
    fullname.length > 0 && email.includes("@") && message.length > 0;

  const sendEmail = (e) => {
    
    e.preventDefault();
    if (formValidty) {
     
      setButtonText("Sending...");
      emailjs
        .sendForm(
          "service_45fgwdv",
          "template_460pemk",
          form.current,
          "1JJMrN8wOdT6wa--I"
        )
        .then(
          (result) => {
            e.target.reset();

            setFullname("");
            setEmail("");
            setMessage("");
            notifySuccess();
            setButtonText("Send Message");
          },
          (error) => {
            console.log(error.text);

            notifyNetwork();
            setButtonText("Send Message");
          }
        );
    } else {
      notify();
    }
  };


  const router = useRouter();


// Query parameters 
const query = router.query;
const queryslug=query.slug





  return (
    <div id="contact" className="flex flex-col items-center bg-white pt-8 ">
      <Toaster position="top-center" reverseOrder={true} />
      <section className="w-full lg:w-[1024px] lg:px-5 xl:w-[1100px] 2xl:w-[1290px] 3xl:w-[1420px]  flex flex-col lg:flex-row items-center gap-8 lg:gap-8 2xl:gap-2 xl:items-start mt-8 mb-16 px-2 xs:px-6 sm:px-8 ">
        <div
          data-aos="fade-down"
          data-aos-duration="400"
          className="w-[100%] sm:w-[590px] md:w-[690px]  bg-[#fff] flex flex-col items-center pb-1   rounded-lg"
        >
          <div className="antialiased bg-white w-full rounded-lg ">
            <div className="flex w-full justify-center items-center">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0  2xl:flex-row gap-4 lg:gap-0 2xl:gap-2 lg:pb-[94px]  bg-[#fff] w-full  py-5 px-3   rounded-lg shadow-lg text-[#303030] overflow-hidden">
                <div className="flex flex-col md:flex-1 space-y-8 pt-2  ">
                  <div className="w-full">
                    <h2 className="text-lg xl:text-xl text-secondary w-full font-md tracking-wide mb-2">
                      Get in touch
                    </h2>
                    <p className="pt-2 text-[#000] font-bold text-2xl xl:text-3xl relative z-10 max-w-[300px]">
                      Share your thoughts with us
                    </p>
                  </div>
                  <div className="flex flex-col space-y-4 sm:space-y-6   relative z-10">
                    <div className="flex  gap-2 text-sm w-full  xs:text-start">
                      <HiLocationMarker className="text-secondary w-7 h-7 mb-1 relative" />
                      <div className="flex flex-col ">
                        <p className="font-semibold text-lg">Address</p>
                        <p className="text-sm   italic ">Trg mladih 7d ,Brcko</p>
                      </div>
                    </div>
                    <div className=" text-sm  flex  w-full   px-1 justify-start gap-3">
                      <FaEnvelope className="text-secondary w-5 h-6 relative" />
                      <div className="flex flex-col ">
                        <p className="font-semibold text-lg">Email</p>
                        <p className="text-sm   italic ">
                          info@investinbalkan.com
                        </p>
                      </div>
                    </div>
                    <div className=" flex  px-1 gap-2 text-sm ">
                      <RiPhoneFill className="text-secondary w-6 h-6 relative" />
                      <div className="flex flex-col ">
                        <p className="font-semibold text-lg">Phone</p>
                        <p className="text-sm   italic "> 049/206-182</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute invisible md:visible z-0 w-40 h-40 bg-secondary rounded-full -right-28 -top-28"></div>
                  <div className="absolute invisible md:visible z-0 w-40 h-40 bg-secondary rounded-full -left-[86px] -bottom-16"></div>
                  <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 lg:px-3 lg:py-[40px] text-gray-600 md:w-full">
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className="flex flex-col space-y-4"
                    >
                      <div>
                        <label htmlFor="fullname" className="text-sm">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={fullname}
                          onChange={(e) => {
                            setFullname(e.target.value);
                          }}
                          placeholder="Enter your name..."
                          name="user_name"
                          className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm">
                          Email
                        </label>
                        <input
                          name="user_email"
                          placeholder="Enter your email..."
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          type="email"
                          className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="text-sm">
                          Message
                        </label>
                        <textarea
                          placeholder="Enter your message..."
                          name="message"
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                          className="ring-1 ring-gray-300 pb-16 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-secondary"
                        ></textarea>
                       <input type="hidden" name="internal_tag" value={queryslug} />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center group justify-center gap-3 pr-0 self-end bg-secondary text-white   border-2 border-secondary font-bold rounded-lg px-6 py-2 uppercase text-sm ease-in duration-300"
                      >
                        {buttonText}
                        <GiPaperPlane className=" text-white relative w-5 h-5 rotate-[15deg] ease-in duration-500 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:-translate-x-1" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="200"
          className="w-[100%] sm:w-[590px] md:w-[690px] rounded-lg"
        >
          <div className="rounded-lg">
            <iframe
              src="https://maps.google.com/maps?q=Brcko%20Trg%20Mladih,%20Brcko&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="585"
              title="location map"
              loading="lazy"
              placeholder="blur"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
