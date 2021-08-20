import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";
import { useState } from "react";
import { Hexagon } from "../components/Hexagon";
import {
  ArrowNarrowRightIcon,
  ArrowNarrowDownIcon,
  ArrowNarrowLeftIcon,
  CheckCircleIcon,
} from "@heroicons/react/solid";
import Head from "next/head";

function Investment() {
  const [startLabel, setStartLabel] = useState(false);
  const [endLabel, setEndLabel] = useState(false);

  return (
    <>
      <Head>
        <title>Eshcol Ventures Ltd | Investments </title>
        <meta name="viewport" content="initial-scale=0.8, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavHeader />

      <div className="h-auto bg-secondary px-8 py-2">
        {/* Investment Parameters  */}
        <h2 className="hidden md:flex text-2xl md:text-4xl font-bold  justify-center mt-8 text-primary ">
          Investment Parameters
        </h2>
        <div className="w-full h-auto mx-auto my-10 space-y-16 md:flex md:justify-evenly md:mt-0 md:items-start">
          <h2 className="text-2xl md:text-4xl font-bold  flex justify-center mb-12 md:hidden text-primary">
            Investment Parameters
          </h2>

          <div className="relative h-[280px] bg-white rounded-lg shadow-lg md:w-[30%] md:h-[300px] md:max-h-[600px]">
            <CheckCircleIcon className=" z-10 w-16 h-20 text-secondary-accent absolute right-[42%] -top-8" />
            <div className="absolute flex flex-col justify-evenly items-center px-8 py-8 space-y-3">
              <h3 className="text-center text-xl font-semibold text-primary pt-2">
                As a general criteria
              </h3>
              <p className="text-left text-md font-md text-primary">
                Companies with plans to raise capital from USD 10M up to USD
                2Bn. 
              </p>
              <p className="text-left text-md font-md text-primary">
                Companies in financial services will be considered on their own
                merit.
              </p>
              <p className="text-left text-md font-md text-primary">
                For debt: Interest rate , moratorium ,securitization and loan
                repayment period upon mutual agreement{" "}
              </p>
            </div>
          </div>

          <div className="relative h-[220px] bg-white rounded-lg shadow-lg md:w-[30%] md:h-[300px] md:max-h-[600px]">
            <CheckCircleIcon className=" z-10 w-16 h-20 text-secondary-accent absolute right-[42%] -top-8" />
            <div className="absolute flex flex-col justify-evenly items-center px-8 py-8 space-y-3">
              <h3 className="text-center text-xl font-semibold text-primary pt-2">
                Private Companies
              </h3>
              <p className="text-left text-md font-md text-primary">
                Company Valuation should be minimum USD20M, no maximum
              </p>
              <p className="text-left text-md font-md text-primary">
                Short plans to be listed in a more liquid stock exchange (within
                the next 6 to 12 months).
              </p>
            </div>
          </div>

          <div className="relative h-[168px] bg-white rounded-lg shadow-lg md:w-[30%] md:h-[300px] md:max-h-[600px]">
            <CheckCircleIcon className=" z-10 w-16 h-20 text-secondary-accent absolute right-[42%] -top-8" />
            <div className="absolute flex flex-col justify-evenly items-center px-8 py-8 space-y-3">
              <h3 className="text-center text-xl font-semibold text-primary pt-2">
                Publicly Listed Companies
              </h3>
              <p className="text-left text-md font-md text-primary">
                Market Capitalization from USD 10M to USD 500M
              </p>
              <p className="text-left pr-8 text-md font-md text-primary">
                Plans to raise capital within the next 6 months
              </p>
            </div>
          </div>
        </div>

        {/* Investment Process */}

        <h2 className="text-2xl md:text-4xl font-bold  flex justify-center text-primary md:mb-16">
          Investment Parameters
        </h2>
        <div className="bg-white rounded-lg p-8 md:p-0 shadow-lg my-8 md:my-0 flex space-x-12 md:space-x-0 justify-center items-center h-auto md:flex-col md:justify-start md:items-center md:mb-10">
          <div className="flex flex-col  justify-evenly space-y-2 items-center h-[900px] w-[100px] md:h-[350px] md:max-w-full md:flex-row md:w-full md:items-around ">
            <div
              onMouseOver={() => setStartLabel(true)}
              className="relative w-[300px] h-[400px] "
            >
              {startLabel && (
                <span className="hidden md:flex text-2xl font-semibold  w-[70px] h-[70px] text-center md:absolute md:left-[36%] md:top-[12%] bg-amber p-4 text-primary rounded-full justify-center items-center">
                  start
                </span>
              )}

              <Hexagon
                hexaStyles={" text-primary absolute left-[25%]"}
                textStyles={
                  "text-secondary capitalize text-5xl font-semibold y-20"
                }
                text={
                  "Project-Analysis &-Preparation of-Investment-Application"
                }
              />
            </div>
            <span className="w-1 h-20 bg-gray-400 rounded-full md:transform md:hidden"></span>
            <ArrowNarrowRightIcon className="w-20 h-10 text-gray-400 hidden md:flex" />

            <div className="relative w-[300px] h-[400px]">
              <Hexagon
                hexaStyles={" text-primary absolute left-[25%]"}
                textStyles={"text-secondary text-5xl font-semibold y-27"}
                text={"Confirm-Funding-Groups-to engage"}
              />
            </div>
            <span className="w-1 h-20 bg-gray-400 rounded-full md:transform md:hidden"></span>
            <ArrowNarrowRightIcon className="w-20 h-10 text-gray-400 hidden md:flex" />

            <div className="relative w-[300px] h-[400px]">
              <Hexagon
                hexaStyles={" text-primary absolute left-[25%]"}
                textStyles={"text-secondary text-5xl font-semibold y-42"}
                text={"Submission"}
              />
            </div>
            <span className="w-1 h-20 bg-gray-400 rounded-full md:transform md:hidden"></span>
            <ArrowNarrowRightIcon className="w-20 h-10 text-gray-400 hidden md:flex" />

            <div className="relative w-[300px] h-[400px]">
              <Hexagon
                hexaStyles={" text-primary absolute left-[25%]"}
                textStyles={
                  "text-secondary capitalize text-5xl font-semibold y-26"
                }
                text={"Initial-Review-and Due-Diligence"}
              />
            </div>
            <span className="w-1 h-20 bg-gray-400 rounded-full md:transform md:hidden"></span>
            <ArrowNarrowRightIcon className="w-20 h-10 text-gray-400 hidden md:flex" />

            <div
              onMouseOver={() => setEndLabel(true)}
              className="relative w-[300px] h-[400px]"
            >
              {endLabel && (
                <span className="hidden md:flex text-2xl font-semibold text-center  w-[70px] h-[70px] md:absolute md:left-[35%] md:top-[12%] bg-secondary-accent p-2 text-secondary rounded-full justify-center items-center">
                  end
                </span>
              )}
              <Hexagon
                hexaStyles={" text-primary absolute left-[25%]"}
                textStyles={
                  "text-secondary capitalize text-5xl font-semibold y-36"
                }
                text={"Outline-Terms-Issued"}
              />
            </div>
          </div>

          <div className="flex flex-col h-[900px] justify-evenly items-center md:hidden">
            <span className="text-2xl font-semibold text-center  bg-amber p-4 text-primary rounded-lg justify-center items-center">
              start
            </span>

            <ArrowNarrowDownIcon className=" w-[80px] h-[620px] text-gray-400 " />

            <span className="text-2xl font-semibold text-center bg-secondary-accent p-4 text-secondary rounded-lg justify-center items-center">
              end
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Investment;
