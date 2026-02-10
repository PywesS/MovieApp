import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterMovies, getAllMovies, getGenres } from "../Redux/MovieSlice";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MovieCard from "./MovieCard";

function Genre() {
  const { genres, allMovies, filteredMovies } = useSelector(
    (state) => state.Movies,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getAllMovies());
  }, []);

  useEffect(() => {
    dispatch(filterMovies(28));
  }, [allMovies]);
  const [selectedGenreId, setSelectedGenreId] = useState(28);
  const [selectedGenreName, setSelectedGenreName] = useState("Select Genre");

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const filter = (id) => {
    setSelectedGenreId(id);
    dispatch(filterMovies(id));
  };

  const closeFilterMenu = (name) => {
    setSelectedGenreName(name);
    setIsDropDownOpen(false);
  };

  return (
    <section id= "Genres" className="w-full mt-30">
      <div className="w-[85%] mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="w-50 xl:w-full text-white text-lg md:text-xl lg:text-3xl xl:text-3.5xl font-extrabold">
              Genre Movies
            </h2>
            <p className="text-gray-400 text-xs lg:text-lg">
              {" "}
              Choose a genre to explore movies.
            </p>
          </div>
          {/* Genre */}
          <div className="relative">
            {/* Genre Input */}
            <div
              className="w-25 h-[30px] md:w-40 h-[40px] xl:w-44 xl:h-[42px]
              flex items-center justify-between px-4
              rounded-lg select-none cursor-pointer
              bg-[#0F0E0E] backdrop-blur-md
              border border-white/10
              text-gray-200
              hover:bg-[#0F0E0E]/40
              transition-all duration-150"
            >
              <span className="text-sm truncate">{selectedGenreName}</span>{" "}
              {isDropDownOpen ? (
                <FaChevronUp
                  className="cursor-pointer"
                  onClick={() => setIsDropDownOpen(false)}
                />
              ) : (
                <FaChevronDown
                  className="cursor-pointer"
                  onClick={() => setIsDropDownOpen(true)}
                />
              )}
            </div>
            {/* Genre Items */}
            <ul
              className={`${isDropDownOpen ? "block" : "hidden"} absolute top-15 right-0  rounded-xl
              bg-[#0F0E0E] backdrop-blur-md
              border border-white/10
              shadow-xl shadow-black/50 xl:w-60 h-50 overflow-auto z-20`}
            >
              {genres.slice(0, 15).map((g) => {
                return (
                  <li
                    className="px-4 py-2 text-sm text-white/80
                        hover:bg-blue-600/20 hover:text-white
                        transition-all duration-150
                        cursor-pointer"
                    onClick={() => {
                      filter(g.id);
                      closeFilterMenu(g.name);
                    }}
                  >
                    {g.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* {Filtered Movies} */}
        <div className="movies grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 justify-items-center xl:grid-cols-5 xl:gap-20 mt-15 mb-20">
          {filteredMovies.map((movie) => (
            <MovieCard movieInfo={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Genre;
