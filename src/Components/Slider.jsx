import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { getMovieCastById, getPopularMovies } from "../Redux/MovieSlice";
import { FaPlay, FaPlus } from "react-icons/fa";

function Slider() {
  const { popularMovies, movieCasts } = useSelector((state) => state.Movies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  useEffect(() => {
    if (!popularMovies || popularMovies.length < 15) return;
    popularMovies.slice(10, 15).forEach((movie) => {
      dispatch(getMovieCastById(movie.id));
    });
  }, [popularMovies, dispatch]);

  return (
    <Swiper
      id="Home"
      className="w-full h-screen"
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      speed={1000}
    >
      {popularMovies.slice(10, 15).map((movie) => {
        return (
          <SwiperSlide
            key={movie.id}
            className="relative w-full h-full overflow-hidden"
          >
            {/* Mobile Poster */}
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              className="w-full h-full absolute md:top-0 left-0 xl::hidden"
              alt="Movie Backdrop"
            />
            {/* Desktop Poster */}
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="w-full h-full absolute md:top-0 left-0 hidden xl:block"
              alt="Movie Backdrop"
            />

            {/* İnfos */}
            <div
              className="w-full absolute top-1/2 
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2 z-20  flex flex-col items-center justify-center xl:items-baseline xl:top-80 xl:left-45 xl:translate-0"
            >
              <h1 className="w-[70%] text-center xl:text-left text-4xl md:text-7xl text-[#008BFF] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] font-[Cinzel] tracking-wide">
                {movie.title}
              </h1>
              <div
                className="description text-center lg:text-left text-base font-medium text-gray-400 w-75 
               mt-7 md:text-xl md:w-150"
              >
                <p className="line-clamp-4">{movie.overview}</p>
                <div
                  className="cast 
                 items-center gap-1 mt-5 w-full flex-wrap hidden lg:flex"
                >
                  <h3 className="text-[#008BFF]">Cast:</h3>
                  {movieCasts[movie.id]?.slice(0, 4).map((star, index) => {
                    return (
                      <span key={index} className="text-lg">
                        {star.name} {index !== 3 && ", "}
                      </span>
                    );
                  })}
                </div>
                <div className="buttons flex items-center gap-4 justify-center mt-7 lg:justify-start z-">
                  <button
                    className="bg-blue-600 hover:bg-blue-700
shadow-lg shadow-blue-600/40] text-gray-300  transition-all duration-200 ease-in py-3 px-5 md:py-3.5 md:px-7 text-base cursor-pointer rounded-[15px] flex items-center gap-2 hover:-translate-y-1"
                  >
                    Watch Now <FaPlay className="text-md" />
                  </button>
                  <button className="py-3 px-5 md:py-3.5 md:px-7 text-base cursor-pointer rounded-[15px] flex items-center gap-2 shadow-xl bg-zinc-500/30 backdrop-blur-md text-gray-300 border border-white/10 hover:bg-zinc-500/50 hover:-translate-y-1 transition-all duration-200 ease-in">
                    Add a List <FaPlus className="text-md" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Overlay */}
            <div
              className="absolute inset-0 lg:hidden
  bg-gradient-to-t
  from-black/95
  via-black/70
  to-black/30"
            />
            <div
              className="absolute inset-0 lg:hidden
  bg-black/25"
            />

            {/* Overlay için kullandım. */}
            <div
              className="hidden lg:block absolute inset-0 
  bg-gradient-to-r 
  from-black/90 
  via-black/65 
  to-black/25"
            />
            {/* Overlay için kullandım. */}
            <div
              className="hidden lg:block absolute inset-0 
  bg-gradient-to-t 
  from-black/45 
  via-black/10 
  to-transparent"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
