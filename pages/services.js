import Footer from "../components/Footer"
import NavHeader from "../components/NavHeader"
import Image from 'next/image'
import investmentImage from '../assets/images/impact-financing.jpeg'



function Services() {
    return (
        <div className="h-auto bg-secondary">
        <NavHeader />

        {/* Investment Parameters  */}

        <div className="grid grid-cols-1 w-full gap-2 mx-auto p-5 h-auto place-content-start">
            <div className="relative w-full h-[550px]">
                <Image className=" absolute rounded-3xl filter blur-[1px]" src={investmentImage} layout="fill" objectFit="cover"/>
                <div className=" z-10 absolute w-[100%] filter blur rounded-bl-3xl rounded-tl-3xl bg-gradient-to-r from-secondary-accent via-secondary-accent to-transparent opacity-70 left-0 h-full "></div>
            
                <div className="z-20 absolute w-auto right-0 flex flex-col gap-y-2 justify-center items-start p-2">
                    <h4 className="  text-xl font-bold text-white text-left ml-2 mt-2">Investment Parameters</h4>

                    <ul>

                        <li className="space-y-2">
                            <ul className="text-left">
                                <li><p className="text-lg font-semibold text-yellow-500 ml-2">As a general Criteria</p></li>
                            </ul>
                            <li className="flex justify-between items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md font-semibold">
                            Companies with plans to raise capital from USD 10M up to USD 200M.
                            </p>
                            </li>
                            <li className="flex justify-between items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md font-semibold">
                            Companies in financial services will be considered on their own merit.
                            </p>
                            </li>
                            <ul className="text-left">
                                <li><p className="text-lg font-semibold text-yellow-500 ml-2">Public Listed Companies</p></li>
                            </ul>
                            <li className="flex justify-between items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md font-semibold">
                                Market Capitalization from USD 10M to USD 500M.
                            </p>
                            </li>
                            <li className="flex justify-between items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md font-semibold">
                                Plans to raise capital within the next 6 months
                            </p>
                            </li>
                            <ul className="text-left">
                                <li><p className="text-lg font-semibold text-yellow-500 ml-2">Private Companies</p></li>
                            </ul>
                            <li className="flex justify-between items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md font-semibold">
                            Company Valuation should be minimum USD20M, no maximum
                            </p>
                            </li>
                            <li className="flex justify-between items-start gap-x-1 text-secondary">
                            •
                            <p className="text-left text-secondary text-md font-semibold">
                            Short plans to be listed in a more liquid stock exchange (within the next 6 to 12 months).
                            </p>
                            </li>

                        </li>
                        </ul>
                </div> 
               
               

            </div>

         
        </div>
        
        {/* Investment Process */}

        <Footer/>
        </div>
    )
}

export default Services
