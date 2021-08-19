import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import logo from "../assets/images/escl-logo-no-bg-white.png"
import { ChevronRightIcon, ChevronDownIcon, DeviceMobileIcon, GlobeAltIcon, MailIcon } from "@heroicons/react/solid"

function Footer() {
  const [isDropDownContact, setIsDropDownContact] = useState(true);
  const [isDropDownSF, setIsDropDownSF] = useState(true);
  const [isDropDownMenu, setIsDropDownMenu] = useState(true);

  return (
    <div className="flex flex-col h-auto w-full bg-primary">
      <div className="h-auto grid gap-y-1 md:gap-y-4 grid-cols-1 md:grid-cols-4 pt-8 md:pt-20 p-4 place-content-center ">
        <div className="relative h-40 w-40 self-center justify-self-center md:self-start">
          <a href="/">
            {" "}
            <Image src={logo} alt={"logo"} layout="fill" objectFit="cover" />
          </a>
        </div>

        <div className="flex flex-col gap-y-2 mb-4 justify-self-center md:mb-0 md:justify-start md:items-start md:self-start md:justify-self-center ">
          <span
            onClick={() => setIsDropDownSF(!isDropDownSF)}
            className="cursor-pointer md:cursor-text md:inline flex justify-center items-center text-lg font-semibold text-center md:text-left text-secondary"
          >
            Sectors Funded
            {isDropDownSF ? (
              <ChevronRightIcon className="md:hidden ml-2 w-5 h-5 text-secondary" />
            ) : (
              <ChevronDownIcon className="md:hidden ml-2 w-5 h-5 text-secondary" />
            )}
          </span>

          <ul
            className={`${
              isDropDownSF ? "hidden" : ""
            } text-left md:flex md:flex-col list-none gap-y-2`}
          >
            <li>
              <p className="text-md font-thin text-secondary">
                Renewable Energy
              </p>
            </li>
            <li>
              <p className="text-md font-thin text-secondary">
                Financial Institutions
              </p>
            </li>
            <li>
              <p className="text-md font-thin text-secondary">Agriculture</p>
            </li>
            <li>
              <p className="text-md font-thin text-secondary">Infrastructure</p>
            </li>
            <li>
              <p className="text-md font-thin text-secondary">Health</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-2  mb-4 self-center justify-self-center md:mb-0 md:justify-start md:items-start md:self-start md:justify-self-center">
          <span
            onClick={() => setIsDropDownContact(!isDropDownContact)}
            className="cursor-pointer md:cursor-text md:inline flex justify-center items-center text-lg font-semibold text-center md:text-left text-secondary"
          >
            Contact us
            {isDropDownContact ? (
              <ChevronRightIcon className="md:hidden ml-2 w-5 h-5 text-secondary" />
            ) : (
              <ChevronDownIcon className="md:hidden ml-2 w-5 h-5 text-secondary" />
            )}
          </span>

          <ul
            className={`${
              isDropDownContact ? "hidden" : ""
            } text-center md:text-left  md:flex md:flex-col list-none gap-y-4`}
          >
            <li>
              <span className="text-md font-thin text-secondary md:flex md:justify-start md:gap-x-2 md:items-start">
                <MailIcon className="hidden md:inline md:w-5 md:h-5 mt-1 md:text-secondary" />
                <p>enquiries@eshcolventures.co.ke</p>
              </span>
            </li>

            <li>
              <span className="text-md font-thin text-secondary md:flex md:justify-start md:gap-x-2 md:items-start">
                <DeviceMobileIcon className="hidden md:inline md:w-5 md:h-5 mt-1 md:text-secondary" />
                <p>+254 705497588 | +254 721361753</p>
              </span>
            </li>

            <li>
              <span className="text-md font-thin text-secondary md:flex md:justify-start md:gap-x-2 md:items-start">
                <GlobeAltIcon className="hidden md:inline md:w-5 md:h-5 mt-1 md:text-secondary" />
                <p>www.eshcolventures.co.ke</p>
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-2  mb-4 self-center justify-self-center md:mb-0 md:justify-start md:items-start md:self-start md:justify-self-center pr-4">
          <span
            onClick={() => setIsDropDownMenu(!isDropDownMenu)}
            className="cursor-pointer md:cursor-text md:inline flex justify-center items-center text-lg font-semibold text-center md:text-left text-secondary"
          >
            Menu
            {isDropDownMenu ? (
              <ChevronRightIcon className="md:hidden ml-2 w-5 h-5 text-secondary" />
            ) : (
              <ChevronDownIcon className="md:hidden ml-2 w-5 h-5 text-secondary" />
            )}
          </span>

          <ul
            className={`${
              isDropDownMenu ? "hidden" : ""
            }  text-left  md:flex md:flex-col list-none gap-y-2`}
          >
            <li>
              <span className="text-md font-thin text-secondary underline hover:no-underline">
                <Link href="/about">About</Link>
              </span>
            </li>
            <li>
              <span className="text-md font-thin text-secondary underline hover:no-underline">
                <Link href="/investment">Investment</Link>
              </span>
            </li>
            <li>
              <span className="text-md font-thin text-secondary underline hover:no-underline">
                <Link href="/products">Products</Link>
              </span>
            </li>
            <li>
              <span className="text-md font-thin text-secondary underline hover:no-underline">
                <Link href="/contacts">Contacts</Link>
              </span>
            </li>
    
          </ul>
        </div>

        <div className="flex justify-evenly items-center h-auto py-3 pr-6 md:justify-start md:space-x-5 self-center md:justify-self-center md:self-start">
          <a
            href="https://twitter.com/EshcolVentures"
            className="md:inline md:w-8 md:h-8 text-secondary"
          >
            <svg
              className="icon line"
              width="48"
              height="48"
              id="twitter"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title style={{ fontSize: "20px", fontWeight: "500" }}>
                twitter
              </title>
              <path
                id="primary"
                d="M18.94,7.91A3.49,3.49,0,0,0,12,8.17C8.46,9.63,5,6,5,6c-1,6,2,8.75,2,8.75C5.64,16,3,16,3,16s1.58,3,8.58,3S19,11,19,11a3.89,3.89,0,0,0,2-3.3A4.59,4.59,0,0,1,18.94,7.91Z"
                style={{
                  fill: "none",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1px",
                }}
              ></path>
            </svg>
          </a>

          <a
            href="https://www.facebook.com/Eshcol-Ventures-Limited-100187999054782"
            className="md:inline md:w-8 md:h-8 text-secondary"
          >
            <svg
              className="icon line"
              width="48"
              height="48"
              id="facebook"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>facebook</title>
              <path
                id="primary"
                d="M14,7h4V3H14A5,5,0,0,0,9,8v3H6v4H9v6h4V15h3l1-4H13V8A1,1,0,0,1,14,7Z"
                style={{
                  fill: "none",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1px",
                }}
              ></path>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/eshcolventures"
            className="md:inline md:w-8 md:h-8 text-secondary"
          >
            <svg
              className="icon line"
              width="48"
              height="48"
              id="instagram"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>instagram</title>
              <path
                id="primary"
                d="M20,21H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1V20A1,1,0,0,1,20,21ZM9,12a3,3,0,1,0,3-3A3,3,0,0,0,9,12Z"
                style={{
                  fill: "none",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1px",
                }}
              ></path>
              <line
                id="primary-upstroke"
                x1="17"
                y1="7"
                x2="17"
                y2="7"
                style={{
                  fill: "none",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1px",
                }}
              ></line>
            </svg>
          </a>

          <a href="https://www.linkedin.com/company/eshcol-ventures-limited" className="md:inline md:w-8 md:h-8 pl-2 text-secondary">
            <svg
              className="md:w-[48px] md:h-[42px] w-[48px] h-[44px] pb-1 md:pb-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
             <title>LinkedIn</title>
              <path
                 style={{
                  fill: "none",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1px",
                }}
               d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </div>

        <div className="hidden md:inline md:col-start-3 md:col-span-2 md:w-full md:h-auto">
          <form
            action="api/message?subscription=true"
            method="POST"
            className="h-auto md:justify-between grid gap-x-2 grid-cols-3 md:items-center md:p-1 w-[100%] "
          >
            <input
              name="email"
              className="text-secondary col-span-2 w-[90%] rounded-lg h-[50px] border-none bg-secondary-accent focus:ring-2 ring-gray-400 outline-none p-2"
              type="text"
              placeholder="Enter email"
            />
            <button
              className="flex justify-center items-center rounded-lg bg-secondary w-[45%] h-[50px] py-4 px-8 text-secondary-accent hover:bg-primary-accent hover:text-secondary"
              type="submit"
            >
              subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="w-[90%] rounded h-[1px] bg-secondary mx-auto md:hidden "></div>
      <span className="text-md mx-4 font-thin text-secondary md:mx-auto my-4 text-center">
        {" "}
        Eshcol Ventures ltd All Rights Reserved &copy;{" "}
        {`${(() => new Date().getFullYear())()}`} Made with ❤ by{" "}
        <a
          href="https://eric-mutua.vercel.app"
          className="underline text-secondary font-thin text-md"
        >
          Eric
        </a>
      </span>
    </div>
  );
}

export default Footer;
