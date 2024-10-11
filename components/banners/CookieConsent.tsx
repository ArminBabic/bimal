import Link from "next/link";
import Cookies from "js-cookie";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import { Container } from "../layouts/PublicLayouts";
import { FaCookieBite } from "react-icons/fa";

const USER_CONSENT_COOKIE_KEY = "cookie_consent_is_true";
const USER_CONSENT_COOKIE_EXPIRE_DATE =
  new Date().getTime() + 365 * 24 * 60 * 60;

const CookieConsent = () => {
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);

  useEffect(() => {
    const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === "true";
    setCookieConsentIsTrue(consentIsTrue);
  }, []);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, "true", {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setCookieConsentIsTrue(true);
    }
  };
  const onClick2 = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!cookieConsentIsTrue) {
      setCookieConsentIsTrue(true);
    }
  };

  if (cookieConsentIsTrue) {
    return null;
  }

  return (
    <section className="fixed bottom-0 left-0 w-full  z-50">
      <Container>
        <div className=" w-full flex flex-col items-center px-5 py-3 sm:py-3 space-y-2 bg-[#fff] rounded-t-lg md:flex-row md:space-y-0  md:space-x-2 md:items-center shadow-2xl shadow-black">
          <div className="flex items-center justify-center mx-2 py-2 sm:py-0">
            <FaCookieBite className="w-8 h-8 text-secondary relative" />
          </div>

          <div className="flex text-center md:text-start justify-center flex-grow text-primary">
            <p className="text-sm xs:text-base font-semibold">
              This site uses cookies to deliver better experience and analyze
              traffic.Learn more at{" "}
              <Link legacyBehavior href="/privacy">
                <a
                  aria-label="visit privacy policy"
                  className="text-sm xs:text-base  underline hover:text-secondary ease-in duration-300"
                >
                  Privacy Policy
                </a>
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="p-3 text-sm font-bold text-[#fff] rounded-tl-2xl rounded-bl-2xl rounded-tr-md rounded-br-md bg-secondary border-2  border-secondary whitespace-nowrap  hover:text-secondary hover:bg-[#fff] ease-in duration-500"
              onClick={onClick}
            >
              Accept All
            </button>
            <button
              className="p-3 text-sm font-bold text-secondary border-2 border-secondary rounded-tr-2xl rounded-br-2xl rounded-tl-md rounded-bl-md bg-[#fff] whitespace-nowrap hover:text-[#fff] hover:bg-secondary ease-in duration-500"
              onClick={onClick2}
            >
              Decline All
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CookieConsent;
