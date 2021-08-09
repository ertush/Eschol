import IconView from "./IconView"
// import Hexagon from "./Hexagon"
import MissionSvg  from "./MissionSvg"
import CoreValuesSvg  from "./CoreValuesSvg"
import VisionSvg  from "./VisionSvg"

function MainSection() {
  return (
    <>
      <div className="h-auto gap-y-5 pt-3 pb-6  flex flex-col justify-around items-center bg-secondary md:flex md:flex-row md:justify-around md:items-center md:h-[700px]">
        <IconView
          img={(
            <MissionSvg svgStyles={'h-60 w-60 text-secondary absolute right-1 top-20'} />
          )}
          alt={"mission-ilustration"}
          title={"mission"}
          cardStyles={""}
          description={
            <ul className="list-none text-left space-y-3">
              <span className=" flex space-x-2 justify-center md:justify-start items-start">
                {/* <Hexagon h={"h-2"} w={"w-2 mt-2"} /> */}
                <p className="w-[90%] h-auto align-text-top">
                  To achieve our clients’ objectives while maintaining high
                  business ethics.
                </p>
              </span>

              <span className="flex space-x-2 justify-center md:justify-start items-start">
                {/* <Hexagon h={"h-2"} w={"w-2 mt-2"} /> */}
                <p className="w-[90%] h-auto align-text-top">
                  Developing long lasting relationships with our clients.
                </p>
              </span>

              <span className="flex space-x-2 justify-center md:justify-start items-start">
                {/* <Hexagon h={"h-2"} w={"w-2 mt-2"} /> */}
                <p className="w-[90%] h-auto align-text-top">
                  Sharing knowledge and available opportunities relevant to our
                  clients.
                </p>
              </span>
            </ul>
          }
        />

        <IconView
         img={(
            <CoreValuesSvg svgStyles={'h-60 w-60 text-secondary absolute top-12'} />
          )}
          alt={"values-ilustration"}
          title={"core values"}
          cardStyles={""}
          description={(
            // flex flex-col items-center  md:items-center gap-y-2 md:gap-y-3 list-none
            <ul className="list-none flex flex-col items-center md:gap-y-3 space-y-3">
              <li><p className="text-md font-semibold">Honesty</p></li>
              <li><p className="text-md font-semibold">Transparency</p></li>
              <li><p className="text-md font-semibold">Consistency</p></li>
              <li><p className="text-md font-semibold">No cure no pay</p></li>
            </ul>
          )}
        />

        <IconView
           img={(
            <VisionSvg svgStyles={'h-60 w-60 text-secondary absolute top-8'} />
          )}
          alt={"vision-ilustration"}
          title={"vision"}
          cardStyles={""}
          description={
            <span className="flex space-x-2 justify-center md:justify-start items-start">
              {/* <Hexagon h={"h-2"} w={"w-2 mt-2"} /> */}
              <p className="w-[90%] h-auto align-text-top">
                To be a leading player in the growth of Africa economies through
                impact financing
              </p>
            </span>
          }
        />
      </div>
    </>
  );
}

export default MainSection;
