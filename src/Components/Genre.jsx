import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterMovies, getAllMovies, getGenres } from "../Redux/MovieSlice";
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

  const filter = (id) => {
    setSelectedGenreId(id);
    dispatch(filterMovies(id));
  };

  return (
    <section className="w-full mt-20">
      <div className="w-[85%] mx-auto">
        <h2 className="w-50 xl:w-full text-white text-lg md:text-xl lg:text-3xl xl:text-3.5xl font-extrabold">
          Genre Movies
        </h2>
        <p className="text-gray-400 text-xs lg:text-lg">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
          nemo?
        </p>
        <div className="buttons flex flex-wrap gap-6 mt-8">
          {genres.map((g)=> (
            <button
              onClick={() => filter(g.id)}
              className={`rounded-xl px-3 py-3 backdrop-blur-md text-gray-300 cursor-pointer hover:bg-blue-600 transition duration-300 ease-in ${selectedGenreId == g.id ? "bg-blue-600 text-white" : "bg-zinc-500/30"}`}
            >
              {g.name}
            </button>
          ))}
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
