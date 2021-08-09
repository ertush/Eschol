import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer"
// import Image from 'next/image'
import growthCapitalImg from '../assets/images/growth-capital.jpeg'
import Hexagon from '../components/Hexagon'



function Products() {
    return (
        <div className="h-screen">
        {/* Header */}
        <NavHeader />

        {/* Products Section */}

        <div className="h-auto w-full grid grid-cols-2 px-4 space-y-4 bg-secondary">
            <Hexagon h={'h-full'} w={'w-full text-primary p-3 transform'} 
            imageSrc={'https://agrarian-iot.github.io/assets/img/portfolio/fullsize/4.jpg'}
            isImage={true}


        />

        </div>

        {/* Footer */}
        <Footer/>
        </div>
    )
}

export default Products
