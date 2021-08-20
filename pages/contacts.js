import { useRef, useEffect, useState } from "react";
import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";
import Card from "../components/Card";
import {
  DeviceMobileIcon,
  GlobeAltIcon,
  MailIcon,
} from "@heroicons/react/solid";
import Head from "next/head";

function Contacts() {
  const [isFirstName, setIsFirstName] = useState("");
  const [isLastName, setIsLastName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isSubject, setIsSubject] = useState("");
  const [isMessage, setIsMessage] = useState("");

  const [disabled, setDisabled] = useState(true);

  const handleFirstName = (e) => {
    setIsFirstName(e.target.value !== "");
  };
  const handleLastName = (e) => {
    setIsLastName(e.target.value !== "");
  };
  const handleSubject = (e) => {
    setIsSubject(e.target.value !== "");
  };
  const handleMessage = (e) => {
    setIsMessage(e.target.value !== "" && e.target.value.length < 500);
  };
  const handleEmail = (e) => {
    setIsEmail(
      e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) !== null
        ? true
        : false
    );
  };

  const formValidation = () =>
    isFirstName && isLastName && isEmail && isSubject && isMessage;

  useEffect(() => {
    if (formValidation()) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [isFirstName, isLastName, isEmail, isSubject, isMessage]);

  return (
    <>
      <Head>
        <title>Eshcol Ventures Ltd | Contacts </title>
        <meta name="viewport" content="initial-scale=0.8, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader />

      <div className="h-auto bg-gray-200 md:bg-secondary flex flex-col justify-evenly md:justify-start items-center">
        <Card
          bgCardStyle={"md:hidden"}
          cardStyle={"md:bg-secondary"}
          content={
            <div className="md:m-8">
              <h3 className=" text-primary pb-5 mt-5 font-bold text-5xl h-auto w-full flex justify-center">
                Contact Us
              </h3>

              <div className="w-full m-4 h-full bg-white shadow-md rounded-t-lg md:bg-transparent  md:shadow-lg border md:border-gray-200 md:rounded-lg mx-auto pb-0 md:pb-0 md:flex">
                <div className="w-full h-auto rounded-t-lg md:rounded-t-none mx-auto bg-secondary-accent  md:w-[40%] md:rounded-tl-lg md:rounded-bl-lg ">
                  <ul className="grid grid-cols-1 w-[90%] md:items-start mx-auto gap-y-4 py-9">
                    <li>
                      <span className="text-md font-thin text-secondary flex justify-start gap-x-2 items-start">
                        <MailIcon className="md:inline sm:hidden w-5 h-5 mt-1 md:mt-0 md:text-secondary" />
                        <p>enquiries@eshcolventures.co.ke</p>
                      </span>
                    </li>

                    <li>
                      <span className="text-md font-thin text-secondary flex justify-start gap-x-2 items-start">
                        <DeviceMobileIcon className="md:inline sm:hidden w-5 h-5 mt-1 md:mt-0 md:text-secondary" />
                        <p>+254 705497588 | +254 721361753</p>
                      </span>
                    </li>

                    <li>
                      <span className="text-md font-thin text-secondary flex justify-start gap-x-2 items-start">
                        <GlobeAltIcon className="md:inline sm:hidden w-5 h-5 mt-1 md:mt-0 md:text-secondary" />
                        <p>www.eshcolventures.co.ke</p>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="md:flex md:flex-grow mx-auto shadow-xl rounded-b-lg pb-4 md:bg-gray-100 md:rounded-tr-lg md:rounded-br-lg max-w-[375px] md:max-w-full">
                  <form
                    className="pt-9 grid grid-cols-1 gap-y-4 mb-10 mx-auto place-content-center w-[90%] rounded-b-lg md:grid-cols-2 md:px-5 md:pb-2 md:flex-grow md:gap-x-4 md:w-[600px]"
                    action="api/message"
                    method="POST"
                  >
                    <div className="flex flex-col gap-y-1">
                      <label
                        className="text-md font-normal text-primary"
                        htmlFor="firstName"
                      >
                        First name <span className="text-red-400">*</span>
                      </label>
                      <input
                        onChange={handleFirstName}
                        className="h-11 rounded-lg bg-secondary p-2 text-primary outline-none focus:ring-4 ring-secondary-accent ring-opacity-40"
                        name="firstName"
                        type="text"
                      />
                    </div>

                    <div className="flex flex-col gap-y-1">
                      <label
                        className="text-md font-normal text-primary"
                        htmlFor="lastName"
                      >
                        Last name <span className="text-red-400">*</span>
                      </label>
                      <input
                        onChange={handleLastName}
                        className="h-11 rounded-lg bg-secondary p-2 text-primary outline-none focus:ring-4 ring-secondary-accent ring-opacity-40"
                        name="lastName"
                        type="text"
                      />
                    </div>

                    <div className="flex flex-col gap-y-1">
                      <label
                        className="text-md font-normal text-primary"
                        htmlFor="email"
                      >
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        onChange={handleEmail}
                        className="h-11 rounded-lg bg-secondary p-2 text-primary outline-none focus:ring-4 ring-secondary-accent ring-opacity-40"
                        name="email"
                        type="text"
                      />
                    </div>

                    <div className="flex flex-col gap-y-1">
                      <label
                        className="text-md font-normal text-primary flex justify-between"
                        htmlFor="phone"
                      >
                        <span>Phone</span>
                        <span className="text-gray-400">Optional</span>
                      </label>
                      <input
                        className="h-11 rounded-lg bg-secondary p-2 text-primary outline-none focus:ring-4 ring-secondary-accent ring-opacity-40"
                        name="phone"
                        type="text"
                      />
                    </div>

                    <div className="flex flex-col gap-y-1 md:col-span-2">
                      <label
                        className="text-md font-normal text-primary"
                        htmlFor="subject"
                      >
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <input
                        onChange={handleSubject}
                        className="h-11 rounded-lg bg-secondary p-2 text-primary outline-none focus:ring-4 ring-secondary-accent ring-opacity-40"
                        name="subject"
                        type="text"
                      />
                    </div>

                    <div className="flex flex-col gap-y-1 md:col-span-2">
                      <label
                        className="text-md flex justify-between font-normal text-primary"
                        htmlFor="message"
                      >
                        <span>
                          Message<span className="text-red-400"> *</span>
                        </span>
                        <span className="text-gray-400">
                          Max. 500 characters
                        </span>
                      </label>
                      <textarea
                        onChange={handleMessage}
                        className="rounded-lg bg-secondary p-2 text-primary outline-none focus:ring-4 ring-secondary-accent ring-opacity-40"
                        name="message"
                        id=""
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>
                    <span className="text-red-400">* Required</span>

                    <button
                      disabled={disabled}
                      className={` w-full md:w-[100px] h-auto p-4 mt-4 flex justify-center ${
                        disabled
                          ? " opacity-50"
                          : " opacity-90 hover:bg-secondary hover:text-secondary-accent"
                      } bg-secondary-accent text-secondary  md:justify-self-end md:col-start-2 rounded-lg`}
                      type="submit"
                    >
                      submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          }
        />
      </div>
      <Footer />
    </>
  );
}

export default Contacts;
