import React from "react";

function NavItems({ Icon, name }) {
  return (
    <div className="text-gray-300 flex gap-1.5 text-base font-medium tracking-wide hover:text-cyan-400 transition-all duration-300 ease-in-out">
      <Icon className="text-xl hidden lg:block" />
      <a href={`#${name}`}>{name}</a>
    </div>
  );
}

export default NavItems;
