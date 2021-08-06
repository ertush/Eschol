import Image from "next/image";

function IconView({ img, alt, title, description }) {
  return (
    <div className="flex space-x-3">
      <span className="relative h-40 w-40">
        <Image src={img} alt={alt} layout="fill" objectFit="cover" />
      </span>

      <div className="flex flex-col justify-center items-center gap-x-2">
        <h5 className="text-lg font-semibold text-primary capitalize text-center">
          {title}
        </h5>
        <p className="w-80 h-auto text-center text-md font-normal text-primary">
          {description}
        </p>
      </div>
    </div>
  );
}

export default IconView;
