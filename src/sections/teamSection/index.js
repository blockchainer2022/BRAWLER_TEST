import React from "react";
import Team1 from "../../assets/image/team1.png";
import Team2 from "../../assets/image/team2.png";
import Team3 from "../../assets/image/team3.png";
import Team4 from "../../assets/image/sirish.jpeg";
const Index = () => {
  return (
    <section id="team">
      <div className="bg-black py-10">
        <div className="container">
          <p className="text-2xl text-center sm:text-4xl md:text-6xl ">
            THE THIMBLEGANG |<span className="text-green"> {" TEAM "} </span>
          </p>
        </div>
      </div>
      <div className="py-24">
        <div className="container">
          <div className="flex justify-between text-xl flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/4 sm:pl-4 md:p-4">
              <CardContent
                img={Team1}
                content={["Shilliam S", "FOUNDER/DESIGNER", "@thimblegang"]}
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 sm:pl-4 md:p-4">
              <CardContent
                img={Team2}
                content={["DIKASSO", "ADVISOR", "@Dikasso_"]}
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 sm:pl-4  md:p-4">
              <CardContent
                img={Team3}
                content={["LEE J", "MARKETING", "@AsithosM"]}
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 sm:pl-4 md:p-4">
              <CardContent
                img={Team4}
                content={["Shirish", "LEAD DEVELOPER", "@shirishv"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

const CardContent = ({ img, content }) => (
  <>
    <div className="p-4 bg-yellow rounded ">
      <img src={img} alt="" className="w-full" />
    </div>
    <div className="bg-yellow mt-4 mb-10 p-2 rounded text-center">
      <p>{content[0]}</p>
      <p>{content[1]}</p>
      <p>{content[2]}</p>
    </div>
  </>
);
