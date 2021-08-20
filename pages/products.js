import NavHeader from "../components/NavHeader";
import { useState } from "react";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Image from "next/image";
import growthCapitalImg from "../assets/images/growth-capital.jpeg";
import IPOImage from "../assets/images/IPO-rsz.jpg";
import ESGImage from "../assets/images/ESG-rsz.jpg";
import refinancingImage from "../assets/images/refinancing-rsz.jpg";
import impactFinancingImage from "../assets/images/impact-financing-rsz.jpg";
import projectFinancingImage from "../assets/images/project-financing-rsz.jpg";
import ProductView from "../components/ProductView";
import bgImage from "../assets/images/kicc.jpg";
import Head from "next/head";

function Products() {
  const [capitalCard, setCapitalCard] = useState(true);
  const [refinancingCard, setRefinancingCard] = useState(true);
  const [ipoCard, setIPOCard] = useState(true);
  const [esgCard, setESGCard] = useState(true);
  const [impactCard, setImpactCard] = useState(true);
  const [projectCard, setProjectCard] = useState(true);

  const productViewData = [
    {
      id: 1,
      name: "growth-capital-image",
      hexaPosition: `${capitalCard ? "-right-10" : "-right-14 top-[-318px]"}`,
      text: "growth-capital",
      imageStyle: "rounded-t-lg shadow-xl",
      cardHeight: "h-[550px] mb-28 md:mb-8",
      infoPosition: " top-[30%]",
      chevronPosition: "left-2",
      info: (() => (
        <div className="flex flex-col justify-start md:text-md md:justify-evenly items-center px-4 pb-2 pt-4 md:pt-16 gap-y-2 overflow-scroll md:overflow-x-hidden md:overflow-y-hidden w-full h-auto">
          <p className="text-justify text-sm md:text-md font-normal text-primary">
            Growth Capital (also known as growth equity or expansion capital) is
            a type of investment opportunity in relatively mature companies that
            are going through some transformational event in their lifecycle
            with potential for some dramatic growth.
          </p>
          <p className="text-justify text-sm md:text-md font-normal text-primary">
            Growth capital is utilized by businesses to subsidize the expansion
            of their operations, entrance into new markets, and acquisitions to
            boost the company’s revenues and profitability. Growth equity
            investors benefit from the high growth potential and moderate risk
            of the investments.
          </p>
          <p className="text-justify text-sm md:text-md font-normal text-primary">
            Growth equity deals generally imply minority investments. Such deals
            are commonly executed using preferred shares. Note that growth
            equity investors tend to prefer companies with low leverage or no
            debt at all.
          </p>
        </div>
      ))(),
    },
    {
      id: 2,
      name: "refinancing-image",
      hexaPosition: `${refinancingCard ? "-left-10" : "top-[-318px]"}`,
      text: "company-refinancing",
      imageStyle: "rounded-t-lg shadow-xl",
      cardHeight: "h-[550px] mb-6 md:mb-8",
      infoPosition: "top-[30%]",
      chevronPosition: "right-2",
      info: (() => (
        <div className="flex flex-col justify-start md:text-md md:justify-evenly items-center px-4 pb-2 pt-4 md:pt-16 gap-y-2 overflow-scroll md:overflow-x-hidden md:overflow-y-hidden w-full h-auto">
          <p className="text-justify text-sm md:text-md font-normal text-primary">
            Company refinancing is the process through which a company
            reorganizes its financial obligations by replacing or restructuring
            existing debts. Corporate refinancing is often done to improve a
            company's financial position. Through refinancing, a company can
            receive more favorable interest rates, improve their{" "}
            <a
              href="https://www.investopedia.com/terms/c/creditquality.asp"
              className="underline text-yellow-600"
            >
              credit quality
            </a>{" "}
            , and secure more favorable financing options. It can also be done
            while a company is in distress with the help of{" "}
            <a
              href="https://www.investopedia.com/terms/d/debtrestructuring.asp"
              className="underline text-yellow-600"
            >
              debt restructuring
            </a>
            .
          </p>
          <p className="text-justify text-sm md:text-md font-normal text-primary">
            Generally, the result of a corporate refinancing is reduced monthly
            interest payments, more favorable loan terms, risk reduction, and
            access to more cash for operations and capital investment.
          </p>
        </div>
      ))(),
    },
    {
      id: 3,
      name: "IPO-image",
      hexaPosition: `${ipoCard ? "-right-10" : "-right-14 top-[-318px]"}`,
      text: "IPO",
      imageStyle: "rounded-t-lg shadow-xl",
      cardHeight: "h-[550px] mb-20 md:mb-36 md:max-h-[500px] mb-64",
      infoPosition: "top-[30%]",
      chevronPosition: "left-2",
      info: (() => (
        <div>
          <div className="flex flex-col justify-start  md:text-md md:justify-evenly items-center px-4 pb-2 pt-4 md:pt-96 gap-y-2 overflow-auto md:overflow-x-hidden w-full h-[550px] md:h-[500px]">
            <p className="text-justify text-sm md:text-md font-normal text-primary">
              If you are planning an IPO or are already a Publicly Listed
              Company (plc), you should consider a Share Subscription Facility.
            </p>
            <p className="text-justify text-sm md:text-md font-normal text-primary">
              A share subscription facility is a legally binding commitment of
              equity, in which your company has an option to draw down on equity
              at your own discretion/desire over a period of 3 years
              (typically). Essentially you will be able to control the timing
              and the maximum amounts of the draw down.
            </p>
            <p className="text-justify text-sm md:text-md font-normal text-primary">
              Companies decide to put a structure like this in place for a
              variety of reasons besides actually funding, i.e., like to send a
              strong message to the market about their capitalization. By having
              the line in place today a Company can act quickly and can be
              better prepared to capitalize on opportunities in the marketplace.
            </p>
            <p className="text-justify text-sm md:text-md font-normal text-primary">
              Some companies take the line and put it in place yet they never
              intend to use it but they decide they want to benefit from the
              announcement to the marketplace by showing they are well funded by
              a recognized global investment group. We have seen companies in
              several markets use this legally binding commitment of equity to
              negotiate better conditions with banks either to refinance
              existing debt or to take on new debt. This structure is a
              complement to other sources of financing and thus generally
              creates positive feedback from an announcement to the market.{" "}
            </p>
            <p className="text-justify text-sm md:text-md font-normal text-primary">
              If you are a Pre-IPO company or an already listed company trading
              in a liquid stock exchange and looking to raise capital in 6 to 12
              months time, kindly drop us a line at{" "}
              <span className="text-yellow-600">
                enquiries@eshcolventures.co.ke
              </span>
              and learn more about the Share Subscription Facility.
            </p>
          </div>
        </div>
      ))(),
    },
    {
      id: 4,
      name: "ESG-image",
      hexaPosition: `${esgCard ? "-left-10" : "top-[-318px]"}`,
      text: "ESG",
      imageStyle: "rounded-t-lg shadow-xl",
      cardHeight: "h-[650px] md:h-[550px] md:mb-8",
      infoPosition: "md:top-[30%] top-[25%]",
      chevronPosition: "right-2",
      info: (() => (
        <div className="flex flex-col justify-start md:text-md md:justify-evenly items-center px-4 pb-2 pt-4 md:pt-16 gap-y-2 overflow-scroll md:overflow-x-hidden md:overflow-y-hidden w-full h-auto">
          <p className="text-justify text-sm md:text-md font-normal text-primary">
            Environmental, social, and governance (ESG) criteria are a set of
            standards for a company’s operations that socially conscious
            investors use to screen potential investments. Environmental
            criteria consider how a company performs as a steward of nature.
            Social criteria examine how it manages relationships with employees,
            suppliers, customers, and the communities where it operates.
            Governance deals with a company’s leadership, executive pay,{" "}
            <a className="underline text-yellow-600">audits</a>,{" "}
            <a className="underline text-yellow-600">internal controls</a>, and
            shareholder rights.
          </p>
          <p className="text-justify text-sm md:text-md font-normal text-primary">
            Environmental, social, and governance (ESG) criteria are an
            increasingly popular way for investors to evaluate companies in
            which they might want to invest. We assist companies with an ESG
            strategy secure funding from these impact investors.
          </p>
        </div>
      ))(),
    },
    {
      id: 5,
      name: "project-financing-image",
      hexaPosition: `${projectCard ? "-right-10" : "-right-14 top-[-318px]"}`,
      text: "project-financing",
      imageStyle: "rounded-t-lg shadow-xl",
      cardHeight: "h-[550px] md:h-[550px] md:mb-8",
      infoPosition: "top-[30%]",
      chevronPosition: "left-2",
      info: (() => (
        <div className="flex flex-col justify-start md:text-md md:justify-evenly items-center px-4 pb-2 pt-4 md:pt-16 gap-y-2 overflow-scroll md:overflow-x-hidden md:overflow-y-hidden w-full h-auto">
          <p className="text-justify text-sm md:text-md font-normal text-primary">
            Project finance is the funding (financing) of long-term
            infrastructure, industrial projects, and public services using a
            non-recourse or limited recourse{" "}
            <a className="underline text-yellow-600">financial structure</a>.
            The debt and equity used to finance the project are paid back from
            the cash flow generated by the project.
          </p>
          <p className="text-justify text-sm md:text-md font-normal text-primary">
            Project financing is a loan structure that relies primarily on the
            project's cash flow for repayment, with the project's assets,
            rights, and interests held as secondary collateral. Project finance
            is especially attractive to the private sector because companies can
            fund major projects{" "}
            <a className="underline text-yellow-600">off-balance sheet</a>.
          </p>
        </div>
      ))(),
    },
    {
      id: 6,
      name: "impact-financing-image",
      hexaPosition: `${impactCard ? "-left-10" : "top-[-318px]"}`,
      text: "impact-financing",
      imageStyle: "rounded-t-lg shadow-xl",
      cardHeight: "h-[650px] md:h-[550px] md:mb-8",
      infoPosition: "top-[30%] md:top-[30%] top-[25%]",
      chevronPosition: "right-2",
      info: (() => (
        <div className="flex flex-col justify-start md:text-md md:justify-evenly items-center px-4 pb-2 pt-4 md:pt-16  gap-y-2 overflow-scroll md:overflow-x-hidden md:overflow-y-hidden w-full h-auto">
          <p className="text-justify text-sm  md:text-md font-normal text-primary">
            Impact investments are investments made with the intention to
            generate positive, measurable social and environmental impact
            alongside a financial return. Impact investments can be made in both
            emerging and developed markets, and target a range of returns from
            below market to market rate, depending on investors' strategic
            goals.
          </p>
          <p className="text-justify text-sm  md:text-md font-normal text-primary">
            The growing impact investment market provides capital to address the
            world’s most pressing challenges in sectors such as sustainable
            agriculture, renewable energy, conservation, microfinance, and
            affordable and accessible basic services including housing,
            healthcare, and education.
          </p>
        </div>
      ))(),
    },
  ];

  const productViewDataAlt = [
    productViewData[0],
    productViewData[2],
    productViewData[4],
    productViewData[1],
    productViewData[3],
    productViewData[5],
  ];

  return (
    <>
      <Head>
        <title>Eshcol Ventures Ltd | Products </title>
        <meta name="viewport" content="initial-scale=0.8, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <div className="h-auto bg-secondary">
      
          {/* Header */}
        <NavHeader />

          {/* Heading */}
        <Heading
          isSideHeading={false}
          content={
            <>
              <div className="text-center md:w-1/2 md:my-40">
                <h2 className="mb-2 text-3xl md:text-5xl md:my-10 font-bold capitalize text-primary md:text-gray-200">
                  <span className="text-secondary md:text-amber">Our</span>{" "}
                  Products
                </h2>
                <span className="text-md font-semibold md:text-lg text-gray-200">
                  range from Corporate Funding, Retail Loans, Promoter Funding,
                  International Funding, Project Funding, Loan Restructuring
                  Subsidies, to Private Equity & Venture Capital.
                </span>
              </div>
            </>
          }
          h={"h-[300px] md:h-[550px] md:h-[550px] opacity-40"}
          bgImage={bgImage}
          imageGradient={""}
          contentSpacing={"gap-y-8 md:gap-y-8"}
          hImage={" h-auto md:h-[550px] md:h-[550px]"}
        />

        {/* Products Section */}

        <div className="flex flex-col justify-center md:text-md items-center px-16 py-9 space-y-10 h-auto md:hidden">
          {productViewData.map(
            ({
              chevronPosition,
              handleClick,
              id,
              hexaPosition,
              imageStyle,
              text,
              name,
              info,
              cardHeight,
              infoPosition
            }) => {
              const image = (() => {
                switch (id) {
                  case 1:
                    return growthCapitalImg;
                  case 2:
                    return refinancingImage;
                  case 3:
                    return IPOImage;
                  case 4:
                    return ESGImage;
                  case 5:
                    return projectFinancingImage;
                  case 6:
                    return impactFinancingImage;
                }
              })();

              {
                /* {hexaPosition, imageCircle, text */
              }

              return (
                <ProductView
                  chevronPosition={chevronPosition}
                  infoPosition={infoPosition}
                  id={id}
                  onPressCb={(state, id) => {
                    const setters = [
                      setCapitalCard,
                      setRefinancingCard,
                      setIPOCard,
                      setESGCard,
                      setProjectCard,
                      setImpactCard,
                    ];
                    switch (id) {
                      case 1:
                        setters.splice(0, 1);
                        setters.forEach((setter) => {
                          setter(true);
                        });
                        setCapitalCard(state);
                        break;
                      case 2:
                        setters.splice(1, 1);
                        setters.forEach((setter) => {
                          setter(true);
                        });
                        setRefinancingCard(state);
                        break;
                      case 3:
                        setters.splice(2, 1);
                        setters.forEach((setter) => {
                          setter(true);
                        });
                        setIPOCard(state);
                        break;
                      case 4:
                        setters.splice(3, 1);
                        setters.forEach((setter) => {
                          setter(true);
                        });
                        setESGCard(state);
                        break;
                      case 5:
                        setters.splice(4, 1);
                        setters.forEach((setter) => {
                          setter(true);
                        });
                        setProjectCard(state);
                        break;
                      case 6:
                        setters.splice(5, 1);
                        setters.forEach((setter) => {
                          setter(true);
                        });
                        setImpactCard(state);
                        break;
                    }
                  }}
                  cardHeight={cardHeight}
                  key={id}
                  handleClick={handleClick}
                  hexaPosition={hexaPosition}
                  imageCircle={
                    <Image src={image} alt={name} className={imageStyle} />
                  }
                  text={text}
                  info={info}
                />
              );
            }
          )}
        </div>


        <div className="hidden md:gap-y-20 md:py-20 md:gap-x-32 p-9 md:grid md:grid-cols-3 md:place-content-center md:mb-5">
          {productViewDataAlt.map(
            ({
              chevronPosition,
              handleClick,
              id,
              hexaPosition,
              imageStyle,
              text,
              name,
              info,
              cardHeight,
              infoPosition
            }) => {
              const image = (() => {
                switch (id) {
                  case 1:
                    return growthCapitalImg;
                  case 2:
                    return refinancingImage;
                  case 3:
                    return IPOImage;
                  case 4:
                    return ESGImage;
                  case 5:
                    return projectFinancingImage;
                  case 6:
                    return impactFinancingImage;
                }
              })();

              return (
                <ProductView
                  chevronPosition={chevronPosition}
                  infoPosition={infoPosition}
                  id={id}
                  onPressCb={(state, id) => {
                    const setters = [
                      setCapitalCard,
                      setRefinancingCard,
                      setIPOCard,
                      setESGCard,
                      setProjectCard,
                      setImpactCard,
                    ];
                    switch (id) {
                      case 1:
                        setters.splice(0, 1);
                        setters.forEach((setter) => {
                          setter(true);
                        });
                        setCapitalCard(state);
                        break;
                      case 2:
                        setters.splice(1, 1);
                        setters.forEach((setter) => {
                          setter(true);
                        });
                        setRefinancingCard(state);
                        break;
                      case 3:
                        setters.splice(2, 1);
                        setters.forEach((setter) => {
                          setter(true);
                        });
                        setIPOCard(state);
                        break;
                      case 4:
                        setters.splice(3, 1);
                        setters.forEach((setter) => {
                          setter(true);
                        });
                        setESGCard(state);
                        break;
                      case 5:
                        setters.splice(4, 1);
                        setters.forEach((setter) => {
                          setter(true);
                        });
                        setProjectCard(state);
                        break;
                      case 6:
                        setters.splice(5, 1);
                        setters.forEach((setter) => {
                          setter(true);
                        });
                        setImpactCard(state);
                        break;
                    }
                  }}
                  cardHeight={cardHeight}
                  key={id}
                  handleClick={handleClick}
                  hexaPosition={hexaPosition}
                  imageCircle={
                    <Image src={image} alt={name} className={imageStyle} />
                  }
                  text={text}
                  info={info}
                />
              );
            }
          )}
        </div>
       {/* Footer */}
      <Footer />
      </div>
 
    </>
  );
}

export default Products;
