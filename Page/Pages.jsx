import React from 'react'
import {Route, Routes} from "react-router-dom"
import Hero from './../Components/Hero';
import Gallery from '../Components/Gallery';
const Pages = () => {
  return (
    <Routes>
        <Route exact path= "/portafolio-v2/" element={<Hero/>}/>
        <Route  path= "/portafolio-v2/portafolio" element={<Gallery/>}/>
    </Routes>
  )
}

export default Pages