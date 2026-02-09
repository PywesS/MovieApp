import React, { useEffect } from 'react'
import Slider from '../Components/Slider'
import TrendingMovies from '../Components/TrendingMovies'


function Home() {

  return (
       <main>
           <Slider/>
           <TrendingMovies/>
       </main>
  )
}

export default Home