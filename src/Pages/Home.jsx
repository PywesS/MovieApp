import React, { useEffect } from 'react'
import Slider from '../Components/Slider'
import TrendingMovies from '../Components/TrendingMovies'
import ComingSoon from '../Components/ComingSoon'
import Genre from '../Components/Genre'


function Home() {

  return (
       <main>
           <Slider/>
           <ComingSoon/>
           <TrendingMovies/>
           <Genre/>

       </main>
  )
}

export default Home