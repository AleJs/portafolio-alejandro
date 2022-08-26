import React from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
const Portafolio = () => {
  return (
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

  )
}
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



export default Portafolio