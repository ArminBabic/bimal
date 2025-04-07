import Link from "next/link";
import React from "react";

function Police() {
  return (
    <section className="flex flex-col items-center bg-white w-full pt-32">
      <main className="w-full xs:max-w-[600px] sm:max-w-[940px] px-4 flex flex-col justify-center items-center">
        <h1 className="text-center font-bold text-3xl sm:text-5xl">
          PRIVACY POLICY
        </h1>
        <div className=" my-12 w-full ">
          <h3 className="font-bold text-2xl pb-4">Project Pro</h3>

          <div className="text-[#676a6a] flex flex-col gap-5 ">
            <p>
              Maršala Tita 28, 71000 Sarajevo BiH,
              <br />
              Intera Tehnološki park, Bišće Polje bb 88000 Mostar BiH,
              <br />
              Trg mladih 7d, Brčko distrikt BiH.
            </p>
            {/* <p>
              <span className="font-bold">phone:</span> +387 61 917 739
            </p>
            <p>
              <span className="font-bold">e-mail:</span> nantechs@gmail.com
            </p>
            <p>
              <span className="font-bold">Managing Director:</span> Armin Babic
            </p>
            <p>
              <span className="font-bold">Responsible for the content:</span>{" "}
              Armin Babic
            </p>
            <span className="font-bold">Design and Development:</span>
            nanTech Solution */}
          </div>
          <h3 className="font-bold text-2xl mt-6 mb-2">COPYRIGHT</h3>
          <p className="text-[#676a6a]">
            The content of this website is protected by copyright and any other
            applicable intellectual property right.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">DISCLAIMER</h3>
          <p className="text-[#676a6a]">
            Altough we carefully revise all contents we assume no liability for
            the content of external links.
          </p>
          <p className="text-[#676a6a]">
            The owners of the external sites are responsible for the content of
            the linked websites.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">PRIVACY STATEMENT</h3>
          <p className="text-[#676a6a]">
            Responsible body in the sense of the data protection laws, in
            particular the EU data protection basic regulation (DSGVO), is:
          </p>
          <br />
          <strong className="text-[#676a6a]">Project Pro</strong>
          <br />

          <h3 className="font-bold text-2xl mt-6 mb-2">YOUR RIGHTS</h3>
          <div className="text-[#676a6a]">
            You can exercise the following rights at any time using the contact
            details provided by our data protection officer:
            <br />
            <br />- Information about your data stored with us and their
            processing,
            <br /> - Correction of incorrect personal data,
            <br /> - Deletion of your data stored with us,
            <br /> - Restriction of data processing if we are not yet allowed to
            delete your data due to legal obligations,
            <br />
            - Objection against the processing of your data by us and data
            transferability if you have consented to data processing or have
            concluded a contract with us.
            <br />
            <br />
            If you have given us your consent, you can revoke it at any time
            with effect for the future.
            <br />
            <br />
            You may at any time lodge a complaint with the supervisory authority
            responsible for you. Your competent supervisory authority depends on
            the federal state of your residence, your work or the alleged
            violation. A list of the supervisory authorities (for the non-public
            sector) with their addresses can be found at:
            <br />
            <br />
            <div className="w-full">
              <Link
                href={
                  "https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                }
                className="w-full"
              >
                www.bfdi.bund.de
              </Link>
            </div>
          </div>

          <h3 className="font-bold text-2xl mt-6 mb-2">
            PURPOSES OF DATA PROCESSING BY THE DATA CONTROLLER AND THIRD PARTIES
          </h3>

          <p className="text-[#676a6a]">
            We process your personal data only for the purposes stated in this
            data protection declaration. Your personal data will not be
            transferred to third parties for purposes other than those stated.
            We will only pass on your personal data to third parties if:
            <br />
            <br /> - you have given your express consent to this,
            <br /> - the processing is necessary to process a contract with you,
            <br /> - the processing is necessary to fulfil a legal obligation,
            <br /> - the processing is necessary to safeguard legitimate
            interests and there is no reason to assume that you have an
            overriding legitimate interest in the non-disclosure of your data.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">
            DELETION OR BLOCKING OF DATA
          </h3>

          <p className="text-[#676a6a]">
            We adhere to the principles of data avoidance and data economy. We
            therefore only store your personal data for as long as is necessary
            to achieve the purposes stated here or as provided for by the
            various storage periods provided for by law. After the respective
            purpose has ceased or these periods have expired, the corresponding
            data will be routinely blocked or deleted in accordance with the
            statutory provisions.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">COOKIES</h3>

          <p className="text-[#676a6a]">
            Like many other websites, we also use so-called cookies. Cookies are
            small text files that are transferred from a website server to your
            hard drive. This automatically provides us with certain data such as
            IP address, browser used, operating system and your connection to
            the Internet.
            <br />
            <br />
            Cookies cannot be used to start programs or transfer viruses to a
            computer. The information contained in cookies can be used to help
            you navigate and view our web pages correctly.
            <br />
            <br />
            Under no circumstances will the data collected by us be passed on to
            third parties or linked to personal data without your consent.
            <br />
            <br />
            Of course, you can also view our website without cookies. Internet
            browsers are regularly set to accept cookies. In general, you can
            deactivate the use of cookies at any time via the settings of your
            browser. Please use the help functions of your Internet browser to
            find out how you can change these settings. Please note that
            individual functions of our website may not work if you have
            deactivated the use of cookies.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">SSL ENCRYPTION</h3>

          <p className="text-[#676a6a]">
            In order to protect the security of your data during transmission,
            we use state-of-the-art encryption procedures (e.g. SSL) via HTTPS.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">
            USE OF GOOGLE ANALYTICS
          </h3>

          <div className="text-[#676a6a]">
            This website uses Google Analytics, a web analytics service provided
            by Google Inc. (following: Google). Google Analytics uses cookies,
            which are text files placed on your computer, to help the website
            analyze how users use the site. The information generated by the
            cookie about your use of the website will generally be transmitted
            to and stored by Google on servers in the United States. However,
            due to the activation of IP anonymisation on these web pages, your
            IP address will be shortened by Google in advance within member
            states of the European Union or in other contracting states of the
            Agreement on the European Economic Area. Only in exceptional cases
            will the full IP address be transmitted to and truncated by Google
            on servers in the United States. On behalf of the operator of this
            website, Google will use this information to evaluate your use of
            the website, to compile reports on website activity and to provide
            other services relating to website activity and internet usage to
            the website operator. The IP address transmitted by your browser
            within the framework of Google Analytics is not combined with other
            data from Google.
            <br />
            <br />
            The purposes of data processing are to evaluate the use of the
            website and to compile reports on activities on the website. Based
            on the use of the website and the Internet, further related services
            are to be provided. The processing is based on the legitimate
            interest of the website operator.
            <br />
            <br />
            You may refuse the use of cookies by selecting the appropriate
            settings on your browser, however please note that if you do this
            you may not be able to use the full functionality of this website.
            You can also prevent Google from collecting the data generated by
            the cookie and related to your use of the website (including your IP
            address) and Google from processing this data by downloading and
            installing the browser plug-in available under the following link:
            <br />
            <br />
            <div className="w-full">
              <Link
                href={"https://tools.google.com/dlpage/gaoptout?hl=de"}
                className="hover:text-black"
              >
                Browser Add On to deactivate Google Analytics
              </Link>
            </div>
          </div>

          <h3 className="font-bold text-2xl mt-6 mb-2">USE OF GOOGLE MAPS</h3>

          <p className="text-[#676a6a]">
            This website uses Google Maps API to visually display geographic
            information. When Google Maps is used, Google also collects,
            processes and uses data relating to the use of map functions by
            visitors. For more information about data processing by Google,
            please refer to Google Privacy Notice. There you can also change
            your personal data protection settings in the data protection
            centre.
            <br />
            <br />
            Detailed instructions for the administration of your own data in
            connection with Google products can be found here.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">
            EMBEDDED YOUTUBE VIDEOS
          </h3>

          <div className="text-[#676a6a]">
            On some of our websites we embed Youtube videos. Operator of the
            corresponding plugins is YouTube, LLC, 901 Cherry Ave, San Bruno, CA
            94066, USA. When you visit a page with the YouTube plugin, a
            connection to Youtube servers is established. This will tell Youtube
            which pages you are visiting. If you are logged in to your Youtube
            account, Youtube can personally assign your surfing behavior to you.
            You can prevent this by logging out of your Youtube account
            beforehand.
            <br />
            <br />
            If a Youtube video is started, the provider uses cookies that
            collect information about user behavior.
            <br />
            <br />
            Those who have deactivated the saving of cookies for the Google Ad
            program will not have to reckon with such cookies when watching
            Youtube videos. However, Youtube also stores non-personal usage
            information in other cookies. If you would like to prevent this, you
            must block the storage of cookies in your browser.
            <br />
            <br />
            You will find further information on data protection at Youtube in
            the providers data protection declaration under:{" "}
            <div className="w-full">
              <Link href={"https://policies.google.com/privacy?hl=de&gl=de"}>
                www.google.de
              </Link>
            </div>
          </div>

          <h3 className="font-bold text-2xl mt-6 mb-2">
            EMBEDDED VIMEO VIDEOS
          </h3>

          <div className="text-[#676a6a]">
            On our website plugins of the video portal Vimeo of Vimeo, LLC, 555
            West 18th Street, New York, New York 10011, USA are integrated. Each
            time you access a page that offers one or more Vimeo video clips, a
            direct connection is established between your browser and a Vimeo
            server in the USA. Information about your visit and your IP address
            is stored there. Through interactions with the Vimeo plugins (e.g.
            clicking the start button), this information is also transmitted to
            Vimeo and stored there. Vimeos Privacy Statement, which explains how
            Vimeo collects and uses your information, can be found in Vimeos
            Data Privacy Statement.
            <br />
            <br />
            If you have a Vimeo user account and do not want Vimeo to collect
            information about you through this site and link it to your Vimeo
            member information, you must log out of Vimeo before visiting this
            site.
            <br />
            <br />
            In addition, Vimeo calls the Google Analytics tracker via an iFrame
            in which the video is called. This is Vimeos own tracking and we
            dont have access to it. You can prevent tracking by Google Analytics
            by using the deactivation tools that Google offers for some Internet
            browsers. You can also prevent Google from collecting the data
            generated by Google Analytics and relating to your use of the
            website (including your IP address) and Google from processing this
            data by downloading and installing the browser plug-in available at
            the following link:
            <br />
            <br />
            <div className="w-full">
              <Link href={"https://tools.google.com/dlpage/gaoptout?hl=de"}>
                tools.google.com
              </Link>
            </div>
          </div>

          <h3 className="font-bold text-2xl mt-6 mb-2 uppercase">
            Embedded content from other websites
          </h3>

          <p className="text-[#676a6a]">
            Articles on this site may include embedded content (e.g. videos,
            images, articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website.
            <br />
            <br />
            These websites may collect data about you, use cookies, embed
            additional third-party tracking, and monitor your interaction with
            that embedded content, including tracking your interaction with the
            embedded content if you have an account and are logged in to that
            website.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">
            CHANGE OF OUR DATA PROTECTION REGULATIONS
          </h3>

          <p className="text-[#676a6a]">
            We reserve the right to adapt this data protection declaration so
            that it always corresponds to the current legal requirements or to
            implement changes to our services in the data protection
            declaration, e.g. when introducing new services. Your renewed visit
            will then be subject to the new data protection declaration.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">
            QUESTIONS TO THE DATA PROTECTION OFFICER
          </h3>

          <p className="text-[#676a6a]">
            If you have any questions about data protection, please send us an
            e-mail or contact the person responsible for data protection in our
            organisation directly.
          </p>
        </div>
      </main>
    </section>
  );
}

export default Police;
