import React, { useState } from "react";

export default function Faq() {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <div
      id="faq"
      className="w-full flex flex-col items-center my-8 pt-8 gap-8 "
    >
      <header className="w-full text-center ">
        <h2 className="text-lg xl:text-xl text-secondary w-full font-md tracking-wide mb-2">
          FAQ
        </h2>
        <p className="pt-2 text-[#000] font-bold text-2xl xl:text-3xl relative z-10 ">
          Energy Projects Project Pro
        </p>
      </header>
      <main className="w-full max-w-[1380px]">
        <div id="accordionExample">
          <div className="rounded-none  border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="mb-0" id="headingOne">
              <button
                className={`${
                  activeElement === "element1" &&
                  `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                type="button"
                onClick={() => handleClick("element1")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                1. How to Start Developing a Renewable Energy (RE) Project?
                <span
                  className={`${
                    activeElement === "element1"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-500 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              className={`transition-all duration-500 ease-in-out ${
                activeElement === "element1"
                  ? "block transition duration-500 ease-in-out"
                  : "hidden"
              }`}
            >
              <div className="px-5 py-4">
                Developing an RE project begins with assembling a skilled and
                experienced team that can provide support in three key areas: I)
                technical, II) legal, and III) financial. Technical
                documentation must be properly prepared (e.g., conceptual
                design, main project plan, network connection study,
                environmental and waste management report), as the authorities
                issuing permits may require revisions. Legal counsel is
                essential, given the complex regulatory landscape in Bosnia and
                Herzegovina (BiH). Regulations governing the RE sector across
                BiH have been aligned with EU guidelines over the past year, and
                with competent legal support, projects such as solar power
                plants can typically be developed and built within 12 to 18
                months. Financial support is also crucial, as RE projects
                require substantial investment, so securing a reliable financial
                partner is key.
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="mb-0" id="headingTwo">
            <button
              className={`${
                activeElement === "element2" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
              } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              2. What Should an Investor Focus on After Deciding to Develop an
              RE Project?
              <span
                className={`${
                  activeElement === "element2"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-500 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            className={`transition-all duration-500 ease-in-out ${
              activeElement === "element2" ? "block" : "hidden"
            }`}
          >
            <div className="px-5 py-4">
              Once an investor has decided to pursue an RE project, they should
              focus on three primary considerations: i) Determine if it is
              possible to resolve property rights at the desired location or if
              the land is already owned by the investor. ii) Verify if the site
              is suitable for an RE project in accordance with spatial planning
              regulations (consult local municipal or city planning
              authorities). iii) Confirm if there is sufficient network capacity
              in the area for connecting the RE facility (check with the
              relevant electricity utility or transmission operator).
            </div>
          </div>
        </div>
        <div className="rounded-none border  border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className={`${
                activeElement === "element3"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none rounded-b-[15px]`
              } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              3. What if the Investor Wants to Buy an RE Project Already Under
              Development?
              <span
                className={`${
                  activeElement === "element3"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-500 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            className={`transition-all duration-500 ease-in-out ${
              activeElement === "element3" ? "block" : "hidden"
            }`}
          >
            <div className="px-5 py-4">
              Investors often seek to purchase RE projects already in
              development. As outlined in points 1 and 2, it's critical to
              perform thorough due diligence on three main aspects: i) Whether
              property rights are resolved (or can likely be resolved), ii)
              Whether the RE project complies with spatial planning documents
              (typically, projects for sale have at least a location permit or
              the seller commits to securing it at their own expense),– iii)
              Whether the RE project has secured grid access (generally,
              projects on the distribution network have “Preliminary Electrical
              Energy Approval” (PEES or EES), and those on the transmission
              network have “Conditions for Connection” and project balancing
              confirmation). Good legal counsel with experience in RE projects
              is vital for these checks, along with technical and financial
              advisors who verify project documentation and financing
              structures.
            </div>
          </div>
        </div>
        <div className="rounded-none border  border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="accordion-header mb-0" id="headingFour">
            <button
              className={`${
                activeElement === "element4"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none rounded-b-[15px]`
              } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              4. How to Buy an RE Project That’s Already in Development?
              <span
                className={`${
                  activeElement === "element4"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-500 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            className={`transition-all duration-500 ease-in-out ${
              activeElement === "element4" ? "block" : "hidden"
            }`}
          >
            <div className="px-5 py-4">
              There are two main ways to acquire an RE project in development:
              i) purchasing shares in the company that owns the project (“share
              purchase agreement” or SPA), or ii) purchasing the project permits
              (“asset purchase agreement” or APA). Advisors (technical, legal,
              and financial) from points 1 and 3 play a key role in conducting
              comprehensive due diligence analyses, known as “due diligence
              reports.” The purchase agreement (whether SPA or APA) must be
              thoroughly drafted, clearly defining the project’s development
              status, the permits required to reach “construction-ready” or
              “operational” status, and detailing the rights and obligations of
              both parties, timelines, force majeure conditions, applicable law,
              and other essential terms. Complex contracts like these should be
              prepared by a qualified and experienced attorney.
            </div>
          </div>
        </div>
        <div className="rounded-none border  border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="accordion-header mb-0" id="headingFive">
            <button
              className={`${
                activeElement === "element5"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none rounded-b-[15px]`
              } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element5")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              5. What is the Energy Market Like, and What is the Value of
              Investing in RE Projects?
              <span
                className={`${
                  activeElement === "element5"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-500 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            className={`transition-all duration-500 ease-in-out ${
              activeElement === "element5" ? "block" : "hidden"
            }`}
          >
            <div className="px-5 py-4">
              RE project-generated electricity can be used for self-consumption
              (e.g., rooftop solar on a house or business) or sold on the
              market. i) Self-Consumption – The payback period for
              self-consumption solar installations in BiH is typically 5 to 7
              years, given current energy prices, equipment, and service costs.
              New BiH regulations allow prosumers to sell surplus energy to the
              grid or offset it for future use. Additionally, self-produced
              electricity helps prepare for the EU’s upcoming Carbon Border
              Adjustment Mechanism (CBAM), which will require businesses to
              produce renewable energy for certain goods. Globally, the
              transition from fossil fuels to green energy is widely encouraged,
              with the EU targeting 50% RE by 2030 and 100% by 2050. ii) Market
              Sales – Electricity can be sold in two main ways: public purchase
              (e.g., utilities/Operators via preferential pricing for small
              facilities up to 150 kW or incentives for larger facilities) or on
              the open market. Public purchasing provides favorable rates, e.g.,
              0.20-0.25 KM/kWh, and access to incentives through public tenders.
              Open market sales involve agreements with licensed energy traders
              who can resell energy domestically or internationally. The BiH-EU
              Energy Community Treaty ensures access to international markets.
              Current payback periods for RE projects are relatively short:
              around 5-8 years for solar and 5-7 years for wind, with a trend
              toward even better returns.
            </div>
          </div>
        </div>
        <div className="rounded-none border  border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="accordion-header mb-0" id="headingSix">
            <button
              className={`${
                activeElement === "element6"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none rounded-b-[15px]`
              } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element6")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              6. How to Secure a Strong Power Purchase Agreement (PPA)?
              <span
                className={`${
                  activeElement === "element6"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-500 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            className={`transition-all duration-500 ease-in-out ${
              activeElement === "element6" ? "block" : "hidden"
            }`}
          >
            <div className="px-5 py-4">
              A PPA is a crucial step in the realization of an RE project,
              typically signed in the later stages of construction. Due to high
              demand for electricity, PPAs are increasingly signed earlier in
              development, even when a project has only a location permit and
              PEES. Important PPA terms include i) contract term, ii) purchase
              method – e.g., “purchase of all produced energy,” iii) designation
              of the balancing-responsible party (RE projects are often
              variable, requiring balancing services from the buyer), iv) type
              of purchase price – fixed or variable based on market conditions,
              v) force majeure, and vi) contract termination options.
            </div>
          </div>
        </div>
        <div className="rounded-none border  border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="accordion-header mb-0" id="headingSeven">
            <button
              className={`${
                activeElement === "element7"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none rounded-b-[15px]`
              } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element7")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              7. Can Electricity from RE Projects Be Stored?
              <span
                className={`${
                  activeElement === "element7"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-500 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            className={`transition-all duration-500 ease-in-out ${
              activeElement === "element7" ? "block" : "hidden"
            }`}
          >
            <div className="px-5 py-4">
              Energy storage – or balancing – is a major challenge for RE
              projects. New regulations in BiH now permit energy storage
              solutions, such as batteries or other technical devices. Certain
              RE facilities use reversible storage, where, for example, a solar
              or wind facility powers water transfer between reservoirs. Future
              plans include advancing “green hydrogen” production, where
              hydrogen is produced using RE. Such systems already exist in the
              EU, and BiH is currently drafting regulations to create a clear
              roadmap for green hydrogen development.
            </div>
          </div>
        </div>{" "}
      </main>
    </div>
  );
}
