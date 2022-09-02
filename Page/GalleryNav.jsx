import React from 'react'
import styled from 'styled-components'
import Menunav from './../Components/MenuNav';

import { Outlet } from 'react-router-dom';


const GalleryNav = () => {
  return (
    <Content>
        <Menunav/>
        
        <Outlet/>
    </Content>
  )
}
const Content = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 90%;`

export default GalleryNav