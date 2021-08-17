import Image from "next/image";
import { useState } from "react";
import logo from "../assets/images/escl-logo-no-bg-primary.png";
import { XIcon, MenuIcon } from "@heroicons/react/solid";
import Nav from "./Nav";

function NavHeader() {
  const [confirmMobileNav, setConfirmMobileNav] = useState(false);
  const [btnMenuActive, setBtnMenuActive] = useState(true);

  const handleMenuBtnPress = () => {
    setBtnMenuActive(!btnMenuActive);
    setConfirmMobileNav(!confirmMobileNav);
  };

  return (
    <div className="bg-white p-2 md:px-2 z-30 sticky top-0 h-auto w-full flex flex-col justify-center shadow-md">
      <div className="flex justify-between items-center h-auto w-full">
        <div className="hidden relative md:inline-flex md:h-20 md:w-20">
          <a href="/">
            <Image
              layout="fill"
              objectFit="cover"
              src={logo}
              alt="logo-image"
            />
          </a>
        </div>

        <a
          href="/"
          className="text-xl font-semibold text-primary hidden md:inline flex-grow"
        >
          {/* Ventures color can be text-secondary or text-gray-400  */}
          Eschol <span className="text-gray-400">Ventures Limited</span>
        </a>

        <div className="hidden md:inline-flex space-x-10 pr-3">
          <Nav />
        </div>

        <a href="/" className="text-xl font-semibold text-primary md:hidden">
          {/* Ventures color can be text-secondary or text-gray-400  */}
          Eschol <span className="text-gray-400">Ventures Limited</span>
        </a>

        {!btnMenuActive ? (
          <XIcon
            onClick={handleMenuBtnPress}
            className="cursor-pointer w-6 h-6 md:hidden text-primary hover:bg-gray-200 hover:border-2 border-secondary-accent p-1 rounded-lg shadow-lg transition duration-200"
          />
        ) : (
          <MenuIcon
            onClick={handleMenuBtnPress}
            className="cursor-pointer w-6 h-6 md:hidden text-primary hover:bg-gray-200 hover:border-2 border-secondary-accent p-1 rounded-lg shadow-lg transition duration-200"
          />
        )}
      </div>

      <div
        hidden={btnMenuActive}
        className="w-auto h-auto  grid grid-cols-1 grid-rows-4 place-items-center divide-y p-2"
      >
        {confirmMobileNav && <Nav />}
      </div>
    </div>
  );
}

export default NavHeader;
