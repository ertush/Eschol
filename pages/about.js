import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer"
import Head from 'next/head'
import Card from "../components/Card"


function About() {
    return (
      <>

      <Head>
        <title>Eshcol Ventures Ltd | About </title>
        <meta name="viewport" content="initial-scale=0.8, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    
      <div className="h-screen bg-secondary flex flex-col justify-evenly md:justify-start items-center">
        <NavHeader />

        {/* Card */}

        <Card
         bgCardStyle={'md:bg-secondary-accent md:to-blue-700  -skew-y-3 -rotate-3'}
         cardStyle={'md:bg-gray-100 md:shadow-lg'}
         content={
          (
            <>
                <h3 className=" text-primary pb-5 mt-16 md:mt-4 font-bold text-5xl h-auto w-full flex justify-center">
                   About
                </h3>
                <div className="px-5 pb-5 md:pb-0 flex-grow">
                  <p className="md:text-xl w-ful h-full text-primary text-justify text-md font-medium md:leading-10 leading-8 md:w-[600px]">
                    {" "}
                    We are a consulting company registered in Kenya and we
                    specialize in arranging for Corporate Financing. We help our
                    clients source for funding from a large pool of vetted
                    overseas based investors and funders.
                  </p>
                </div> 
            </>
          )          
        }/>

        <Footer />
      </div>
      </>
    );
}

export default About
