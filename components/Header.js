import bgImage from "../assets/images/bg-city.jpg"
import NavHeader from "./NavHeader";
import {useRouter} from "next/router"
import Heading from "./Heading";


function Header() {
 
  const router = useRouter()
  return (
    <div className="w-full h-auto ">
      {/* nav-menu */}
     <NavHeader />

      {/* Image banner  */}

      <Heading content={
        (
          <>
              <div className="text-center md:w-1/2">
              <h2 className="mb-2 text-3xl md:text-5xl font-bold capitalize text-primary">
                <span className="text-gray-200">Who</span> We Are ?
              </h2>
              <span className="text-md font-semibold md:text-lg text-gray-200">
              We are a consulting company registered in Kenya and we 
              specialize in arranging for Corporate Financing. We help our 
              clients source for funding from a large pool of vetted overseas 
              based investors and funders
              </span>
            </div>

          
            <div className="w-full h-auto flex justify-around mt-5 md:w-1/2 md:flex md:items-center md:justify-around">
              <button onClick={() => router.push('/products')} className="p-3 border-2 border-gray-200 rounded-lg text-gray-200 w-30 hover:bg-gray-200 hover:text-primary">
                Our Products
              </button>

              <button  onClick={() => router.push('/about')} className="p-3 bg-secondary rounded-lg w-30 hover:bg-primary hover:text-secondary">
                Learn More
              </button>
            </div>
          </>
        )
      }
        bgImage={bgImage}
        h={'h-[400px]'}
        contentSpacing={'gap-y-4 md:gap-y-8'}
        hImage={'h-auto md:h-[400px]'}
      />
    </div>
  );
}

export default Header;
