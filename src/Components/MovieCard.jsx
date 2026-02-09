import React from "react";
import { FaImdb } from "react-icons/fa";
function MovieCard({ movieInfo }) {
  return (
    <div className="w-70 relative group cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
        alt=""
        className="w-full h-full"
      />
      {/* Overlay */}
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
      </div>

      {/* IMDB & DATE */}
      <div>{movieInfo.id}</div>
    </div>
  );
}

export default MovieCard;
