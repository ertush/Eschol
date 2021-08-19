import NavHeader from "../components/NavHeader"
import { useState } from "react"
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
import Head from "next/head"



function Products() {

    const [cardHidden, setCardHidden] = useState(true)

    const productViewData = [
        {
            id:1,
            name:'growth-capital-image',
            hexaPosition: `${cardHidden ? '-right-10' : '-right-14 top-[-318px]'}`,
            text: 'growth-capital',
            imageStyle:`${cardHidden ? 'rounded-l-full' : 'rounded-t-lg'}`,
            cardHeight: 'h-[740px]',
            gradientStyle:`${cardHidden ? 'bg-gradient-to-l from-secondary to-transparent right-0' : ''}`,
            info: `Growth Capital (also known as growth equity or expansion capital) is a type of investment opportunity in relatively mature companies that are going through some transformational event in their lifecycle with potential for some dramatic growth.
            Growth capital is utilized by businesses to subsidize the expansion of their operations, entrance into new markets, and acquisitions to boost the company’s revenues and profitability. Growth equity investors benefit from the high growth potential and moderate risk of the investments.
            Growth equity deals generally imply minority investments. Such deals are commonly executed using preferred shares. Note that growth equity investors tend to prefer companies with low leverage or no debt at all.
            `,
        },
        {
            id:2,
            name:'refinancing-image',
            hexaPosition: `${cardHidden ? '-left-10' : 'top-[-318px]'}`, 
            text: 'company-refinancing',
            imageStyle:`${cardHidden ? 'rounded-r-full' : 'rounded-t-lg'}`,
            cardHeight: 'h-[740px]',
            gradientStyle:`${cardHidden ? 'bg-gradient-to-r from-secondary to-transparent left-0' : ''}`,
            info:`Company refinancing is the process through which a company reorganizes its financial obligations by replacing or restructuring existing debts. Corporate refinancing is often done to improve a company's financial position. Through refinancing, a company can receive more favorable interest rates, improve their credit quality, and secure more favorable financing options. It can also be done while a company is in distress with the help of debt restructuring.
            Generally, the result of a corporate refinancing is reduced monthly interest payments, more favorable loan terms, risk reduction, and access to more cash for operations and capital investment.
            `
        },  
        {
            id:3,
            name:'IPO-image',
            hexaPosition: '-right-10',
            text: 'IPO',
            imageStyle:'rounded-l-full',
            gradientStyle:'bg-gradient-to-l from-secondary to-transparent right-0'
        },
        {
            id:4,
            name:'ESG-image',
            hexaPosition: '-left-10',
            text: 'ESG',
            imageStyle:'rounded-r-full',
            gradientStyle:'bg-gradient-to-r from-secondary to-transparent left-0'
        },
        {
            id:5,
            name:'project-financing-image',
            hexaPosition: '-right-10',
            text: 'project-financing',
            imageStyle:'rounded-l-full',
            gradientStyle:'bg-gradient-to-l from-secondary to-transparent right-0'
        },
        {
            id:6,
            name:'impact-financing-image',
            hexaPosition: '-left-10',
            text: 'impact-financing',
            imageStyle:'rounded-r-full',
            gradientStyle:'bg-gradient-to-r from-secondary to-transparent left-0'
        }
        
    ]

    const productViewDataAlt = [productViewData[0], productViewData[2], productViewData[4], productViewData[1], productViewData[3], productViewData[5]];





    return (
        <>
        <Head>
            <title>Eshcol Ventures Ltd | Products </title>
            <meta name="viewport" content="initial-scale=0.8, width=device-width" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="h-auto w-full bg-secondary">
        {/* Header */}
        <NavHeader />

        
        {/* Heading */}

        <Heading content={
        (
          <>
              <div className="text-center md:w-1/2 md:my-40">
              <h2 className="mb-2 text-3xl md:text-5xl md:my-10 font-bold capitalize text-primary md:text-gray-200">
                <span className="text-secondary md:text-amber">Our</span> Products
              </h2>
              <span className="text-md font-semibold md:text-lg text-gray-200">
                range from Corporate Funding, Retail Loans, Promoter Funding, 
                International Funding, Project Funding, Loan Restructuring 
                Subsidies, to Private Equity & Venture Capital.
              </span>
            </div>

          </>
        )
      }
        h={'h-[300px] md:h-[600px] opacity-40'}
        bgImage={bgImage}
        imageGradient={''}
        contentSpacing={"gap-y-8 md:gap-y-8"}
        hImage={' h-auto md:h-[600px]'}
      />    


        {/* Products Section */}


        <div className={`flex flex-col justify-between items-center w-[80%] py-9 mx-auto space-y-10 h-auto md:hidden`}>
        {

            productViewData.map(({handleClick, id, hexaPosition, imageStyle, text, name, gradientStyle, info, cardHeight}) => {
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

                {/* {hexaPosition, imageCircle, text */}

               return ( <ProductView 
                    id={id}
                    onPressCb={(state) => setCardHidden(state)}
                    cardHeight={cardHeight}
                    key={id}
                    handleClick={handleClick}
                    hexaPosition={hexaPosition}
                    imageCircle={(
                        <>
                            <Image src={image} alt={name} className={imageStyle}/>
                            <div className={gradientStyle.concat(" w-[60%] h-full absolute -top-1")}></div>
                        </>
                    )}
                    text={text}
                    info={info}
                />
               )
            })
        }
        </div>

        <div className="hidden md:gap-y-20 md:py-20 md:grid md:grid-cols-3 md:place-content-center md:mb-5">
        {

            productViewDataAlt.map(({id, hexaPosition,  imageStyle, text, name, gradientStyle, info, cardHeight}) => {
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
                    imageCircle={(
                        <>
                            <Image src={image} alt={name} className={imageStyle}/>
                            <div className={gradientStyle.concat( `${cardHidden ? 'w-[60%]' : 'w-[300px]'} h-full absolute -top-1 `)}></div>
                        </>
                    )}
                    text={text}
                />
               )
            })
        }
        </div>
        

        {/* Footer */}
        <Footer/>
        </div>
        </>
    )
}

export default Products
