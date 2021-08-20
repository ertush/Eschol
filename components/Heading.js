import Image from 'next/image'

function Heading({content, bgImage, contentSpacing, h, hImage, imageGradient, isSideHeading}) {
    return (
        <div className={hImage.concat(" relative ")}>
        <Image
          layout="fill"
          objectFit="cover"
          src={bgImage}
          alt="banner-image"
        />

          <div className={h.concat(" z-10 w-full bg-primary shadow-3xl")}></div>
         {isSideHeading && <div className="hidden md:flex z-20 w-[80%] absolute top-0 h-full bg-gradient-to-r from-white via-white to-transparent"></div>}
          <div className={imageGradient?.concat(" absolute inset-0 z-20 md:z-30 w-full h-full opacity-1 p-5")}>
          <div className={contentSpacing.concat(" flex flex-col items-center justify-between md:absolute md:top-0 mt-10")}>
            {content}
          </div>
        </div>
      </div>
    )
}

export default Heading
