import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer"
import Card from "../components/Card"
import {DeviceMobileIcon, GlobeAltIcon, MailIcon } from "@heroicons/react/solid"


function Contacts() {
    return (
        <div className="h-auto bg-gray-200 md:bg-secondary flex flex-col justify-evenly md:justify-start items-center">
        <NavHeader />

            <Card 
                bgCardStyle={'md:hidden'}
                cardStyle={'md:bg-secondary'}
                content={(
                    <div className="md:m-8">

                  
                    <h3 className=" text-primary pb-5 mt-5 font-bold text-5xl h-auto w-full flex justify-center">
                         Contact Us
                        </h3>

                        <div className="w-full m-4 h-full bg-white md:bg-transparent  md:shadow-lg border md:border-gray-200 md:rounded-lg mx-auto pb-6 md:pb-0 md:flex">
                        <div className="w-full h-auto mx-auto bg-secondary-accent  md:w-[40%] md:rounded-tl-lg md:rounded-bl-lg ">
                            <ul className="grid grid-cols-1 w-[90%] md:items-start mx-auto gap-y-4 py-9">
                            <li>
                                <span className="text-md font-thin text-secondary flex justify-start gap-x-2 items-start">
                                    <MailIcon className="md:inline sm:hidden w-5 h-5 mt-1 md:mt-0 md:text-secondary" />
                                    <p>enquiries@scholventures.co.ke</p>
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
                                    <GlobeAltIcon className="md:inline sm:hidden w-5 h-5 mt-1 md:mt-0 md:text-secondary"/>
                                    <p>www.escholventures.co.ke</p>
                                </span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="md:flex md:flex-grow mx-auto md:bg-gray-100 md:rounded-tr-lg md:rounded-br-lg">
                        <form className="pt-9 grid grid-cols-1 gap-y-4 mb-10 mx-auto place-content-center w-[90%] md:grid-cols-2 md:px-5 md:pb-2 md:flex-grow md:gap-x-4 md:w-[600px]" action="">
                            <div className="flex flex-col gap-y-1">
                                <label className="text-md font-normal text-primary" htmlFor="first-name">First name</label>
                                <input className="h-11 rounded-lg bg-secondary p-2 text-primary outline-none focus:ring-4 ring-secondary-accent ring-opacity-40" name="first-name" type="text" />
                            </div>
                            	
                            <div className="flex flex-col gap-y-1">
                                <label className="text-md font-normal text-primary" htmlFor="last-name">Last name</label>
                                <input className="h-11 rounded-lg bg-secondary p-2 text-primary outline-none focus:ring-4 ring-secondary-accent ring-opacity-40" name="last-name" type="text" />
                            </div>

                            <div className="flex flex-col gap-y-1">
                                <label className="text-md font-normal text-primary" htmlFor="email">Email</label>
                                <input className="h-11 rounded-lg bg-secondary p-2 text-primary outline-none focus:ring-4 ring-secondary-accent ring-opacity-40" name="email" type="text" />
                            </div>

                            <div className="flex flex-col gap-y-1">
                                <label className="text-md font-normal text-primary flex justify-between" htmlFor="phone"><span>Phone</span><span className="text-gray-400">Optional</span></label>
                                <input className="h-11 rounded-lg bg-secondary p-2 text-primary outline-none focus:ring-4 ring-secondary-accent ring-opacity-40" name="phone" type="text" />
                            </div>

                            <div className="flex flex-col gap-y-1 md:col-span-2">
                            <label className="text-md flex justify-between font-normal text-primary" htmlFor="subject"><span>Subject</span><span className="text-gray-400">Max. 500 characters</span></label>
                               <textarea className="rounded-lg bg-secondary p-2 text-primary outline-none focus:ring-4 ring-secondary-accent ring-opacity-40" name="subject" id="" cols="30" rows="5"></textarea>
                            </div>

                            <button className=" w-full md:w-[100px] h-auto p-4 flex justify-center bg-secondary-accent text-secondary hover:bg-secondary hover:text-secondary-accent md:justify-self-end md:col-start-2 rounded-lg">submit</button>
                           
                        </form>
                        </div>

                       
                        </div>
                       
                    </div>
                )}

            />

        <Footer/>
        </div>
    )
}

export default Contacts
