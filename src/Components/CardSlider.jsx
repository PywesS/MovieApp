import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
function CardSlider({ movieInfo }) {
  return (
    <div>
      {/* İmage */}
      <div className="group relative">
        <img
          src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}
          alt=""
          className="w-full !h-[300px] md:!h-[330px] rounded-t-xl object-cover"
        />
        <div
          className="absolute inset-0
  bg-gradient-to-t
  from-black/50
  via-black/25
  to-transparent
  backdrop-blur-[0.5px]"
        />
        <div className="hoverinfo absolute top-0 left-0 w-full h-full bg-black/35  opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-end justify-center">
          <button className="flex items-center font-medium text-[#0F0E0E] justify-center w-[90%] h-10 bg-blue-600 mb-5 rounded-lg cursor-pointer hover:bg-blue-700 gap-3 hover:-translate-y-1 transition duration-300 ease-in-out">
            Get Details <FaChevronCircleRight className="text-lg" />
          </button>
        </div>
      </div>
      {/* Movie Info */}
      <div className="bg-gray-400/5 p-5 rounded-b-xl">
        <div className="mt-0">
          <h3 className="text-lg font-medium text-white">
            {movieInfo.title.slice(0, 20)}
          </h3>
        </div>
        {/* Imbd and Year*/}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1">
            <FaImdb className="text-yellow-400 text-2xl" />
            <span className="text-white">{movieInfo.vote_average < 1
            ? "N/A"
            : Number(movieInfo.vote_average.toFixed(1))}</span>
          </div>
          <span className="text-white">
            {movieInfo.release_date.slice(0, 4)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
