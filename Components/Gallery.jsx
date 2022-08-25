import React from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import{FiArrowLeftCircle} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css/sea-Green';
const Gallery = () => {
  return (
    <Content>
      {/* <div className="title">

        <h1>Proyectos</h1>
      </div> */}

      <div className="menu">
          <div className="menul">

            <ul className="li">Ui/Ux</ul>
            <ul className="li">Webs</ul>
            <ul className="li">Web Aplicattion</ul>
            <ul className="li">E-Commers</ul>
        <Icon to={"/portafolio-v2/"}>
       
        <FiArrowLeftCircle/>
       
        </Icon> 
          </div>
      </div>

      <ContentCard>
      <Splide 
            options={{
              
              autoHeight:true,
                perPage:3,
                arrow:false,
                pagination:false,
                drag:"free",
                padding: "2rem",
                gap:"0.5rem",
                width: "100%",
                autoplay: true,
                pauseOnFocus:true,
              }}
        >


      <SplideSlide >
      <div className='card'>
          {/* <Link to={"/recipe-example/" + recipes.id}> */}

          <img src="../public/after.jpg" alt="" />
          <p>Web</p>
          {/* <Gradient/> */}

          {/* </Link> */}
        </div>
      
      </SplideSlide>
      
      <SplideSlide >
      <div className='card'>
          {/* <Link to={"/recipe-example/" + recipes.id}> */}

          <img src="../public/frontend.jpg"  alt="" />
          <p>Webs</p>
          {/* <Gradient/> */}

          {/* </Link> */}
        </div>
      
      </SplideSlide>
      
      <SplideSlide >
      <div className='card'>
          {/* <Link to={"/recipe-example/" + recipes.id}> */}

          <img src="../public/frontend2.jpg" alt="" />
          <p>Web</p>
          {/* <Gradient/> */}

          {/* </Link> */}
        </div>
      
      </SplideSlide>
      
      <SplideSlide >
      <div className='card'>
          {/* <Link to={"/recipe-example/" + recipes.id}> */}

          <img src="https://www.next4.com.br/wp-content/uploads/1-3-1200x900.png" alt="" />
          <p>Web</p>
          {/* <Gradient/> */}

          {/* </Link> */}
        </div>
      
      </SplideSlide>

      </Splide>
      </ContentCard>
    </Content>
  )
}

const Content = styled.section`
width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 90%;
   
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
      color: white;
      font-family: 'Fira Sans', sans-serif;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      cursor: pointer;
     
    }
}
    }

    
    `
const ContentCard = styled.div`
   grid-column: 2/6;
    grid-row: 2/4;
    grid-auto-flow: row;
    .splide{
      padding: 0;
    }
  .card  {
   width: 100%;
   max-width: 300px;
   min-width: 200px;
   height: 250px;
   background-color: #292929;
   margin: 10px;
   border-radius: 2rem;
   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
   border: 2px solid rgba(7, 7, 7, 0.12);
   font-size: 16px;   
   transition: all 0.3s ease;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   cursor: pointer;
   transition: all 0.3s ease;

      img{
        padding: 5px;
        width: 100%;
        height: 100%;
        border-radius: 2rem;
      }}
      p{
        color: white;
      }
    `
const Icon = styled(Link)`

text-align: center;
color: white;
font-size: 3.2rem;

`

export default Gallery