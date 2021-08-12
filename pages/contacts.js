import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer"
import Card from "../components/Card"


function Contacts() {
    return (
        <div className="h-auto bg-gray-100 md:bg-secondary flex flex-col justify-evenly md:justify-start items-center">
        <NavHeader />

            <Card 
                content={(
                    <>
                        <h3 className=" text-primary pb-5 mt-5 font-bold text-5xl h-auto w-full flex justify-center">
                         Contact Us
                        </h3>

                        <form className="grid grid-cols-1 gap-y-4 mb-10 mx-auto place-content-center w-[80%] md:grid-cols-2 md:px-5 md:pb-2 md:flex-grow md:gap-x-4 md:w-[600px]" action="">
                            <div className="flex flex-col gap-y-1">
                                <label className="text-md font-normal text-primary" htmlFor="first-name">First name</label>
                                <input className="h-11 rounded-lg bg-secondary p-2 text-primary focus:ring-2 ring-secondary-accent" name="first-name" type="text" />
                            </div>
                            
                            <div className="flex flex-col gap-y-1">
                                <label className="text-md font-normal text-primary" htmlFor="last-name">Last name</label>
                                <input className="h-11 rounded-lg bg-secondary p-2 text-primary focus:ring-2 ring-secondary-accent" name="last-name" type="text" />
                            </div>

                            <div className="flex flex-col gap-y-1">
                                <label className="text-md font-normal text-primary" htmlFor="email">Email</label>
                                <input className="h-11 rounded-lg bg-secondary p-2 text-primary focus:ring-2 ring-secondary-accent" name="email" type="text" />
                            </div>

                            <div className="flex flex-col gap-y-1">
                                <label className="text-md font-normal text-primary flex justify-between" htmlFor="phone"><span>Phone</span><span className="text-gray-400">Optional</span></label>
                                <input className="h-11 rounded-lg bg-secondary p-2 text-primary focus:ring-2 ring-secondary-accent" name="phone" type="text" />
                            </div>

                            <div className="flex flex-col gap-y-1 md:col-span-2">
                            <label className="text-md flex justify-between font-normal text-primary" htmlFor="subject"><span>Subject</span><span className="text-gray-400">Max. 500 characters</span></label>
                               <textarea className="rounded-lg bg-secondary p-2 text-primary focus:ring-2 ring-secondary-accent" name="subject" id="" cols="30" rows="9"></textarea>
                            </div>

                            <button className="w-full md:w-[100px] h-auto p-4 flex justify-center bg-secondary-accent text-secondary hover:bg-primary md:justify-self-end md:col-start-2 rounded-lg">submit</button>
                           
                        </form>
                    </>
                )}

            />

        <Footer/>
        </div>
    )
}

export default Contacts
