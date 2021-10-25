/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import BannerRing from "../../assets/image/banner_ring2.png";
// import Banner from "../../assets/image/banner-bg.png";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Index = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen((prev) => !prev);
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
        </div>
        {/* <div className="custom-container">
          <div className="pb-14">
            <img src={BannerRing} alt="" className="w-full mx-auto" />
            <div className="bg-black p-2 md:p-4 rounded text-lg md:text-3xl text-center">
              <p>
                <span className="text-green"> Thimble Gang Brawlers</span> is a
                collection of 5000 algorithmically generated pixel characters
                with 2 genders, 1500 unique facial expressions and skin colour
                coding. An incredible ammount of love is being invested into
                this project and it will be deployed in{" "}
                <span className="text-green"> 10 stages </span>which we plan to
                fulfil with your help. For detailed info view{" "}
                <span className="text-green"> ROADMAP. </span>
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="bg-primary">
        <div className="container">
          <div className="custom-container">
            <p className="text-lg md:text-3xl py-2 sm:py-4 text-center">
              Don´t forget to join our discord server and say hi!{" "}
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
