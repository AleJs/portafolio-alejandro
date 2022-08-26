import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import{FiArrowLeftCircle} from 'react-icons/fi'
const Menunav = () => {
    return (
        <MenuNav>
            {/* <div className="title">

        <h1>Proyectos</h1>
      </div> */}

            <div className="menu">
                <div className="menul">

                    {/* <ul className="li">

              <li>Ui/Ux</li>
              <li>Web</li>
              <li>Web Aplicattion</li>
              <li>Ecomoerces</li>
            </ul> */}
                   <Links to={"web"}><ul className="li">Webs</ul></Links> 
                    <ul className="li">Web Aplicattion</ul>
                    <ul className="li">Ui/Ux</ul>
                    <ul className="li">E-Commers</ul>
                    <Icon >


                        <Links to={"/luisalejandro/"}>

                            <FiArrowLeftCircle />
                        </Links>


                    </Icon>
                </div>
            </div>
        </MenuNav>
    )
}
const MenuNav = styled.section`
grid-area: 1/ 1/ 4;
  .title{
    /* grid-area: logo; */
    grid-column: 2;
    font-size: 3rem;
    text-align: end;
    margin-top: 2rem;
  }

 

  .menu{
    
    height: 100%;
    width: 100%;
    background: #253139;
   
    border-radius: 2rem;
    grid-area: 1/ 1/ 4;
    .menul{
      height: 100%;
      width: 100%;
      display: grid;
    align-content: center;
    justify-content: center;
    letter-spacing: 1px;

    
    ul{
  
      margin-bottom: 1rem;
     
      cursor: pointer;
        color: white;
        font-family: 'Fira Sans', sans-serif;
        font-size: 1.5rem;
      li{
        list-style: none;
      }
     
    }
}
    }

    
    `
    const Icon = styled.div`
    Link{
      text-decoration: none;
      color: white;
    }
    text-align: center;
    color: white;
    font-size: 3.2rem;
    
    
    `
    const Links = styled(Link)`
      text-decoration: none;
      color: white;
    `
export default Menunav