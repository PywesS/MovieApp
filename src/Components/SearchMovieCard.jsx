import React from "react";

function SearchMovieCard({ info }) {
  return (
    <div className="w-full">
      <div className="w-[300px] h-[100px] mb-3  bg-[#0F0E0E] p-3  items-center gap-7 cursor-pointer rounded-2xl border border-blue-600/50 hidden lg:flex">
        <img
          className="w-12 shrink-0"
          src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
          alt={info.title}
        />

        <div className="flex-1 min-w-0">
          <p className="truncate font-semibold text-white">{info.title}</p>
          <p className="text-white">{info.release_date.slice(0, 4)}</p>
        </div>
      </div>
      {/* Mobile search movie card */}
      <div className="lg:hidden w-[full] h-[90px] bg-slate-900 flex items-center gap-4 mb-2 p-3 rounded-xl hover:bg-slate-800 transition">
        <img
          className="w-14 h-20 object-cover rounded-md"
          src={`https://image.tmdb.org/t/p/w200${info.poster_path}`}
          alt={info.title}
        />

        <div className="flex-1 min-w-0">
          <p className="truncate font-semibold text-white text-sm">
            {info.title}
          </p>
          <p className="text-gray-400 text-xs">
            {info.release_date?.slice(0, 4)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchMovieCard;
