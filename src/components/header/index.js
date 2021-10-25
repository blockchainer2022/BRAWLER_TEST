/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaTimes } from "react-icons/fa";
const Index = () => {
  // const [open, setOpen] = useState(false);
  // const openHandler = () => {
  //   setOpen((prev) => !prev);
  // };
  return (
    <header className="relative">
      {/* TOP HEADER START*/}
      <div className="bg-black py-2">
        <div className="container">
          <div className="md:flex">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl  text-center flex md:justify-center items-center  justify-between flex-1">
              <span className="md:hidden">
                <a
                  href="https://twitter.com/thimblegang"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillTwitterCircle />
                </a>
              </span>
              <span>
                THIMBLEGANG{" "}
                <span className="text-primary md:text-7xl lg:text-8xl sm:text-5xl">
                  BRAWLERS
                </span>
              </span>
              <span className="md:hidden">
                <a
                  href="https://discord.gg/aGR2B4Curb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiDiscord />
                </a>
              </span>
            </h1>
            <div className="hidden md:block md:text-5xl lg:text-6xl">
              <a
                href="https://twitter.com/thimblegang"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://discord.gg/aGR2B4Curb"
                target="_blank"
                rel="noreferrer"
              >
                <SiDiscord />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* TOP HEADER END */}
      {/* Bottom Menu Start */}
      {/* <div className="container">
        <div className="flex justify-items-end md:justify-center py-4 relative">
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
        </div> */}
      {/* Bottom Menu End */}
      {/* Mobile Menu */}
      {/* <div
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
      </div> */}
    </header>
  );
};

export default Index;

// const ListItem = ({ text = "Mint", link = "#" }) => (
//   <li className="ml-8">
//     <a href={link} className="uppercase text-5xl ">
//       {text}
//     </a>
//   </li>
// );
