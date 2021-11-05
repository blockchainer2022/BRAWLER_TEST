/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Slider, { SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import Image from "../../assets/image/tgblauch.png";
const Index = ({
  account,
  mint,
  totalSupply,
  displayPrice,
  maxSupply,
  loadWeb3,
}) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen((prev) => !prev);
  };
  const { Handle } = Slider;

  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    if (value > 0) {
      setValue(value);
    }

    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value}`}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  return (
    <section className="banner text-white  ">
      <div className="banner-image">
        {/* Bottom Menu Start */}
        <div className="container relative">
          <div className="flex justify-items-end md:justify-center py-4 ">
            <ul className=" justify-center hidden md:flex">
              <ListItem />
              <ListItem text="RoadMap" link="#roadmap" />
              <ListItem text="Faq" link="#faq" />
              <ListItem text="Connect" link="#connect" />
            </ul>
            <div
              className="md:hidden text-2xl sm:text-3xl cursor-pointer ml-auto"
              onClick={openHandler}
            >
              {open ? <FaTimes /> : <GiHamburgerMenu />}
            </div>
          </div>
          {/* Bottom Menu End */}
          {/* Mobile Menu */}
          <div
            className={`mobile-nav bg-dark ${open ? "active" : null} lg:hidden`}
          >
            <ul className="list-none text-center p-8 text-white">
              <li className="p-2 text-lg uppercase">
                <a className="block" href="#" onClick={openHandler}>
                  Mint
                </a>
              </li>
              <li className="p-2 text-lg uppercase">
                <a className="block" href="#roadmap" onClick={openHandler}>
                  RoadMap
                </a>
              </li>
              <li className="p-2 text-lg uppercase">
                <a className="block" href="#faq" onClick={openHandler}>
                  Faq
                </a>
              </li>
              <li className="p-2 text-lg uppercase">
                <a className="block" href="#connect" onClick={openHandler}>
                  Connect
                </a>
              </li>
            </ul>
          </div>
          {/* Mobile Menu */}
        </div>
        <div className="container text-center py-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="md:col-span-3 bg-black rounded p-8">
              <h1 className="text-4xl md:text-5xl lg:text-7xl ">
                <span className="text-yellow">MINT</span>PANEL
                <span className="text-green"> LIVE</span>
              </h1>
              <button
                className="border-2 border-yellow-400 block w-full text-yellow rounded p-2 text-3xl md:text-5xl lg:text-6xl mt-4"
                onClick={() => loadWeb3()}
              >
                {account
                  ? account.slice(0, 8) +
                    "..." +
                    account.slice(account.length - 5)
                  : "> WALLET CONNECT <"}
              </button>
              <p className="text-xl md:text-2xl  py-3">
                <span className="text-green">Compatible with</span> Metamask{" "}
                <span className="text-green">and </span>
                Trust wallet <span className="text-green">browser</span>
              </p>
              <div className="my-4">
                <Slider min={0} max={20} defaultValue={1} handle={handle} />
              </div>

              <p className="text-2xl md:text-4xl md:px-10 ">
                Mint <span className="text-green"> 01 </span> TG Brawlers for{" "}
                <span className="text-green"> 0.00 </span> ETH <br />
                <span className="text-green">
                  (A limit of 100 units per transaction is set)
                </span>
              </p>
              <button
                className="bg-yellow rounded  p-2 text-3xl md:text-5xl mt-10 block w-full text-black "
                onClick={() => mint(value)}
              >
                {"< MINT >"}
              </button>
            </div>
            <div className="md:col-span-2 bg-black rounded  overflow-hidden mb-5 md:mb-0">
              <div className="hidden md:block">
                <img src={Image} alt="" className="w-full" />
              </div>
              <div className="p-10">
                <p className="text-4xl  md:text-5xl lg:text-6xl mt-2">
                  Brawlers minted
                </p>
                <p className="text-4xl  md:text-5xl lg:text-7xl text-green">
                  {totalSupply}/{maxSupply}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-green container text-center mt-5 pb-4 text-3xl">
          {"smart contract address < >"}
        </div>
      </div>
      <div className="bg-primary">
        <div className="container">
          <div className="custom-container">
            <p className="text-lg md:text-3xl py-2 sm:py-4 text-center">
              Don´t forget to join our discord server and say hi!
              <a href="https://discord.gg/cjzmhD2S7y" className="text-green">
                https://discord.gg/cjzmhD2S7y
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
const ListItem = ({ text = "Mint", link = "#" }) => (
  <li className="ml-8">
    <a href={link} className="uppercase text-5xl ">
      {text}
    </a>
  </li>
);
