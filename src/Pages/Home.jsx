import React, { useEffect } from "react";
import Slider from "../Components/Slider";
import TrendingMovies from "../Components/TrendingMovies";
import ComingSoon from "../Components/ComingSoon";
import Genre from "../Components/Genre";
import Footer from "../Components/Footer";

function Home() {
  return (
    <main>
      <Slider />
      <ComingSoon />
      <Genre />
      <TrendingMovies />
      <Footer />
    </main>
  );
}

export default Home;
