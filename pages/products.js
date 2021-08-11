import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer"
import Image from 'next/image'
import growthCapitalImg from '../assets/images/growth-capital.jpeg'
import IPOImage from '../assets/images/IPO-rsz.jpg'
import ESGImage from '../assets/images/ESG-rsz.jpg'
import refinancingImage from '../assets/images/refinancing-rsz.jpg'
import impactFinancingImage from '../assets/images/impact-financing-rsz.jpg'
import projectFinancingImage from '../assets/images/project-financing-rsz.jpg'
import ProductView from '../components/ProductView'



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

    return (
        <div className="h-auto w-full bg-secondary">
        {/* Header */}
        <NavHeader />

        {/* Products Section */}
        <h3>Products</h3>
        <div className="flex flex-col justify-center items-center w-[80%] mx-auto h-auto space-y-10 pb-10">
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
        

  

        {/* Footer */}
        <Footer/>
        </div>
    )
}

export default Products
