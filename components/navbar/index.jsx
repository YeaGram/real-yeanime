import MainLogo from "../asset/logos";
import NavItem from "./navitems";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Hamburger from "../hamburger";
import ThemeBtn from "../button/themebtn";

export default function NavigationBar() {
  const [btnState, SetBtnState] = useState(false);
  function handleBtnState() {
    SetBtnState(btnState ? false : true);
  }

  return (
    <nav className="flex top-0 fixed z-10 w-full bg-white dark:bg-black flex-col md:flex-row items-center font-semibold md:shadow-md shadow-none md:px-10 px-0">
      {/* logo */}
      <div className="flex items-center bg-white dark:bg-black w-full py-3 md:w-fit justify-between relative z-[100000] shadow-md md:shadow-none px-10 md:px-0">
        <div className="w-36 text-sm ">
          <MainLogo />
        </div>
        <div className="block md:hidden text-5xl text-primary">
          <div onClick={handleBtnState}>
            <Hamburger state={btnState} />
          </div>
        </div>
      </div>
      {/* menu */}
      <div
        className={`w-full h-screen md:h-full md:m-auto md:static md:p-0 ${
          btnState ? "translate-y-0 " : "-translate-y-full  "
        }  md:translate-y-0 absolute inset-0 z-[10000] transition-all ease-uwis duration-500`}
      >
        <div className="text-black dark:text-white text-4xl md:text-sm w-full h-full flex dark:bg-black bg-white ">
          <span className="flex md:hidden">
            <div
              className={`${
                btnState ? "h-full" : "h-0"
              } w-6 duration-1000 transition-all h-full bg-gradient-to-b dark:from-black dark:to-primary from-white to-primary`}
            ></div>
          </span>
          <div
            className={`flex-col justify-center items-center flex w-full h-full`}
          >
            <div className="w-fit md:w-full md:flex md:justify-between ">
              <div className="flex gap-4 flex-col md:flex-row md:items-center md:ml-5">
                <NavItem variants="fade" target="/anime/topanime">
                  Top Anime
                </NavItem>
                {/* <NavItem variants="fade" target="#randomAnime">
                  Random Anime
                </NavItem> */}
                {/* <NavItem variants="fade">Manga</NavItem> */}
              </div>
              <div className="flex gap-7 flex-col md:mt-0 mt-10 md:flex-row md:items-center">
                <div className="flex gap-2">
                  <NavItem variants="fade" target="/">
                    Home
                  </NavItem>
                  <NavItem variants="fade" target="/about">
                    About
                  </NavItem>
                </div>
                <div className="flex gap-2 w-full md:justify-evenly">
                  <NavItem variants="fill" target="/search">
                    <FaSearch />
                  </NavItem>
                  <ThemeBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
