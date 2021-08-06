import Image from "next/image";
import { useState } from "react";
import Nav from "./Nav";
import bgImage from "../assets/images/bg-city.jpg";
import logo from "../assets/images/escl-logo-no-bg-theme.png";
import { MenuIcon } from "@heroicons/react/solid";

function Header() {
  const [btnMenuActive, setBtnMenuActive] = useState(true);

  const handleMenuBtnPress = () => setBtnMenuActive(!btnMenuActive);

  return (
    <div className="w-full h-auto ">
      {/* nav-menu */}

      <div className="bg-white p-2 md:px-2 z-30 sticky top-0 h-auto w-full flex flex-col justify-center shadow-md">
        <div className="flex justify-between items-center h-auto w-full">
          <div className="hidden relative md:inline-flex md:h-20 md:w-20">
            <Image
              layout="fill"
              objectFit="cover"
              src={logo}
              alt="logo-image"
            />
          </div>

          <h3 className="text-xl font-semibold text-primary hidden md:inline flex-grow">
            Eschol <span className="text-secondary">Ventures</span>
          </h3>

          <div className="hidden md:inline-flex space-x-10 pr-3">
            <Nav />
          </div>

          <h3 className="text-xl font-semibold text-primary md:hidden">
            Eschol <span className="text-secondary">Ventures</span>
          </h3>

          <MenuIcon
            onClick={handleMenuBtnPress}
            className="cursor-pointer w-6 h-6 md:hidden text-primary hover:bg-gray-200 hover:border-2 border-secondary-accent p-1 rounded-lg shadow-lg transition duration-200"
          />
        </div>

        <div
          hidden={btnMenuActive}
          className="w-auto h-auto  grid grid-cols-1 grid-rows-4 place-items-center divide-y p-2"
        >
          <Nav />
        </div>
      </div>

      {/* Image banner  */}

      <div className="relative h-[600px]">
        <Image
          layout="fill"
          objectFit="cover"
          src={bgImage}
          alt="banner-image"
        />
        <div className="z-10 w-full h-[600px] bg-primary opacity-20"></div>
        <div className="absolute inset-0 z-20 w-full h-full opacity-1 p-5 bg-gradient-to-t  from-secondary via-transparent to-transparent">
          <div className="flex flex-col gap-y-4 mb:gap-y-8 items-center justify-between mt-10">
            <p className="text-center md:w-1/2">
              <h2 className="mb-2 text-3xl md:text-5xl font-bold capitalize text-primary">
                Eschol <span className="text-secondary">Products</span>
              </h2>
              <span className="text-md font-normal md:text-lg text-primary">
                Corporate Funding, Retail Loans, Promoter Funding, International
                Funding, Project Funding, Loan Restructuring Subsidies, Private
                Equity & Venture Capital
              </span>
            </p>

            <h3 className="text-3xl mb:text-2xl md:text-5xl font-bold capitalize text-primary">
              Sectors Funded
            </h3>
            <ul className="grid h-auto grid-cols-1 items-center">

              <p className="text-lg text-center font-normal text-yellow-300">Finanial Institutions</p>
              <p className="text-lg text-center font-normal text-yellow-300">Renewable Energy</p>
              <p className="text-lg text-center font-normal text-yellow-300">Infrastructure</p>
        <p className="text-lg text-center font-normal text-yellow-300">Real Estate</p>
              
              <p className="text-lg text-center font-normal text-yellow-300">Health</p>
            </ul>

            <div className="w-full h-auto flex justify-around mt-5 md:w-1/2 md:flex md:items-center md:justify-around">
        
              <button className="p-3 border-2 border-primary rounded-lg text-primary w-30 hover:bg-primary hover:text-secondary">
                Mission
              </button>

              <button className="p-3 bg-secondary rounded-lg w-30">
                Learn More
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
