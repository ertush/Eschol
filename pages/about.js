import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer"


function About() {
    return (
      <div className="h-screen bg-secondary flex flex-col justify-evenly md:justify-start items-center">
        <NavHeader />

        <h3 className="md:hidden text-primary pb-5 mt-10 text-3xl font-bold h-auto w-full flex justify-center">
          About
        </h3>
        <div className="md:hidden px-5 pb-5 md:pb-0 flex-grow">
                <p className="md:text-xl w-ful h-full text-primary text-justify text-md font-medium md:leading-10 leading-8"> We are a consulting company registered in Kenya and we 
              specialize in arranging for Corporate Financing. We help our 
              clients source for funding from a large pool of vetted overseas 
              based investors and funders.</p>
            
            </div>

        <div class="hidden md:flex md:h-full md:p-20 md:flex-col md:justify-center">
          <div class="relative py-3">
            <div class="absolute inset-0 bg-gradient-to-r from-primary to-secondary-accent shadow-lg transform -skew-y-6 sm:skew-y-0 -rotate-6 rounded-3xl"></div>
            <div class="relative px-4 py-10 bg-gray-100 shadow-lg rounded-3xl p-20">
              <div class="max-w-md mx-auto">
                <h3 className=" text-primary pb-5 mt-5 font-bold text-5xl h-auto w-full flex justify-center">
                About
                </h3>
                <div className="px-5 pb-5 md:pb-0 flex-grow">
                  <p className="md:text-xl w-ful h-full text-primary text-justify text-md font-medium md:leading-10 leading-8">
                    {" "}
                    We are a consulting company registered in Kenya and we
                    specialize in arranging for Corporate Financing. We help our
                    clients source for funding from a large pool of vetted
                    overseas based investors and funders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
}

export default About
