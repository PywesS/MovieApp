import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrailerById, setIsTrailerOpen } from "../Redux/MovieSlice";

function MovieTrailer({ id }) {
  const { trailer, trailerIsOpen } = useSelector((state) => state.Movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrailerById(id));
  }, [id, dispatch]);

  if (!trailerIsOpen) return null;
  return (
    <div
      className={`w-full h-[calc(100vh-80px)] justify-center items-center py-4 px-2 lg:px-0 absolute top-0 left-0 flex z-50`}
      onClick={() => dispatch(setIsTrailerOpen(false))}
    >
      <div
        className="w-full xl:w-[70%]"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${trailer?.key}`}
          title="Trailer"
          className="w-full aspect-video rounded-xl shadow-2xl border-none"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default MovieTrailer;
