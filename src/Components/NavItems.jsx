import React from "react";

function NavItems({ name }) {
  return (
    <div
      className="text-gray-300
hover:text-white
relative
after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0 after:bg-[#008BFF]
hover:after:w-full
after:transition-all after:duration-300  flex items-center  text-[18px] font-extralight tracking-wide  transition-all duration-300 ease-in-out ml-7"
    >
      <a href={`#${name}`}>{name}</a>
    </div>
  );
}

export default NavItems;
