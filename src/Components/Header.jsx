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
    <header className="fixed top-0 left-0 w-full z-50 ">
      {/* Header Up */}
      <div
        className={`bg-black/30 backdrop-blur-md w-full flex items-center justify-between ${isOpen ? "bg-slate-950/90" : "bg-transparent"} p-7 md:py-5 md:px-10 xl:px-15`}
      >
        <div className="flex items-center gap-15">
          <h2 className="text-white/90 font-black text-2xl mr-3 tracking-wide">
            Cine<span className="text-[#008BFF]">Vault</span>
          </h2>
          <nav className="hidden lg:flex items-center justify-center gap-4">
            {navMenus.map((item) => (
              <NavItems key={item.name} name={item.name} />
            ))}
          </nav> 
        </div>

        <div className="relative flex items-center ">
          <input
            type="text"
            placeholder="Search a movie"
            className="
                  hidden lg:block
                  bg-white/5
                  text-white
                  placeholder:text-gray-400
                  max-w-[320px]
                  py-2
                  pl-7
                  pr-12
                  shadow-2xl
                  rounded-full
                  outline-none
                  focus:ring-1
                  focus:ring-[#008BFF]
                  transition-all
                  "
          />

          <IoSearchOutline className="absolute right-3 text-xl text-gray-300 cursor-pointer hidden lg:block" />
          {/* Menu Icons */}
          {isOpen ? (
            <IoClose
              className="text-2xl text-white cursor-pointer hover:text-[#008BFF]transition-colors lg:hidden"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          ) : (
            <IoMenu
              className="text-2xl text-white cursor-pointer hover:text-[#008BFF ]transition-colors lg:hidden"
              onClick={() => {
                setIsOpen(true);
              }}
            />
          )}
        </div>
      </div>
      {/* Header down */}
      {/* Mobile Nav */}
      <nav
        className={`mt-0 py-8 px-7 bg-slate-950/90 ${isOpen ? "block translate-y-0" : " -translate-y-200"} lg:hidden transition duration-300 ease-in-out`}
      >
        {navMenus.map((item) => (
          <div key={item.name} className="w-full mb-7 ">
            <a
              href="#"
              className="flex items-center gap-1.5 text-gray-300 hover:text-[#008BFF]transition-all duration-500 ease-in-out text-lg"
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
            className="bg-white/10 text-white placeholder:text-gray-400 w-full py-2 px-10 rounded-full outline-none focus:ring-1 focus:ring-[#008BFF]"
          />
          <IoSearchOutline className="absolute top-1/2 -translate-y-1/2 right-5 text-xl text-gray-400 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
