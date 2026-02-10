import { React, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getComingSoonMovies } from "../Redux/MovieSlice";
import { Navigation } from "swiper/modules";
import "swiper/css";
import CardSlider from "./CardSlider";

function ComingSoon() {
  const { ComingSoonMovies } = useSelector((state) => state.Movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComingSoonMovies());
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section id="Movies" className="w-full mt-30">
      <div className="w-[85%] mx-auto flex  justify-between gap-6">
        <div className="w-full">
          <h2 className="w-50 xl:w-full text-white text-lg md:text-xl lg:text-3xl xl:text-3.5xl font-extrabold">
            Coming Soon
          </h2>
          <p className="text-gray-400 text-xs lg:text-lg">
            The movies everyone will talk about.
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
      <div className="w-[85%] mx-auto mt-10 mb-20">
        <Swiper
          spaceBetween={35}
          slidesPerView={`auto`}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {ComingSoonMovies.map((movie) => (
            <SwiperSlide key={movie.id} className="!w-[240px] md:!w-[270px] ">
              <CardSlider movieInfo={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ComingSoon;
