import {Hexagon} from '../components/Hexagon'


function ProductView({hexaPosition, isText, imageCircle, isImage, text}) {
    return (
      <div>
    
        <div className="justify-center relative w-[70%] ml-[15%] flex hover:scale-105 transform transition duration-200 ease-out">
         
            {/* banner image */}
            <div className="relative ">
            {imageCircle}
            </div>
          
            {/* hexagon */}
            <Hexagon
              hexaPosition={hexaPosition}
              isImage={!isImage}
              isText={!isText}
              text={text}
            />
          </div>
      </div>
    );
}

export default ProductView
