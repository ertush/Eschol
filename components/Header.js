import bgImage from "../assets/images/bg-city.jpg"
import NavHeader from "./NavHeader";
import {useRouter} from "next/router"
import WalletIllustration from "./WalletIllustration";
import Heading from "./Heading";


function Header() {
 
  const router = useRouter()
  return (
    <div className="w-full h-auto ">
      {/* nav-menu */}
     <NavHeader />

      {/* Image banner  */}

      <Heading 
      isSideHeading={true}
      content={
        (
          <div className="md:px-[15%] md:max-h-[500px] md:space-y-2">

              <WalletIllustration svgStyle={'hidden md:flex md:w-[300px] md:h-[300px]'} />
              <div className="text-center md:text-left md:w-1/2 md:pb-10">
              <h2 className="mb-5 text-3xl md:text-5xl font-bold capitalize text-primary">
                <span className="md:text-amber text-gray-200">We</span> are 
              </h2>
              <span className="text-md font-semibold md:text-xl text-gray-200 md:text-primary">
               a consulting company registered in Kenya and we specialise in arranging for Corporate Financing.
              </span>
            </div>

              <div className="w-full h-auto flex justify-around mt-5 md:w-1/2 md:flex md:-mt-28 md:items-start md:justify-start md:gap-x-20">
              <button onClick={() => router.push('/products')}  className="p-3 md:py-2 border-2 border-secondary md:hover:border-amber md:hover:text-primary md:hover:bg-amber md:border-primary bg-secondary text-primary rounded-lg w-30 md:text-white md:bg-primary hover:bg-primary hover:text-secondary" >
                Our Products
              </button>

              <button  onClick={() => router.push('/about')} className="p-3 md:py-2 border-2 order-gray-200 rounded-lg md:text-primary md:border-primary md:hover:border-amber text-gray-200 w-30 hover:bg-gray-200 hover:text-amber" >
                Learn More
              </button>
            </div>
          </div>
        )
      }

        bgImage={bgImage}
        imageGradient={'bg-gradient-to-t from-secondary via-transparent to-transparent'}
        h={'h-[340px] md:h-[650px] opacity-10'}
        contentSpacing={'gap-y-4 md:gap-y-1'}
        hImage={'h-auto md:h-full'}
      />
    </div>
  );
}

export default Header;
