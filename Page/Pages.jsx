import React from 'react'
import {Route, Routes} from "react-router-dom"
import Hero from './../Components/Hero';
import GalleryNav from './GalleryNav';
import Portafolio from '../Components/Portafolio';
const Pages = () => {
  return (
    <Routes>
        <Route exact path= "/portafolio-alejandro/" element={<Hero/>}/>
        <Route  path= "/portafolio-alejandro/works/" element={<GalleryNav/>}>
          <Route  path= "web" element={<Portafolio/>}/>
        <Route exact path= "*" element={<Portafolio/>}/>

        </Route>
        <Route exact path= "*" element={<Hero/>}/>
        
    </Routes>
  )
}

export default Pages