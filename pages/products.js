import NavHeader from "../components/NavHeader"
import Footer from "../components/Footer"
import Heading from "../components/Heading"
import Image from 'next/image'
import growthCapitalImg from '../assets/images/growth-capital.jpeg'
import IPOImage from '../assets/images/IPO-rsz.jpg'
import ESGImage from '../assets/images/ESG-rsz.jpg'
import refinancingImage from '../assets/images/refinancing-rsz.jpg'
import impactFinancingImage from '../assets/images/impact-financing-rsz.jpg'
import projectFinancingImage from '../assets/images/project-financing-rsz.jpg'
import ProductView from '../components/ProductView'
import bgImage from '../assets/images/kicc.jpg'



function Products() {

    

    const productViewData = [
        {
            id:1,
            name:'growth-capital-image',
            hexaPosition: '-right-10',
            isText: false,
            isImage: true,
            text: 'growth capital',
            imageStyle:'rounded-l-full',
            gradientStyle:'bg-gradient-to-l from-secondary to-transparent right-0'
        },
        {
            id:2,
            name:'refinancing-image',
            hexaPosition: '-left-10',
            isText: false,
            isImage: true,
            text: 'company refinancing',
            imageStyle:'rounded-r-full',
            gradientStyle:'bg-gradient-to-r from-secondary to-transparent left-0'
        },  
        {
            id:3,
            name:'IPO-image',
            hexaPosition: '-right-10',
            isText: false,
            isImage: true,
            text: 'IPO',
            imageStyle:'rounded-l-full',
            gradientStyle:'bg-gradient-to-l from-secondary to-transparent right-0'
        },
        {
            id:4,
            name:'ESG-image',
            hexaPosition: '-left-10',
            isText: false,
            isImage: true,
            text: 'ESG',
            imageStyle:'rounded-r-full',
            gradientStyle:'bg-gradient-to-r from-secondary to-transparent left-0'
        },
        {
            id:5,
            name:'project-financing-image',
            hexaPosition: '-right-10',
            isText: false,
            isImage: true,
            text: 'Project Financing',
            imageStyle:'rounded-l-full',
            gradientStyle:'bg-gradient-to-l from-secondary to-transparent right-0'
        },
        {
            id:6,
            name:'impact-financing-image',
            hexaPosition: '-left-10',
            isText: false,
            isImage: true,
            text: 'Impact Financing',
            imageStyle:'rounded-r-full',
            gradientStyle:'bg-gradient-to-r from-secondary to-transparent left-0'
        }
        
    ]

    const productViewDataAlt = [productViewData[0], productViewData[2], productViewData[4], productViewData[1], productViewData[3], productViewData[5]];

    return (
        <div className="h-auto w-full bg-secondary">
        {/* Header */}
        <NavHeader />

        
        {/* Heading */}

        <Heading content={
        (
          <>
              <div className="text-center md:w-1/2 md:my-40">
              <h2 className="mb-2 text-3xl md:text-5xl md:my-10 font-bold capitalize text-primary md:text-gray-200">
                <span className="text-secondary md:text-primary">Our</span> Products
              </h2>
              <span className="text-md font-semibold md:text-lg text-gray-200">
                Our  products range from Corporate Funding, Retail Loans, Promoter Funding, 
                International Funding, Project Funding, Loan Restructuring 
                Subsidies, to Private Equity & Venture Capital.
              </span>
            </div>

          </>
        )
      }
        h={'h-[300px] md:h-[800px] opacity-30'}
        bgImage={bgImage}
        imageGradient={''}
        contentSpacing={"gap-y-8 md:gap-y-8"}
        hImage={' h-auto md:h-[800px]'}
      />


        {/* Products Section */}


        <div className="flex flex-col justify-center items-center w-[80%] pt-6 mx-auto h-auto space-y-10 md:hidden">
        {


            productViewData.map(({id, hexaPosition, isText, imageStyle, isImage, text, name, gradientStyle}) => {
                const image = (() => {
                    switch(id){
                        case 1:
                        return growthCapitalImg
                        case 2:
                        return refinancingImage
                        case 3:
                        return IPOImage
                        case 4:
                        return ESGImage
                        case 5:
                        return projectFinancingImage
                        case 6:
                        return impactFinancingImage

                    }
                })()

               return ( <ProductView 
                    key={id}
                    hexaPosition={hexaPosition}
                    isText={isText}
                    imageCircle={(
                        <>
                            <Image src={image} alt={name} className={imageStyle}/>
                            <div className={gradientStyle.concat(" w-[60%] h-full absolute -top-1 ")}></div>
                        </>
                    )}
                    isImage={isImage}
                    text={text}
                />
               )
            })
        }
        </div>

        <div className="hidden md:gap-y-20 md:py-20 md:grid md:grid-cols-3 md:place-content-center md:mb-5">
        {


            productViewDataAlt.map(({id, hexaPosition, isText, imageStyle, isImage, text, name, gradientStyle}) => {
                const image = (() => {
                    switch(id){
                        case 1:
                        return growthCapitalImg
                        case 2:
                        return refinancingImage
                        case 3:
                        return IPOImage
                        case 4:
                        return ESGImage
                        case 5:
                        return projectFinancingImage
                        case 6:
                        return impactFinancingImage

                    }
                })()

               return ( <ProductView 
                    key={id}
                    hexaPosition={hexaPosition}
                    isText={isText}
                    imageCircle={(
                        <>
                            <Image src={image} alt={name} className={imageStyle}/>
                            <div className={gradientStyle.concat(" w-[60%] h-full absolute -top-1 ")}></div>
                        </>
                    )}
                    isImage={isImage}
                    text={text}
                />
               )
            })
        }
        </div>
        

        {/* Footer */}
        <Footer/>
        </div>
    )
}

export default Products
