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
              <div className="text-center md:w-1/2 md:my-40">
              <h2 className="mb-5 text-3xl md:text-5xl font-bold capitalize text-primary">
                <span className="text-gray-200">We</span> are 
              </h2>
              <span className="text-md font-semibold md:text-xl text-gray-200">
               a consulting company registered in Kenya and we specializes in arranging for Corporate Financing.
              </span>
            </div>

              <div className="w-full h-auto flex justify-around mt-5 md:w-1/2 md:flex md:-mt-28 md:items-start md:justify-around">
              <button onClick={() => router.push('/products')} className="p-3 border-2 order-gray-200 rounded-lg text-gray-200 w-30 hover:bg-gray-200 hover:text-primary">
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
        imageGradient={'bg-gradient-to-t from-secondary via-transparent to-transparent'}
        h={'h-[340px] md:h-[600px] opacity-40'}
        contentSpacing={'gap-y-4 md:gap-y-1'}
        hImage={'h-auto md:h-[600px]'}
      />
    </div>
  );
}

export default Header;
