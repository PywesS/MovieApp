import React, { useState } from "react";
import { FaHome, FaStar } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { IoMenu, IoClose, IoSearchOutline } from "react-icons/io5";
import NavItems from "./NavItems";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navMenus = [
    {
      name: "Home",
      icon: FaHome,
    },
    {
      name: "Movies",
      icon: MdLocalMovies,
    },
    {
      name: "Shows",
      icon: TbDeviceTvOld,
    },
    {
      name: "Top Rated",
      icon: FaStar,
    },
  ];

  return (
    <header className="w-full flex flex-col">
      {/* Header Up */}
      <div className="w-full flex items-center justify-between bg-slate-950/80 backdrop-blur-md border-b border-white/5 p-7 md:py-5 md:px-10 lg:px-25">
        <div>
          <h2 className="text-cyan-400 font-bold text-2xl mr-3">Logo</h2>
        </div>
        <nav className="hidden md:flex items-center justify-center gap-4">
          {navMenus.map((item) => (
            <NavItems key={item.name} Icon={item.icon} name={item.name} />
          ))}
        </nav>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search a movie"
            className="
                  hidden md:block
                  bg-white/10
                  text-white
                  placeholder:text-gray-400
                  max-w-[320px]
                  py-2
                  pl-5
                  pr-12
                  rounded-full
                  outline-none
                  focus:ring-1
                  focus:ring-cyan-500
                  transition-all
                  "
          />

          <IoSearchOutline className="absolute right-3 text-xl text-gray-400 cursor-pointer hidden md:block" />
          {/* Menu Icons */}
          {isOpen ? (
            <IoClose
              className="text-2xl text-white cursor-pointer hover:text-cyan-400 transition-colors md:hidden"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          ) : (
            <IoMenu
              className="text-2xl text-white cursor-pointer hover:text-cyan-400 transition-colors md:hidden"
              onClick={() => {
                setIsOpen(true);
              }}
            />
          )}
        </div>
      </div>
      {/* Header down */}
      <nav
        className={`mt-0 py-8 px-7 bg-slate-950/95 ${isOpen ? "block translate-y-0" : " -translate-y-100"} md:hidden transition duration-300 ease-in-out`}
      >
        {navMenus.map((item) => (
          <div key={item.name} className="w-full mb-7 ">
            <a
              href="#"
              className="flex items-center gap-1.5 text-gray-300 hover:text-cyan-400 transition-all duration-500 ease-in-out text-lg"
            >
              <item.icon />
              {item.name}
            </a>
          </div>
        ))}
        <div className="relative">
          <input
            type="text"
            placeholder="Search a movie"
            className="bg-white/10 text-white placeholder:text-gray-400 w-full py-2 px-10 rounded-full outline-none focus:ring-1 focus:ring-cyan-500"
          />
          <IoSearchOutline className="absolute top-1/2 -translate-y-1/2 right-5 text-xl text-gray-400 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
