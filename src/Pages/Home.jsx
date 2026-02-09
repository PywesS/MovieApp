import React, { useEffect } from 'react'
import Slider from '../Components/Slider'
import TrendingMovies from '../Components/TrendingMovies'
import ComingSoon from '../Components/ComingSoon'


function Home() {

  return (
       <main>
           <Slider/>
           <ComingSoon/>
           <TrendingMovies/>

       </main>
  )
}

export default Home