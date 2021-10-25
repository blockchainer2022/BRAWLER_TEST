import React from "react";
import Card1Image from "../../assets/image/stage1_1.png";
import Card2Image from "../../assets/image/stage1_2.png";
import Card3Image from "../../assets/image/stage1_3.png";
import PholderImage from "../../assets/image/placeholder.png";
import RoadMap1 from "../../assets/image/roadmap1.png";
import RoadMap2 from "../../assets/image/roadmap2.png";

const Index = () => {
  return (
    <section id="roadmap">
      <div className="bg-black py-8">
        <div className="container">
          <div className="custom-container">
            <h4 className="text-2xl text-center sm:text-4xl md:text-6xl ">
              WHERE IS THIS GOING? | <span className="text-green">ROADMAP</span>
            </h4>
          </div>
        </div>
      </div>
      <StageOne />
      <StageTwo />
      <StageThree />
      <StageFour />
      <StageFive />
      <StageSix />
      <StageSeven />
      <StageEight />
      <StageNine />
      <StageTen />
    </section>
  );
};

export default Index;

const StageOne = () => (
  <div>
    <StageHeader text="STAGE 1 | The Brawlers Presale" />
    <div className="container py-10">
      <div className="custom-container">
        <TextWrapper>
          1.168 units including (?) women, (?) men and (?) specials are
          introduced and ready to mint. Sale price is 0.05 ETH + Gas fees with a
          limit of 10 units per transaction.
        </TextWrapper>
        <div className="md:flex flex-wrap md:justify-between pt-8">
          <Card />
          <Card img={Card2Image} text1="?" text2="MEN" />
          <Card img={Card3Image} text1="?" text2="SPECIAL" />
        </div>
      </div>
    </div>
  </div>
);
const StageTwo = () => (
  <div>
    <StageHeader text="STAGE 2 | The Brawlers sale" />
    <div className="container py-10">
      <div className="custom-container">
        <TextWrapper>
          3.000 more units will be made available for you to mint at 0.06 + gas
          fees.
        </TextWrapper>
      </div>
    </div>
  </div>
);
const StageThree = () => (
  <div>
    <StageHeader text="STAGE 3 | Breeding" />
    <div className="container pt-10">
      <div className="custom-container">
        <TextWrapper>
          The Brawlers can now breed 2x times every 24H. 1 male and 1 female are
          needed in order to breed and give birth to a Big Brawler, collection
          that will be available shortly after in the next stage.
        </TextWrapper>
      </div>
    </div>
    <div className="container pt-10 text-center text-black">
      <div className="custom-container">
        <div className="md:flex">
          {/* Your Knuckle Start */}
          <div className="md:w-5/12 md:pr-2 md:flex md:flex-col ">
            <ColWrap>
              <h4 className="text-2xl text-center  lg:text-4xl">
                YOU OWN <span className="text-primary">2</span> BRAWLERS
              </h4>
            </ColWrap>
            <div className=" bg-yellow p-4 md:flex-1 text-black rounded my-4 lg:my-2 md:flex md:flex-col md:justify-between ">
              <div className=" flex flex-wrap my-auto">
                <div className="w-1/2 p-2">
                  <img src={PholderImage} alt="" className="w-full" />
                </div>
                <div className="w-1/2 p-2">
                  <img src={PholderImage} alt="" className="w-full" />
                </div>
                <div className="w-1/2 p-2">
                  <img src={PholderImage} alt="" className="w-full" />
                </div>
                <div className="w-1/2 p-2">
                  <img src={PholderImage} alt="" className="w-full" />
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <ColWrap>
                <h4 className="text-2xl text-center  lg:text-4xl">
                  YOUR KNUCK$ <span className="text-primary">0230 </span>
                </h4>
              </ColWrap>
            </div>
          </div>
          {/* Your Knuckle End */}
          {/* Mint Panel Start */}
          <div className="md:w-7/12 md:pl-2">
            <ColWrap>
              <h4 className="text-2xl text-center lg:text-4xl">
                BREEDING PANEL
              </h4>
            </ColWrap>
            <div className="sm:flex flex-wrap pt-0">
              <div className="sm:w-9/12 sm:pr-2 sm:flex sm:flex-col sm:justify-between">
                <div className="p-3 bg-yellow   text-black rounded my-4 lg:my-2 flex-1">
                  <img src={PholderImage} alt="" className="w-full p-2" />
                </div>
              </div>
              <div className="sm:w-3/12 sm:pl-2 sm:flex sm:flex-col sm:justify-between ">
                <div className="p-3 text-2xl bg-yellow rounded my-4 lg:my-2 lg:text-4xl flex-1 flex flex-col justify-between items-center">
                  <div>
                    <p>ID</p>
                    <p className="text-white">#0000</p>
                  </div>
                  <div>
                    <p>GENDER</p>
                    <p className="text-white">MALE</p>
                  </div>
                  <div>
                    <p>EYES</p>
                    <p className="text-white">REGULAR</p>
                  </div>
                  <div>
                    <p>R. INDEX</p>
                    <p className="text-white">0000</p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <ColWrap>
                  <h4 className="text-2xl text-center  lg:text-4xl">
                    <span className="text-white">{">BREED<"}</span>
                  </h4>
                </ColWrap>
              </div>
            </div>
          </div>
          {/* Mint Panel END*/}
        </div>
      </div>
    </div>
    <div className="my-5 text-center container">
      <div className="custom-container">
        <p className="text-xl  md:text-3xl">
          YOU MUST OWN AT LEAST <TextGreen text=" 1 MALE " />
          AND
          <TextGreen text=" 1 FEMALE " /> BRAWLER
          <TextGreen text=" IN ORDER TO BREED " />
          BREEDING
          <TextGreen text="  COSTS 50 NUCKLES + GAS FEES." />
        </p>
      </div>
    </div>
    <div className="container pb-10 md:pb-10 ">
      <div className="custom-container">
        <ColWrap>
          <h5 className="text-4xl text-center lg:text-5xl text-white">
            {"> WALLET CONNECT <"}
          </h5>
        </ColWrap>
      </div>
    </div>
  </div>
);

