import Footer from "../components/Footer"
import NavHeader from "../components/NavHeader"
import Image from 'next/image'
import investmentImage from '../assets/images/impact-financing.jpeg'
import { Hexagon } from "../components/Hexagon"
import { ArrowNarrowRightIcon, ArrowNarrowDownIcon, ArrowNarrowLeftIcon } from "@heroicons/react/solid"


function Services() {
    return (
        <div className="h-auto bg-secondary">
        <NavHeader />

        {/* Investment Parameters  */}

        <div className="grid grid-cols-1 w-full gap-2 mx-auto py-8 px-5 h-auto place-content-start md:px-0 md:py-0">
            <div className="relative w-full md:h-[800px] h-[1300px]">
                <Image className=" absolute rounded-3xl filter blur-[1px] md:rounded-none" src={investmentImage} layout="fill" objectFit="cover"/>
                <div className="z-10 absolute w-[100%] filter blur rounded-bl-3xl rounded-tl-3xl bg-gradient-to-r from-secondary-accent via-secondary-accent to-transparent opacity-70 left-0 h-full "></div>
            
                {/* Investment Parameters */}

                <div className="z-20 absolute right-0 md:left-0 flex flex-col gap-y-2 justify-center items-start md:ml-5">
                    <h4 className=" w-full text-xl md:text-4xl font-bold md:font-extrabold text-white text-center md:text-start md:w-1/3 md:ml-0 mt-2 md:my-5">Investment Parameters</h4>

                    <ul>

                        <div className="space-y-2 space-x-2 md:space-x-10">
                            <ul className="text-left">
                                <li><p className="text-lg md:text-2xl font-semibold md:font-bold text-yellow-500 ml-4 md:ml-12">As a general Criteria</p></li>
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
                                <li><p className="text-lg md:text-2xl font-semibold md:font-bold text-yellow-500 ml-2 md:mt-8">Public Listed Companies</p></li>
                            </ul>
                            <li className="flex justify-between md:justify-start md:pl-2 items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md md:text-xl font-semibold">
                                Market Capitalization from USD 10M to USD 500M.
                            </p>
                            </li>
                            <li className="flex justify-between md:justify-start md:pl-2 items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md md:text-xl font-semibold">
                                Plans to raise capital within the next 6 months
                            </p>
                            </li>
                            <ul className="text-left">
                                <li><p className="text-lg md:text-2xl font-semibold md:font-bold text-yellow-500 ml-2 md:mt-8">Private Companies</p></li>
                            </ul>
                            <li className="flex justify-between md:justify-start md:pl-2 items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md md:text-xl font-semibold">
                            Company Valuation should be minimum USD20M, no maximum
                            </p>
                            </li>
                            <li className="flex justify-between md:justify-start md:pl-2 items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md md:text-xl font-semibold">
                            Short plans to be listed in a more liquid stock exchange (within the next 6 to 12 months).
                            </p>
                            </li>

                        </div>
                        </ul>
                </div> 

                {/* Investment Process */}
               <div className="z-20 w-full absolute top-[520px] md:top-0 md:left-[1090px] flex flex-col gap-y-2 md:gap-x-6 justify-center items-start md:ml-5">
                    <h4 className="w-full text-xl md:text-4xl font-bold md:font-extrabold text-white text-center md:text-start md:w-1/4 md:mr-10 mt-2 md:my-5">Investment Process</h4>
                        

                        <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-yellow-500 absolute top-16 md:top-[92px] left-2'}
                            textStyles={'text-primary capitalize text-5xl font-semibold y-20'}
                            text={'Project-Analysis &-Preparation of-Investment-Application'}
                        />

                        <ArrowNarrowRightIcon className="w-8 h-8 text-yellow-500 absolute top-[110px] md:top-[138px] left-[154px]"/>

                        <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-yellow-500 absolute top-16 md:top-[92px] left-[200px] pr-1'}
                            textStyles={'text-primary text-5xl font-semibold y-27'}
                            text={'Confirm-Funding-Groups-to engage'}
                        />

                        <ArrowNarrowDownIcon className="w-8 h-8 text-yellow-500 absolute top-[200px] md:top-[228px] left-[250px]" />

                        <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-yellow-500 absolute top-60 md:top-[268px] left-[200px] pr-1'}
                            textStyles={'text-primary text-5xl font-semibold y-42'}
                            text={'Submission'}
                        />

                       <ArrowNarrowLeftIcon className="w-8 h-8 text-yellow-500 absolute top-[290px] md:top-[318px] left-[154px]" />

                       <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-yellow-500 absolute top-60 md:top-[268px] left-2'}
                            textStyles={'text-primary capitalize text-5xl font-semibold y-26'}
                            text={'Initial-Review-and Due-Diligence'}
                        />

                        <ArrowNarrowDownIcon className="w-8 h-8 text-yellow-500 absolute top-[386px] md:top-[414px] left-[55px]" />
                
                        <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-yellow-500 absolute top-[430px] md:top-[458px] left-2'}
                            textStyles={'text-primary capitalize text-5xl font-semibold y-36'}
                            text={'Outline-Terms-Issued'}
                        />

                        <ArrowNarrowRightIcon className="w-8 h-8 text-yellow-500 absolute top-[480px] md:top-[508px] left-[154px]"/>

                        <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-yellow-500 absolute top-[430px] md:top-[458px] left-[200px] pr-1'}
                            textStyles={'text-primary text-5xl font-semibold y-42'}
                            text={'Negotiations-& Clarification'}
                        />

                        <ArrowNarrowDownIcon className="w-8 h-8 text-yellow-500 absolute top-[570px] md:top-[598px] left-[250px]" />
              
                        <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-yellow-500 absolute top-[610px] md:top-[638px] left-[200px] pr-1'}
                            textStyles={'text-primary text-5xl font-semibold y-36'}
                            text={'Signature of-Contracts &-Appendices'}
                        />

                        <ArrowNarrowLeftIcon className="w-8 h-8 text-yellow-500 absolute top-[659px] md:top-[687px] left-[154px]" />
             
                        <Hexagon
                            hexaStyles={'w-[130px] h-[130px] text-yellow-500 absolute top-[610px] md:top-[638px] left-2 pr-1'}
                            textStyles={'text-primary text-5xl font-semibold y-36'}
                            text={'Drawdown'}
                        />
                </div>
            </div>

         
        </div>
        
        {/* Investment Process */}

        <Footer/>
        </div>
    )
}

export default Services
