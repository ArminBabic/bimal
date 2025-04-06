import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const notify = () => {
  toast.error("Please make sure to enter your email!");
};

const notifyNetwork = () => {
  toast.error("Something went wrong with email services!");
};

const notifySuccess = () => {
  toast.success("You are subscribed!");
};

const Subscribe = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [buttonText, setButtonText] = useState("Subscribe");

  // Regex for validating email
  const formValidty = email.includes("@") && /\S+@\S+\.\S+/.test(email);

  const sendEmail = (e) => {
    e.preventDefault();
    
    // If email is valid
    if (formValidty) {
      setButtonText("Sending...");

      emailjs
        .sendForm(
          "service_45fgwdv",
          "template_tqb5mqv",
          form.current,
          "1JJMrN8wOdT6wa--I"
        )
        .then(
          (result) => {
            e.target.reset();
            setEmail("");
            notifySuccess();
            setButtonText("Subscribe");
          },
          (error) => {
            console.log(error.text);
            notifyNetwork();
            setButtonText("Subscribe");
          }
        );
    } else {
      notify();
    }
  };

  return (
    <div id="subscribe" className="w-full flex flex-col items-center my-16 px-3 gap-16">
      <Toaster position="top-center" reverseOrder={true} />
      <section className="bg-secondary w-full max-w-[1380px] flex flex-col gap-6 items-center rounded-xl py-12 sm:py-20 px-4">
        <h4 className=" text-2xl sm:text-4xl font-semibold  text-white text-center max-w-[540px]">
          Join our community
        </h4>
        <p className="text-white text-base sm:text-lg text-center max-w-[400px] sm:max-w-[520px]">
          Keep up-to-date with the latest news and join our community of readers
          by subscribing to our blog
        </p>

        {/* Mobile form */}
        <form ref={form} onSubmit={sendEmail} className="mt-8 flex flex-col gap-2 w-full sm:hidden max-w-[400px]">
          <input
            type="email"
            htmlFor="email"
            name="user_email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-[3rem] border-4 border-white pl-6 pr-6 py-4 outline-none w-full placeholder:text-secondary placeholder:text-center"
          />
          <button type="submit" className="text-white bg-secondary border-white w-full rounded-[30px] border-4 py-4 hover:bg-white hover:text-secondary border-secondary ease-in duration-300">
            {buttonText}
          </button>
        </form>

        {/* Desktop form */}
        <form ref={form} onSubmit={sendEmail} className="bg-white rounded-[3rem] py-1 items-center gap-20 mt-12 hidden sm:flex w-full max-w-[600px]">
          <input
            type="email"
            name="user_email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-[3rem] pl-6 pr-20 py-5 outline-none placeholder:text-secondary w-full"
          />
          <button type="submit" className="text-white bg-secondary rounded-[30px] border-2 py-2 sm:py-4 px-8 mx-1 hover:bg-white hover:text-secondary border-secondary ease-in duration-300">
            {buttonText}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Subscribe;