const StageFour = () => (
  <div>
    <StageHeader text="STAGE 4 | The Big Brawlers Presale" />
    <div className="container pt-10">
      <div className="custom-container">
        <TextWrapper>
          Big Brawlers are introduced to the gang as a 2.000 unit collection of
          a more powerful and redesigned kind of Brawler. Presale consists of
          1.000 units at 0.06 ETH + Gas fees.
        </TextWrapper>
      </div>
    </div>
    <div className="container py-10 text-center">
      <div className="custom-container">
        <CardLarge />
      </div>
    </div>
  </div>
);

const StageFive = () => (
  <div>
    <StageHeader text="STAGE 5 | The Big Brawlers Sale" />
    <div className="container py-10">
      <div className="custom-container">
        <TextWrapper>
          2.000 units will be available for you to mint at 0.07 ETH + Gas fees.
        </TextWrapper>
      </div>
    </div>
  </div>
);

const StageSix = () => (
  <div>
    <StageHeader text="STAGE 6 | $Knuckles airdrop" />
    <div className="container py-10">
      <div className="custom-container">
        <TextWrapper>
          $Knuckles token is introduced and an X amount distributed among
          holders, enough to breed their brawlers.
        </TextWrapper>
      </div>
    </div>
  </div>
);
const StageSeven = () => (
  <div>
    <StageHeader text="STAGE 7 | Brawling Arena Launch" />
    <div className="container py-10">
      <div className="custom-container">
        <TextWrapper>
          Holders can submit their brawlers to fight against each other using
          play-to-earn mechanics where $Knuckles will be used as a reward
          system. Climb the brawling ranks and qualify for the $Knuckles weekly
          airdrop!
        </TextWrapper>
      </div>
    </div>
  </div>
);
const StageEight = () => (
  <div>
    <StageHeader text="STAGE 8 | Metabrawlers Presale " />
    <div className="container pt-10">
      <div className="custom-container">
        <TextWrapper>
          Metabrawlers are here, the last Brawlers of the saga have now morphed
          into a final 2.000 unit collection of a more powerful and redesigned
          kind of Brawler, with an even cooler name! Presale consists of 1.000
          units at 0.08 ETH + Gas fees.
        </TextWrapper>
      </div>
    </div>
    <div className="container py-10 text-center">
      <div className="custom-container">
        <CardLarge img={RoadMap2} />
      </div>
    </div>
  </div>
);
const StageNine = () => (
  <div>
    <StageHeader text="STAGE 9 | Metabrawlers Sale" />
    <div className="container py-10">
      <div className="custom-container">
        <TextWrapper>
          Sale consists of 1.000 units at 0.09 ETH + Gas fees.
        </TextWrapper>
      </div>
    </div>
  </div>
);
const StageTen = () => (
  <div>
    <StageHeader text="STAGE 10 | Metaverse!" />
    <div className="container py-10">
      {/* <div className="custom-container">
        <TextWrapper>
          Sale consists of 7.000 units at 0.09 ETH + Gas fees.
        </TextWrapper>
      </div> */}
    </div>
  </div>
);
const ColWrap = ({ children }) => (
  <div className="p-3 bg-yellow  rounded my-4 lg:my-2">{children}</div>
);

const StageHeader = ({ text }) => (
  <div className="bg-yellow py-6">
    <div className="conatiner">
      <p className="text-2xl text-center sm:text-4xl md:text-5xl text-black">
        {text}
      </p>
    </div>
  </div>
);

const TextGreen = ({ text }) => <span className="text-green">{text}</span>;
// const TextPrimary = ({ text }) => <span className="text-primary">{text}</span>;

const TextWrapper = ({ children }) => (
  <div className="bg-black p-6 rounded text-light">
    <p className="text-xl text-center md:text-3xl">{children}</p>
  </div>
);

const Card = ({ img = Card1Image, text1 = "?", text2 = "WOMEN" }) => (
  <div className="w-72 card">
    <div className="bg-black p-4 my-4 rounded">
      <img src={img} alt="" className="w-full" />
    </div>
    <div className="bg-black p-4 my-4 rounded">
      <p className="text-xl text-center md:text-5xl">
        <TextGreen text={text1} /> {text2}
      </p>
    </div>
  </div>
);

const CardLarge = ({ img = RoadMap1 }) => (
  <div className="bg-black p-8 rounded">
    <img src={img} alt="" className="w-full" />
  </div>
);
