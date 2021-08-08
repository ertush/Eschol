import IconView from "./IconView";
import mission from "../assets/images/mission.png";
import vision from "../assets/images/vision.png";
import Hexagon from "./Hexagon";

function MainSection() {
  return (
    <>
      <div className="h-auto gap-y-5 pt-3 pb-6  flex flex-col justify-around items-center bg-secondary md:flex md:flex-row md:justify-around md:items-center md:h-[700px]">
        <IconView
          img={mission}
          alt={"mission-ilustration"}
          title={"mission"}
          cardStyles={""}
          description={
            <ul className="list-none text-left space-y-2">
              <span className=" flex space-x-2 justify-start items-start">
                <Hexagon h={"h-2"} w={"w-2 mt-2"} />
                <p className="w-[90%] h-auto align-text-top">
                  To achieve our clients’ objectives while maintaining high
                  business ethics.
                </p>
              </span>

              <span className="flex space-x-2 items-start">
                <Hexagon h={"h-2"} w={"w-2 mt-2"} />
                <p className="w-[90%] h-auto align-text-top">
                  Developing long lasting relationships with our clients.
                </p>
              </span>

              <span className="flex space-x-2 items-start">
                <Hexagon h={"h-2"} w={"w-2 mt-2"} />
                <p className="w-[90%] h-auto align-text-top">
                  Sharing knowledge and available opportunities relevant to our
                  clients.
                </p>
              </span>
            </ul>
          }
        />

        <IconView
          img={mission}
          alt={"values-ilustration"}
          title={"core values"}
          cardStyles={""}
          description={(
            <ul className="flex flex-col items-center gap-y-3 list-none space-y-2">
              <li><p className="text-xl font-semibold">Honesty</p></li>
              <li><p className="text-xl font-semibold">Transparency</p></li>
              <li><p className="text-xl font-semibold">Consistency</p></li>
              <li><p className="text-xl font-semibold">No cure no pay</p></li>
            </ul>
          )}
        />

        <IconView
          img={vision}
          alt={"vision-ilustration"}
          title={"vision"}
          cardStyles={""}
          description={
            <span className="flex space-x-2 items-start">
              <Hexagon h={"h-2"} w={"w-2 mt-2"} />
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
