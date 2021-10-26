import React, { useState } from "react";
import PholderImage from "../../assets/image/placeholder.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Index = ({
  account,
  mint,
  totalSupply,
  displayPrice,
  maxSupply,
  loadWeb3,
}) => {
  const [value, setValue] = useState("");

  const inputHandler = (e) => {
    const reg = /^[0-9\b]+$/;
    if (e.target.value === "" || reg.test(e.target.value)) {
      setValue(Number(e.target.value));
    }
  };

  return (
    <section className="bg-primary" id="connect">
      <div className="bg-black">
        <div className="container">
          <div className="custom-container">
            <p className="text-2xl text-center sm:text-4xl md:text-6xl lg:text-7xl">
              {">>PRESALE STARTS IN"}
              <span className="text-yellow"> {" NOVEMBER<< "} </span>
            </p>
          </div>
        </div>
      </div>

      <div className="container pt-10 md:pt-24 text-center">
        <div className="custom-container">
          <div className="md:flex">
            {/* Your Knuckle Start */}
            <div className="md:w-1/3 md:pr-2 md:flex md:flex-col ">
              <ColWrap>
                <h4 className="text-2xl text-center lg:text-4xl">
                  YOUR Knuckle$ <span className="text-green">0000</span>
                </h4>
              </ColWrap>
              <div className="md:flex-1 bg-black p-2 py-4  rounded my-4 lg:my-2 md:flex md:flex-col md:justify-between ">
                <OwlCarousel className="owl-theme" items={1} dots={true}>
                  <div className=" flex flex-wrap ">
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
                  <div className=" flex flex-wrap ">
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
                  <div className=" flex flex-wrap ">
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
                  <div className=" flex flex-wrap ">
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
                </OwlCarousel>
                <div className="w-full">
                  <h4 className="text-2xl text-center mt-4 lg:text-4xl">
                    YOU OWN <span className="text-green">0</span> BRAWLERS
                  </h4>
                </div>
              </div>
            </div>
            {/* Your Knuckle End */}
            {/* Mint Panel Start */}
            <div className="md:w-2/3 md:pl-2">
              <ColWrap>
                <h4 className=" text-center ">MINT PANEL</h4>
              </ColWrap>
              <div className="sm:flex flex-wrap pt-0">
                <div className="sm:w-2/3 sm:pr-2 sm:flex sm:flex-col sm:justify-between">
                  <ColWrap>
                    <img src={PholderImage} alt="" className="w-full p-2" />
                  </ColWrap>
                  <ColWrap>
                    <input
                      type="text"
                      placeholder="NUMBER OF UNITS 0"
                      className="bg-transparent w-full text-center text-white presale-input"
                      value={value}
                      onChange={inputHandler}
                    />
                  </ColWrap>
                </div>
                <div className="sm:w-1/3 sm:pl-2 sm:flex sm:flex-col sm:justify-between ">
                  <div className="p-3 text-2xl bg-black rounded my-4 lg:my-2 lg:text-4xl flex-1 flex flex-col justify-between items-center">
                    <div>
                      <p>ID</p>
                      <p className="text-green">#0000</p>
                    </div>
                    <div>
                      <p>GENDER</p>
                      <p className="text-green">MALE</p>
                    </div>
                    <div>
                      <p>EYES</p>
                      <p className="text-green">REGULAR</p>
                    </div>
                    <div>
                      <p>R. INDEX</p>
                      <p className="text-green">0000</p>
                    </div>
                  </div>
                  <ColWrap>
                    <button
                      className="text-green block w-full"
                      onClick={() => mint(value)}
                    >
                      {">MINT<"}
                    </button>
                  </ColWrap>
                </div>
              </div>
            </div>
            {/* Mint Panel END*/}
          </div>
        </div>
      </div>
      <div className="container pb-10 md:pb-24 mt-8 md:mt-10">
        <div className="custom-container">
          <ColWrap>
            <button
              className="text-4xl lg:text-5xl text-center block w-full"
              onClick={() => loadWeb3()}
            >
              {account
                ? account.slice(0, 8) +
                  "..." +
                  account.slice(account.length - 5)
                : "> WALLET CONNECT <"}
            </button>
          </ColWrap>
        </div>
      </div>
    </section>
  );
};

export default Index;

const ColWrap = ({ children }) => (
  <div className="p-3 text-2xl bg-black rounded my-4 lg:my-2 lg:text-4xl">
    {children}
  </div>
);
