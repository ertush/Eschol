import Image from "next/image"
import bgImage from "../assets/images/bg-city.jpg"
import NavHeader from "./NavHeader";


function Header() {
 

  return (
    <div className="w-full h-auto ">
      {/* nav-menu */}
     <NavHeader />

      {/* Image banner  */}

      <div className="relative h-[400px]">
        <Image
          layout="fill"
          objectFit="cover"
          src={bgImage}
          alt="banner-image"
        />
        <div className="z-10 w-full h-[400px] bg-primary opacity-20"></div>
        <div className="absolute inset-0 z-20 w-full h-full opacity-1 p-5 bg-gradient-to-t from-secondary via-transparent to-transparent">
          <div className="flex flex-col gap-y-4 md:gap-y-8 items-center justify-between mt-10">
            <div className="text-center md:w-1/2">
              <h2 className="mb-2 text-3xl md:text-5xl font-bold capitalize text-primary">
                <span className="text-gray-200">Who</span> We Are ?
              </h2>
              <span className="text-md font-normal md:text-lg text-gray-200">
              We are a consulting company registered in Kenya and we 
              specialize in arranging for Corporate Financing. We help our 
              clients source for funding from a large pool of vetted overseas 
              based investors and funders
              </span>
            </div>

          
            <div className="w-full h-auto flex justify-around mt-5 md:w-1/2 md:flex md:items-center md:justify-around">
              <button onClick={() => {console.log('Go to products page')}} className="p-3 border-2 border-gray-200 rounded-lg text-gray-200 w-30 hover:bg-gray-200 hover:text-primary">
                Our Products
              </button>

              <button  onClick={() => {console.log('Go to about page')}} className="p-3 bg-secondary rounded-lg w-30 hover:bg-primary hover:text-secondary">
                Learn More
              </button>
            </div>

        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
