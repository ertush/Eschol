import Image from 'next/image'

function Heading({content, bgImage, contentSpacing, h, hImage, imageGradient}) {
    return (
        <div className={hImage.concat(" relative")}>
        <Image
          layout="fill"
          objectFit="cover"
          src={bgImage}
          alt="banner-image"
          className="md:rounded-b-[40px]"
        />

          <div className={h.concat(" z-10 w-full bg-primary md:rounded-b-[40px] shadow-3xl")}></div>
          <div className={imageGradient?.concat(" absolute inset-0 z-20 w-full h-full opacity-1 p-5")}>
          <div className={contentSpacing.concat(" flex flex-col items-center justify-between md:justify-center mt-10")}>
            {content}
          </div>
        </div>
      </div>
    )
}

export default Heading
