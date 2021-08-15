import {Hexagon} from '../components/Hexagon'


function ProductView({hexaPosition, imageCircle, text}) {
    return (
      <div>
    
        <div className="justify-center relative w-[70%] ml-[15%] flex hover:scale-105 transform transition duration-200 ease-out">
         
            {/* banner image */}
            <div className="relative ">
            {imageCircle}
            </div>

            {/* {hexaStyles, imageSrc, text, textStyles} */}
          
            {/* hexagon */}
            <Hexagon
              hexaStyles={hexaPosition}
              text={text}
              textStyles={'capitalize text-6xl font-semibold text-secondary y-42'}
            />
          </div>
      </div>
    );
}

export default ProductView
