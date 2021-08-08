import Image from "next/image";
import Hexagon from "./Hexagon";

function IconView({ img, alt, title, description, cardStyles }) {
  return (
    <div className={cardStyles.concat("flex w-[90%] h-auto flex-col items-center md:space-x-3 bg-secondary p-7 shadow-2xl rounded-xl md:w-auto md:m-0 md:p-5 md:scale-105 md:h-[530px] md:transform md:transition md:duration-200 md:ease-out")}>
   
        <h5 className="text-lg font-semibold text-primary capitalize text-center">
          {title}
        </h5>
      <div className="relative w-auto h-auto mb-4">
               <Hexagon w={'w-60'} h={'h-60'} objectFit="fill"/> 
               <Image className="w-60 h-60 absolute bottom-0" src={img} alt={alt} layout="fill" objectFit="cover" />
       </div>

      <div className="flex flex-col justify-center items-center gap-x-2">
        <span className="w-[305px] h-auto block text-md font-normal text-primary md:w-80">
          {description}
        </span>
      </div>
    </div>
  );
}

export default IconView;
