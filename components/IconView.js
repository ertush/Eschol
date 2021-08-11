import {HexagonAlt} from "./Hexagon";

function IconView({ img, title, description, cardStyles }) {
  return (
    <div className={cardStyles.concat("flex w-[90%] h-auto flex-col items-center md:mx-7 bg-secondary p-7 shadow-2xl rounded-xl md:shadow-none md:bg-transparent md:w-[24%] md:m-0 md:p-5 md:scale-105 md:h-[530px] md:transform md:transition md:duration-200 md:ease-out")}>
   
        <h5 className="text-lg font-semibold text-primary capitalize text-center">
          {title}
        </h5>
      <div className="relative w-auto h-auto mb-4">
               <HexagonAlt w={'w-60'} h={'h-60  text-[#384572]'} isText={false} isImage={false} objectFit="fill"/> 
               {img} 
       </div>

      <div className="flex flex-col justify-center items-center gap-x-2">
        <span className="w-[305px] h-auto text-md font-semibold text-primary md:w-full">
          {description}
        </span>
      </div>
    </div>
  );
}

export default IconView;
