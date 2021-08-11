import Image from 'next/image'

function Heading({content, bgImage, contentSpacing, h, hImage}) {
    return (
        <div className={hImage.concat(" relative")}>
        <Image
          layout="fill"
          objectFit="cover"
          src={bgImage}
          alt="banner-image"
        />

        <div className={h.concat(" z-10 w-full bg-primary opacity-20")}></div>
        <div className="absolute inset-0 z-20 w-full h-full opacity-1 p-5 bg-gradient-to-t from-secondary via-transparent to-transparent">
          <div className={contentSpacing.concat(" flex flex-col items-center justify-between mt-10")}>
            {content}
          </div>
        </div>
      </div>
    )
}

export default Heading
