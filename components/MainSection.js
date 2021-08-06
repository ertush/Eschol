import IconView from "./IconView";
import mission from "../assets/images/mission.png";
import vision from "../assets/images/vision.png";

function MainSection() {
  return (
    <div className="h-auto gap-y-4 pt-3 md:h-1/2 flex flex-col justify-around items-center bg-secondary md:flex md:flex-row md:justify-around md:items-center md:pt-10 ">
      <IconView
        img={mission}
        alt={"mission-ilustration"}
        title={"mission"}
        description={`
           To achieve our clients’ objectives while 
                maintaining high business ethics
                • Developing long lasting relationships with our 
                clients
                • Sharing knowledge and available opportunities 
                relevant to our clients.
            `}
      />
      <IconView
        img={vision}
        alt={"vision-ilustration"}
        title={"vision"}
        description={`
        To be a leading player in the growth of Africa economies through impact financing
            `}
      />
    </div>
  );
}

export default MainSection;
