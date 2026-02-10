import React from "react";
import { IoIosStar } from "react-icons/io";
function MovieCard({ movieInfo }) {
  return (
    <div className="w-70 relative group cursor-pointer mt-10 xl:mt-0">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
        alt=""
        className="w-full h-full"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0
  bg-gradient-to-t
  from-black/50
  via-black/25
  to-transparent
  backdrop-blur-[0.5px]"
      />

      <div
        className="absolute inset-0 
    bg-gradient-to-t 
    from-[#020617]/98 
    via-[#020617]/85 
    via-60% 
    to-[#020617]/20
    opacity-0 group-hover:opacity-100
    transition duration-300 ease-in
    "
      />

      {/* Navy mood layer */}
      <div
        className="absolute inset-0 
    bg-gradient-to-t 
    from-[#0b1f3a]/40 
    via-transparent 
    to-transparent opacity-0 group-hover:opacity-100
    transition duration-300 ease-in
    "
      />
      {/* Movie Info */}
      <div className="w-full h-full p-4 absolute top-0 flex  flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
        <h3 className="text-blue-600 font-bold text-xl tracking-wide text-center">
          {movieInfo.title}
        </h3>
        <p className="line-clamp-3 text-center font-medium">
          {movieInfo.overview}
        </p>
        <button
          className="mt-4 inline-flex items-center gap-2
  px-4 py-2 rounded-lg
  border border-blue-500/40
  text-blue-400 text-sm
  hover:bg-blue-500/15 hover:text-white
  transition cursor-pointer"
        >
          View Details →
        </button>
      </div>

      {/* IMDB & DATE */}
      <div className="flex justify-between mt-2">
        <p className="text-gray-200 flex items-center justify-center italic">
          <IoIosStar className="text-yellow-400 " />
          {movieInfo.vote_average < 1
            ? "N/A"
            : Number(movieInfo.vote_average.toFixed(1))}
        </p>
        <p className="text-gray-200 italic">{movieInfo.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
