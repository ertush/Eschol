import Footer from "../components/Footer"
import NavHeader from "../components/NavHeader"
import Image from 'next/image'
import investmentImage from '../assets/images/impact-financing.jpeg'
import { Hexagon } from "../components/Hexagon"
import { ArrowNarrowRightIcon, ArrowNarrowDownIcon, ArrowNarrowLeftIcon } from "@heroicons/react/solid"
import Head from "next/head"


function Services() {
    return (
        <>
        <Head>
            <title>Eshcol Ventures Ltd | Investments </title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="h-auto bg-secondary">
        <NavHeader />

        {/* Investment Parameters  */}

        <div className="grid grid-cols-1 w-full gap-2 mx-auto h-auto place-content-start md:px-0 md:py-0">
            <div className="relative w-full md:h-[800px] h-[550px]">
                <Image className="w-full absolute filter blur-[1px] md:rounded-none" src={investmentImage} layout="fill" objectFit="cover"/>
                <div className=" z-10 absolute w-full filter blur rounded-bl-3xl rounded-tl-3xl bg-gradient-to-r from-secondary-accent via-secondary-accent to-transparent opacity-70 left-0 h-full "></div>
            
                {/* Investment Parameters */}

                <div className="z-20 absolute right-0 md:left-0 flex flex-col px-4 gap-y-2 justify-center items-start md:ml-5">
                    <h4 className=" w-full text-xl md:text-4xl font-bold md:font-extrabold text-white text-center md:text-start md:w-1/3 md:ml-0 mt-2 md:my-5">Investment Parameters</h4>

                    <ul>

                        <div className="space-y-2 space-x-2 md:space-x-10 ">
                            <ul className="text-left">
                                <li><p className="text-lg md:text-2xl font-semibold md:font-bold text-amber ml-4 md:ml-12">As a general Criteria</p></li>
                            </ul>
                            <li className="flex justify-between md:justify-start md:pl-2 items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md md:text-xl font-semibold">
                            Companies with plans to raise capital from USD 10M up to USD 200M.
                            </p>
                            </li>
                            <li className="flex justify-between md:justify-start md:pl-2 items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md md:text-xl font-semibold">
                            Companies in financial services will be considered on their own merit.
                            </p>
                            </li>
                            <ul className="text-left">
                                <li><p className="text-lg md:text-2xl font-semibold md:font-bold text-amber ml-2 md:mt-8">Public Listed Companies</p></li>
                            </ul>
                            <li className="flex justify-between md:justify-start md:pl-2 items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md md:text-xl font-semibold">
                                Market Capitalization from USD 10M to USD 500M.
                            </p>
                            </li>
                            <li className="flex justify-start md:justify-start md:pl-2 items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md md:text-xl font-semibold">
                                Plans to raise capital within the next 6 months
                            </p>
                            </li>
                            <ul className="text-left">
                                <li><p className="text-lg md:text-2xl font-semibold md:font-bold text-amber ml-2 md:mt-8">Private Companies</p></li>
                            </ul>
                            <li className="flex justify-between md:justify-start md:pl-2 items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md md:text-xl font-semibold">
                            Company Valuation should be minimum USD20M, no maximum
                            </p>
                            </li>
                            <li className="flex justify-between md:justify-start md:pl-2 items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left md:w-[600px] text-secondary text-md md:text-xl font-semibold">
                            Short plans to be listed in a more liquid stock exchange (within the next 6 to 12 months).
                            </p>
                            </li>

                        </div>
                        </ul>
                </div>  

                {/* Investment Process */}
                
                <div className="hidden md:flex z-20 w-full absolute top-[520px] left-2 md:top-0 md:left-[1000px]  flex-col gap-y-1 md:gap-x-6 justify-center items-start md:ml-5">
                    <h4 className="w-full text-xl md:text-4xl font-bold md:font-extrabold text-white text-center md:text-start md:w-1/4 md:mr-10 mt-2 md:my-5">Investment Process</h4>
                        

                        <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-amber absolute top-20 md:top-[92px] -left-2 md:-left-80'}
                            textStyles={'text-primary capitalize text-5xl font-semibold y-20'}
                            text={'Project-Analysis &-Preparation of-Investment-Application'}
                        />

                        <ArrowNarrowRightIcon className="w-8 h-8 text-amber absolute top-[127px] md:left-[150px] md:top-[138px] left-[160px]"/>

                        <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-amber absolute top-20 md:top-[92px] left-[175px] md:-left-32'}
                            textStyles={'text-primary text-5xl font-semibold y-27'}
                            text={'Confirm-Funding-Groups-to engage'}
                        />

                        <ArrowNarrowDownIcon className="w-8 h-8 text-amber absolute top-[215px] md:top-[228px]  md:left-[250px] left-[253px]" />

                        <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-amber absolute top-[254px] md:top-[268px] left-[175px] md:-left-32'}
                            textStyles={'text-primary text-5xl font-semibold y-42'}
                            text={'Submission'}
                        />

                       <ArrowNarrowLeftIcon className="w-8 h-8 text-amber absolute top-[302px] md:top-[318px] md:left-[150px] left-[160px]" />

                       <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-amber absolute top-[254px] md:top-[268px] -left-2 md:-left-80'}
                            textStyles={'text-primary capitalize text-5xl font-semibold y-26'}
                            text={'Initial-Review-and Due-Diligence'}
                        />

                        <ArrowNarrowDownIcon className="w-8 h-8 text-amber absolute top-[388px] md:top-[414px]  md:left-[55px] left-[68px]" />
                
                        <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-amber absolute top-[423px] md:top-[458px] -left-2 md:-left-80'}
                            textStyles={'text-primary capitalize text-5xl font-semibold y-36'}
                            text={'Outline-Terms-Issued'}
                        />

                        <ArrowNarrowRightIcon className="w-8 h-8 text-amber absolute top-[470px] md:top-[508px] md:left-[150px] left-[160px]"/>

                        <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-amber absolute top-[423px] md:top-[458px] left-[175px] md:-left-32'}
                            textStyles={'text-primary text-5xl font-semibold y-42'}
                            text={'Negotiations-& Clarification'}
                        />

                        <ArrowNarrowDownIcon className="w-8 h-8 text-amber absolute top-[560px] md:top-[598px]  md:left-[250px] left-[253px]" />
              
                        <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-amber absolute top-[600px] md:top-[638px] left-[175px] md:-left-32'}
                            textStyles={'text-primary text-5xl font-semibold y-36'}
                            text={'Signature of-Contracts &-Appendices'}
                        />

                        <ArrowNarrowLeftIcon className="w-8 h-8 text-amber absolute top-[649px] md:top-[687px]  md:left-[150px] left-[160px]" />
             
                        <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-amber absolute top-[600px] md:top-[638px] -left-2 md:-left-80'}
                            textStyles={'text-primary text-5xl font-semibold y-36'}
                            text={'Drawdown'}
                        />
                </div>
            </div>

         
        </div>
        
        {/* Investment Process */}

        <Footer/>
        </div>
        </>
    )
}

export default Services
