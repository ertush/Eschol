import Footer from "../components/Footer"
import NavHeader from "../components/NavHeader"
import Image from 'next/image'
import investmentImage from '../assets/images/impact-financing.jpeg'
import { Hexagon } from "../components/Hexagon"
import { ArrowNarrowRightIcon, ArrowNarrowDownIcon, ArrowNarrowLeftIcon } from "@heroicons/react/solid"
import Head from "next/head"


function Investment() {
    return (
        <>
        <Head>
            <title>Eshcol Ventures Ltd | Investments </title>
            <meta name="viewport" content="initial-scale=0.8, width=device-width" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="h-auto bg-secondary">
        <NavHeader />

        {/* Investment Parameters  */}

        <div className="grid grid-cols-1 w-full gap-2 mx-auto h-auto place-content-start md:px-0 md:py-0">
            <div className="relative w-full md:h-[900px] h-[1280px]">
                <Image className="w-full absolute filter blur-[1px] md:rounded-none" src={investmentImage} layout="fill" objectFit="cover"/>
                <div className=" z-10 absolute w-full filter blur rounded-bl-3xl rounded-tl-3xl bg-gradient-to-r from-secondary-accent via-secondary-accent to-transparent opacity-70 left-0 h-full "></div>
            
                {/* Investment Parameters */}

                <div className="z-20 absolute right-0 md:left-0 flex flex-col px-4 gap-y-2 justify-center items-start md:ml-5">
                    <h4 className=" w-full text-xl md:text-4xl font-bold md:font-extrabold text-white text-center md:text-start md:w-[200px] md:ml-8 mt-2 md:my-5">Investment Parameters</h4>

                    <ul>

                        <div className="space-y-2 space-x-2 md:space-x-1 ">
                            <ul className="text-left">
                                <li><p className="text-lg md:text-2xl font-semibold md:font-bold text-amber ml-4 md:ml-4">As a general Criteria</p></li>
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
                            <li className="flex justify-start md:justify-start md:pl-2 items-start gap-x-1 text-secondary">
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
                
                <div className="md:flex z-20 w-full absolute top-[450px] left-2 md:top-0 md:left-[800px]  flex-col gap-y-1 md:gap-x-6 justify-center items-start md:ml-5">
                <h4 className="w-full text-xl md:text-4xl font-bold md:font-extrabold text-white md:text-justify md:ml-6 text-center md:w-[200px] mb-4 md:mb-5 md:mr-10 mt-2 md:my-5">Investment Process</h4>
                    <div className="grid grid-flow-row place-content-center grid-cols-3 md:h-[720px] md:w-[400px]">
                        <div className="relative col-start-1 left-6 row-start-1">
                        <Hexagon
                            hexaStyles={'w-[100px] h-[100px] absolute text-amber'}
                            textStyles={'text-primary capitalize text-5xl font-semibold y-20'}
                            text={'Project-Analysis &-Preparation of-Investment-Application'}
                        />
                        </div>
                     

                        <ArrowNarrowRightIcon className="w-full h-[100px] p-4 -ml-4 md:-ml-0 text-amber col-start-2 row-start-1"/>

                         
                        <div className="relative col-start-3 row-start-1">
                        <Hexagon
                            hexaStyles={'w-[100px] h-[100px] text-amber '}
                            textStyles={'text-primary text-5xl font-semibold y-27'}
                            text={'Confirm-Funding-Groups-to engage'}
                        />
                        </div>
                     

                        <ArrowNarrowDownIcon className="w-full h-[100px] md:-ml-4 ml-[-18%] py-4 text-amber span col-start-3  row-start-2" />

                        <div className="relative col-start-3 row-start-3">
                            <Hexagon
                                hexaStyles={'w-[100px] h-[100px] text-amber '}
                                textStyles={'text-primary text-5xl font-semibold y-42'}
                                text={'Submission'}
                            />
                        </div>
                       

                       <ArrowNarrowLeftIcon className="w-full h-[100px] p-4 -ml-4 md:-ml-0 text-amber col-start-2 row-start-3" />

                        
                       <div className="relative left-6 col-start-1 row-start-3">
                       <Hexagon
                            hexaStyles={'w-[100px] h-[100px] text-amber '}
                            textStyles={'text-primary capitalize text-5xl font-semibold y-26'}
                            text={'Initial-Review-and Due-Diligence'}
                        />
                        </div>

                        <ArrowNarrowDownIcon className="w-full h-[100px] md:ml-1 ml-[-4%] py-4 text-amber col-start-1 row-start-4 " />

                        <div className="relative col-start-1  left-6  row-start-5">
                            <Hexagon
                                hexaStyles={'w-[100px] h-[100px] text-amber'}
                                textStyles={'text-primary capitalize text-5xl font-semibold y-36'}
                                text={'Outline-Terms-Issued'}
                            />
                        </div>
                    

                        <ArrowNarrowRightIcon className="w-full h-[100px] p-4 -ml-4 md:-ml-0 text-amber col-start-2 row-start-5"/>
                        
                        <div className="relative col-start-3 row-start-5">
                        <Hexagon
                            hexaStyles={'w-[100px] h-[100px] text-amber '}
                            textStyles={'text-primary text-5xl font-semibold y-42'}
                            text={'Negotiations-& Clarification'}
                        />
                        </div>

                        <ArrowNarrowDownIcon className="w-full h-[100px] md:-ml-4 ml-[-18%]   py-4 text-amber col-start-3 row-start-6" />

                        <div className="relative col-start-3 row-start-7">
                        <Hexagon
                            hexaStyles={'w-[100px] h-[100px] text-amber '}
                            textStyles={'text-primary text-5xl font-semibold y-36'}
                            text={'Signature of-Contracts &-Appendices'}
                        />
                        </div>

                        <ArrowNarrowLeftIcon className="w-full h-[100px] p-4  -ml-4 md:-ml-0 text-amber col-start-2 row-start-7" />

                        
                        <div className="relative col-start-1  left-6  row-start-7">
                            <Hexagon
                                hexaStyles={'w-[100px] h-[100px] text-amber'}
                                textStyles={'text-primary text-5xl font-semibold y-36'}
                                text={'Drawdown'}
                            />
                        </div>
                       
                    </div>
                 
                </div>
            </div>

         
        </div>
        
        {/* Investment Process */}

        <Footer/>
        </div>
        </>
    )
}

export default Investment
