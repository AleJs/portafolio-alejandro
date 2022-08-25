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

            {/* <ul className="li">

              <li>Ui/Ux</li>
              <li>Web</li>
              <li>Web Aplicattion</li>
              <li>Ecomoerces</li>
            </ul> */}
            <ul className="li">Webs</ul>
            <ul className="li">Web Aplicattion</ul>
            <ul className="li">Ui/Ux</ul> 
            <ul className="li">E-Commers</ul> 
        <Icon >
   
       
       <Links to={"/portafolio-v2/"}> 
        
       <FiArrowLeftCircle/>
        </Links> 
      
       
        </Icon> 
          </div>
      </div>

      <ContentCard>
      <Splide 
            options={{
              height:"450px",
              autoHeight:true,
                perPage:2,
                arrow:false,
                pagination:false,
                drag:"free",
                padding: "2rem",
                gap:"0.5rem",
                width: "100%",
                autoplay: false,
                pauseOnFocus:true,
              }}
        >


      <SplideSlide >
      <div className='card'>
          {/* <Link to={"/recipe-example/" + recipes.id}> */}

          <a href="https://alejs.github.io/recipe-example/"><img src="image/after.JPG" alt="" /></a>
          {/* <Gradient/> */}

          {/* </Link> */}
        </div>
          
             
      
      </SplideSlide>
      
      <SplideSlide >
      <div className='card'>
          {/* <Link to={"/recipe-example/" + recipes.id}> */}

         <a href="https://alejs.github.io/landing-page-frontmentor/"><img src="image/frontend.JPG"  alt="" /> </a> 
          {/* <h4>LoopStudio</h4> */}
          {/* <Gradient/> */}

          {/* </Link> */}
        </div>
      
      </SplideSlide>
      
      <SplideSlide >
      <div className='card'>
          {/* <Link to={"/recipe-example/" + recipes.id}> */}

        <a href="https://portafolio-hbnqggfpo-alejs.vercel.app/"> <img src="image/frontend2.JPG" alt="" /> </a>
         
          {/* <h4>Portafolio Example</h4> */}
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
const ContentCard = styled.div`
       grid-column: 2/6;
    grid-row: 1/4;
    grid-auto-flow: row;
    width: 100%;
    justify-self: center;
    align-self: center;
    
    .splide{
      padding: 0;
    }
  .card  {
   /* 
   max-width: 400px;
   min-width: 200px;
   height: 90%;
   background-color: #292929;
   margin: 10px;
   border-radius: 2rem;
  
   border: 2px solid rgba(7, 7, 7, 0.12);
   font-size: 16px;   
   transition: all 0.3s ease;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   cursor: pointer;
   transition: all 0.3s ease; */
   /* width: 450px;
   height: 430px; */
   /* position: relative; */
   background-color: #292929;
    height: 100%;
   width: 100%;
   max-height: 374px;
  border-radius: 2rem;
  margin: 20px;
  text-align: center;
  transition: all 0.25s;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  cursor: pointer;
}
.card:hover{
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0,0,0.2);

}
  
  img{
      padding: 5px;
       width: 100%;
      height: 100%; 
      border-radius: 2rem; 
      max-width: 500px;
      max-height: 500px;
    }

  h4{
    font-family: 'Fira Sans', sans-serif;

      color: black;
      font-size: 2rem;
      margin-bottom: 1rem;
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


export default Gallery