import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById, getMovieCastById, setIsTrailerOpen } from "../Redux/MovieSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import {
  IoTimeOutline,
  IoCalendarOutline,
  IoPlayOutline,
  IoAddCircleOutline,
} from "react-icons/io5";
import MovieTrailer from "../Components/MovieTrailer";
function MovieDetails() {
  const { id } = useParams();
  const { movieCasts, movieById, loading} = useSelector(
    (state) => state.Movies,
  );

  const {
    title,
    poster_path,
    release_date,
    runtime,
    overview,
    genres,
    vote_average,
  } = movieById;
  const casts = movieCasts[id] || [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieCastById(id));
    dispatch(getMovieById(id));
  }, [id, dispatch]);

  return (
    <div className="w-full h-[calc(100vh-80px)] mt-50 md:mt-20 text-white flex justify-center items-center relative">
      {/* Movie Details Container */}

      {loading ? (
        <AiOutlineLoading3Quarters className="text-4xl animate-spin" />
      ) : (
        <div className="bg-[#0F0E0E] w-400 py-30 px-10 flex flex-col lg:flex-row lg:gap-20 items-center lg:items-start rounded-2xl shadow-2xl">
          <div className="left">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              className="w-[350px] mb-8 lg:mb-0 shadow-2xl"
            />
          </div>
          <div className="right flex-1 flex flex-col justify-center items-center xl:items-start">
            <h2 className=" text-xl text-center lg:text-3xl lg:text-left text-[#008BFF] font-bold mb-3">
              {title} ({release_date?.slice(0, 4)})
            </h2>
            <div className="flex gap-3 items-center">
              <div className="imdb flex gap-1.5 items-center">
                <IoIosStar className="text-lg text-yellow-300" />
                <span>{vote_average < 1 ? "N/A" : vote_average}</span>
              </div>
              <div className="time flex gap-1 items-center">
                <IoTimeOutline className="text-lg" />
                <span>{Math.floor(runtime / 60)}h</span>{" "}
                <span>{Math.floor(runtime % 60)}m</span>
              </div>
              <div className="date flex items-center gap-1">
                <IoCalendarOutline className="text-lg" />
                <span>{release_date}</span>
              </div>
            </div>

            <div className="categories flex items-center gap-3 mt-5">
              {genres?.map((genre) => (
                <span className="px-2 text-sm py-0.5 rounded-2xl bg-zinc-500/30 select-none">
                  {genre.name}
                </span>
              ))}
            </div>
            <p className="w-full text-gray-200/80 text-center xl:text-left leading-6.5 tracking-wide mt-4">
              {overview}
            </p>

            <div className="flex flex-wrap gap-2 items-center justify-center lg:justify-baseline mt-7">
              <h3 className="text-base text-[#008BFF]">Casts :</h3>
              {casts?.slice(0, 5).map((cast) => (
                <p>{cast.name} -</p>
              ))}
            </div>

            <div className="buttons flex items-center gap-5 mt-5">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto px-4 py-2 sm:px-7 sm:py-3 
              bg-blue-600 rounded-xl flex items-center justify-center gap-2
              hover:bg-blue-600/80 transition-all duration-200 ease-in 
                hover:-translate-y-1 text-sm sm:text-base cursor-pointer"
                onClick={()=>dispatch(setIsTrailerOpen(true))}
                >
                  <IoPlayOutline className="text-lg" />
                  Watch Now
                </button>

                <button
                  className="w-full sm:w-auto px-4 py-2 sm:px-7 sm:py-3 
                rounded-xl flex items-center justify-center gap-2 
                shadow-xl bg-zinc-500/30 backdrop-blur-md text-gray-300 
                border border-white/10 hover:bg-zinc-500/50 
                hover:-translate-y-1 transition-all duration-200 ease-in
                text-sm sm:text-base cursor-pointer"
                >
                  <IoAddCircleOutline className="text-lg" />
                  Add to WatchList
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <MovieTrailer id ={id}/>
    </div>
  );
}

export default MovieDetails;
