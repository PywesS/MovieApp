import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { FaImdb } from "react-icons/fa";
import { Navigation } from "swiper/modules";

import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../Redux/MovieSlice";
import { FaChevronCircleRight } from "react-icons/fa";

function TrendingMovies() {
  const { popularMovies } = useSelector((state) => state.Movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section id="trendMovies" className="w-full mt-20">
      {/* Title and Buttons */}
      <div className="w-[85%] mx-auto flex  justify-between gap-6">
        <div className="w-full">
          <h2 className="w-50 xl:w-full text-white text-lg md:text-xl lg:text-3xl xl:text-3.5xl font-extrabold">
            Trending Movies
          </h2>
          <p className="text-gray-400 text-xs lg:text-lg">
            Discover the most watched movies of the week.
          </p>
        </div>
        <div className="w-full flex items-center justify-end gap-4">
          <button
            ref={prevRef}
            className="bg-blue-600 w-[32px] h-[32px] lg:w-[38px] lg:h-[38px] flex items-center justify-center rounded-full cursor-pointer"
          >
            <FaChevronLeft className="text-lg" />
          </button>
          <button
            ref={nextRef}
            className="bg-blue-600 w-[32px] h-[32px] lg:w-[38px] lg:h-[38px] flex items-center justify-center rounded-full cursor-pointer"
          >
            <FaChevronRight className="text-lg" />
          </button>
        </div>
      </div>

      {/* Card Slider */}
      <div className="w-[85%] mx-auto mt-10 mb-20">
        <Swiper
          spaceBetween={30}
          slidesPerView={`auto`}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {popularMovies.map((movie) => (
            <SwiperSlide key={movie.id} className="!w-[240px] md:!w-[270px] ">
              {/* İmage */}
              <div className="group relative">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                  className="w-full !h-[300px] md:!h-[330px] rounded-t-xl object-cover"
                />
                <div className="hoverinfo absolute top-0 left-0 w-full h-full bg-black/35  opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-end justify-center">
                  <button className="flex items-center font-medium justify-center w-[90%] h-10 bg-blue-600 mb-5 rounded-lg cursor-pointer hover:bg-blue-700 gap-3 hover:-translate-y-1 transition duration-300 ease-in-out">
                    Get Details <FaChevronCircleRight className="text-lg" />
                  </button>
                </div>
              </div>
              {/* Movie Info */}
              <div className="bg-gray-400/5 p-5 rounded-b-xl">
                <div className="mt-0">
                  <h3 className="text-lg font-medium text-white">
                    {movie.title.slice(0, 20)}
                  </h3>
                </div>
                {/* Imbd and Year*/}
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-1">
                    <FaImdb className="text-yellow-400 text-2xl" />
                    <span className="text-white">{movie.vote_average}</span>
                  </div>
                  <span className="text-white">
                    {movie.release_date.slice(0, 4)}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TrendingMovies;
