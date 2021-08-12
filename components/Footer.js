import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import logo from "../assets/images/escl-logo-no-bg-white.png"
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/solid"

function Footer() {
  const [isDropDownContact, setIsDropDownContact] = useState(true);
  const [isDropDownSF, setIsDropDownSF] = useState(true);

  return (
    <div className="flex flex-col h-auto w-full bg-primary ">
      <div className="h-auto grid gap-y-1 md:gap-y-4 grid-cols-1 md:grid-cols-4 bg-primary pt-8 md:pt-20 p-4 place-content-center ">
        <div className="relative h-40 w-40 self-center justify-self-center md:self-start">
          <Image src={logo} alt={"logo"} layout="fill" objectFit="cover" />
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
            } text-center md:text-left md:flex md:flex-col list-none gap-y-2`}
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
            } text-center md:text-left  md:flex md:flex-col list-none gap-y-2`}
          >
            <li>
              <p className="text-md font-thin text-secondary">
                Consolata Ndungu
              </p>
            </li>
            <li>
              <p className="text-md font-thin text-secondary">+254 705497588</p>
            </li>
            <li>
              <p className="text-md font-thin text-secondary">
                info@escholventures.co.ke
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-2  mb-4 self-center justify-self-center md:mb-0 md:justify-start md:items-start md:self-start md:justify-self-center pr-4">
          <span
            onClick={() => setIsDropDownContact(!isDropDownContact)}
            className="cursor-pointer md:cursor-text md:inline flex justify-center items-center text-lg font-semibold text-center md:text-left text-secondary"
          >
            Menu
            {isDropDownContact ? (
              <ChevronRightIcon className="md:hidden ml-2 w-5 h-5 text-secondary" />
            ) : (
              <ChevronDownIcon className="md:hidden ml-2 w-5 h-5 text-secondary" />
            )}
          </span>

          <ul
            className={`${
              isDropDownContact ? "hidden" : ""
            } text-center md:text-left  md:flex md:flex-col list-none gap-y-2`}
          >
            <li>
              <span className="text-md font-thin text-secondary underline hover:no-underline">
                <Link href="/">
                  Home
                </Link>
              </span>
              
            </li>
            <li>
            <span className="text-md font-thin text-secondary underline hover:no-underline">
             <Link href="/contacts">
              Contacts
              </Link>
            </span>
            
            </li>
            <li>
            <span className="text-md font-thin text-secondary underline hover:no-underline"> 
               <Link href="/about">
               About
              </Link>
            </span>
             
            </li>
            <li>
            <span className="text-md font-thin text-secondary underline hover:no-underline">
            <Link href="/products">
               Products
              </Link>
            </span>
            
            </li>
          </ul>
        </div>

        <div className="flex justify-evenly items-center h-auto py-3 pr-6 md:justify-start md:space-x-4 self-center md:justify-self-center md:self-start">
          <a href="#" className="w-8 h-8 text-secondary">
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

          <a href="#" className="w-8 h-8 text-secondary">
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

          <a href="#" className="w-8 h-8 text-secondary">
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
        </div>
        <div className="hidden md:inline col-span-2 w-full h-auto">
                <form action="api/message" method="POST" className="h-auto md:justify-end flex md:items-center md:p-1 w-[100%]">
                  <input className="text-secondary  w-[72%] mr-5 rounded-lg h-[50px] border-none bg-secondary-accent focus:ring-2 ring-gray-400 outline-none p-2" type="text" placeholder="write to us..." />
                  <button className="flex justify-center items-center rounded-lg bg-secondary w-auto h-[50px] p-4 text-secondary-accent hover:bg-primary-accent hover:text-secondary" type="submit">submit</button>
                </form>
        </div>
      </div>

      <div className="w-[90%] rounded h-[1px] bg-secondary mx-auto md:hidden "></div>
      <span className="text-md mx-4 font-thin text-secondary md:mx-auto my-4 text-center">
        {" "}
        Eschol Ventures ltd All Rights Reserved &copy;{" "}
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
