import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { IoBagSharp } from "react-icons/io5";
const Hero = () => {



  return (

    <section className='hero'>


      <HeroBox className="hero-box">

        <div className="hero-box_text">

          <h1>
            Alejandro <br />
            Ramirez
          </h1>
          <p>
            I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
          </p>
          <div className="imagenes">

            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="" />
            <img src="(https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="" />
            <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="" />
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" />
            <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
            <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="" />
            <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
            <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="" />
            <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="" />
            <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="" />
            <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="" />
            <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="" />
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="" />
          </div>
          <svg width="16" height="530" viewBox="0 0 16 530" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="530" fill="#32574E" />
          </svg>


          <Button to={"/portafolio-v2/portafolio"}>

            <span class="button-50" role="button">Portafolio </span>
          </Button>
        </div>

        <ContainerPhoto className="hero-box_photo">

          <div className='foto'>
            <img src="image/fondo.svg" alt="" />
          </div>




          <div className="iconsvgSociall">
            <a href="https://www.linkedin.com/in/alejandro-ramirez-11080a143/        
            ">

              <motion.svg whileTap={{ scale: 0.9 }} whileHover={{ rotate: [0, 5, 0], scale: 1.1 }} width="82" height="80" viewBox="0 0 82 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10.1483" y="10" width="68.9884" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round" />
                <rect x="2.03198" y="2" width="68.9884" height="68" fill="#F3FCFF" stroke="black" strokeWidth="4" strokeLinejoin="round" />
                <path d="M54.9286 15H18.0618C16.3725 15 15 16.3594 15 18.0281V53.9719C15 55.6406 16.3725 57 18.0618 57H54.9286C56.6179 57 58 55.6406 58 53.9719V18.0281C58 16.3594 56.6179 15 54.9286 15ZM27.996 51H21.6228V30.9562H28.0056V51H27.996ZM24.8094 28.2188C22.765 28.2188 21.1141 26.5969 21.1141 24.6094C21.1141 22.6219 22.765 21 24.8094 21C26.8442 21 28.5047 22.6219 28.5047 24.6094C28.5047 26.6062 26.8538 28.2188 24.8094 28.2188V28.2188ZM51.8859 51H45.5127V41.25C45.5127 38.925 45.4647 35.9344 42.2013 35.9344C38.8804 35.9344 38.3717 38.4656 38.3717 41.0813V51H31.9984V30.9562H38.1125V33.6937H38.1989C39.0531 32.1187 41.1359 30.4594 44.2362 30.4594C50.6862 30.4594 51.8859 34.6125 51.8859 40.0125V51V51Z" fill="black" />
              </motion.svg>
            </a>
            <a href="https://github.com/AleJs">

              <motion.svg whileTap={{ scale: 0.9 }} whileHover={{ rotate: [0, 5, 0], scale: 1.1 }} width="82" height="80" viewBox="0 0 82 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10.8081" y="10" width="68.9884" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round" />
                <rect x="2.69186" y="2" width="68.9884" height="68" fill="#F3FCFF" stroke="black" strokeWidth="4" strokeLinejoin="round" />
                <path d="M28.7272 51.0651C28.7272 51.276 28.4815 51.4448 28.1716 51.4448C27.819 51.4764 27.5732 51.3077 27.5732 51.0651C27.5732 50.8542 27.819 50.6855 28.1288 50.6855C28.4494 50.6538 28.7272 50.8226 28.7272 51.0651ZM25.404 50.5906C25.3292 50.8015 25.5429 51.044 25.8635 51.1073C26.1413 51.2128 26.4619 51.1073 26.526 50.8964C26.5901 50.6855 26.3871 50.4429 26.0665 50.348C25.7887 50.2742 25.4788 50.3797 25.404 50.5906ZM30.127 50.4113C29.8171 50.4851 29.6034 50.6855 29.6355 50.928C29.6675 51.1389 29.9454 51.276 30.2659 51.2022C30.5758 51.1284 30.7895 50.928 30.7575 50.7171C30.7254 50.5167 30.4369 50.3797 30.127 50.4113ZM37.1581 10C22.3373 10 11 21.1047 11 35.7316C11 47.4268 18.4585 57.4348 29.1119 60.957C30.4796 61.1996 30.9605 60.3665 30.9605 59.681C30.9605 59.0272 30.9284 55.4205 30.9284 53.2059C30.9284 53.2059 23.4486 54.7878 21.8778 50.0633C21.8778 50.0633 20.6597 46.9945 18.9073 46.2035C18.9073 46.2035 16.4603 44.5479 19.0782 44.5795C19.0782 44.5795 21.7389 44.7904 23.2028 47.3003C25.5429 51.371 29.4645 50.2004 30.9925 49.5044C31.2383 47.817 31.9329 46.6465 32.7022 45.9504C26.729 45.2966 20.7024 44.4424 20.7024 34.2974C20.7024 31.3973 21.5145 29.942 23.2242 28.0859C22.9464 27.4005 22.0381 24.5742 23.502 20.9254C25.7353 20.2399 30.875 23.7727 30.875 23.7727C33.0121 23.1822 35.3095 22.8764 37.5855 22.8764C39.8615 22.8764 42.1589 23.1822 44.296 23.7727C44.296 23.7727 49.4357 20.2294 51.669 20.9254C53.1329 24.5848 52.2246 27.4005 51.9468 28.0859C53.6565 29.9525 54.7036 31.4079 54.7036 34.2974C54.7036 44.474 48.4099 45.2861 42.4367 45.9504C43.4198 46.7836 44.2532 48.3654 44.2532 50.8437C44.2532 54.3976 44.2212 58.7952 44.2212 59.6599C44.2212 60.3454 44.7127 61.1785 46.0698 60.9359C56.7552 57.4348 64 47.4268 64 35.7316C64 21.1047 51.9788 10 37.1581 10ZM21.3863 46.3723C21.2474 46.4777 21.2794 46.7203 21.4611 46.9206C21.6321 47.0894 21.8778 47.1632 22.0167 47.0261C22.1556 46.9206 22.1236 46.6781 21.9419 46.4777C21.771 46.309 21.5252 46.2352 21.3863 46.3723ZM20.2323 45.5181C20.1575 45.6552 20.2643 45.8239 20.478 45.9293C20.649 46.0348 20.8627 46.0032 20.9375 45.8555C21.0123 45.7184 20.9054 45.5497 20.6917 45.4442C20.478 45.381 20.3071 45.4126 20.2323 45.5181ZM23.6944 49.2723C23.5234 49.4094 23.5875 49.7258 23.8333 49.9262C24.079 50.1687 24.3889 50.2004 24.5278 50.0316C24.6667 49.8945 24.6026 49.5782 24.3889 49.3778C24.1538 49.1353 23.8333 49.1036 23.6944 49.2723ZM22.4762 47.7221C22.3052 47.8276 22.3052 48.1018 22.4762 48.3443C22.6472 48.5869 22.9357 48.6923 23.0746 48.5869C23.2456 48.4498 23.2456 48.1756 23.0746 47.933C22.925 47.6905 22.6472 47.585 22.4762 47.7221Z" fill="black" />
              </motion.svg>
            </a>

            <motion.svg whileTap={{ scale: 0.9 }} whileHover={{ rotate: [0, 5, 0], scale: 1.1 }} width="82" height="80" viewBox="0 0 82 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10.468" y="10" width="68.9884" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              <rect x="2.35175" y="2" width="68.9884" height="68" fill="#F3FCFF" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              <path d="M36.5064 21.6423C28.4189 21.6423 21.8955 28.0527 21.8955 36C21.8955 43.9473 28.4189 50.3577 36.5064 50.3577C44.5938 50.3577 51.1172 43.9473 51.1172 36C51.1172 28.0527 44.5938 21.6423 36.5064 21.6423ZM36.5064 45.3344C31.28 45.3344 27.0074 41.1483 27.0074 36C27.0074 30.8517 31.2673 26.6656 36.5064 26.6656C41.7454 26.6656 46.0053 30.8517 46.0053 36C46.0053 41.1483 41.7327 45.3344 36.5064 45.3344V45.3344ZM55.1228 21.055C55.1228 22.9169 53.5968 24.4039 51.7148 24.4039C49.8201 24.4039 48.3069 22.9044 48.3069 21.055C48.3069 19.2056 49.8329 17.7061 51.7148 17.7061C53.5968 17.7061 55.1228 19.2056 55.1228 21.055ZM64.7997 24.4539C64.5835 19.9679 63.5408 15.9942 60.1965 12.7203C56.8649 9.44639 52.8211 8.42173 48.2561 8.19681C43.5511 7.9344 29.4489 7.9344 24.7439 8.19681C20.1916 8.40924 16.1479 9.43389 12.8035 12.7078C9.45917 15.9817 8.42917 19.9554 8.20028 24.4414C7.93324 29.0648 7.93324 42.9227 8.20028 47.5461C8.41645 52.0321 9.45917 56.0058 12.8035 59.2797C16.1479 62.5536 20.1789 63.5783 24.7439 63.8032C29.4489 64.0656 43.5511 64.0656 48.2561 63.8032C52.8211 63.5908 56.8649 62.5661 60.1965 59.2797C63.5281 56.0058 64.5708 52.0321 64.7997 47.5461C65.0668 42.9227 65.0668 29.0773 64.7997 24.4539V24.4539ZM58.7214 52.507C57.7296 54.9562 55.8094 56.843 53.3044 57.8302C49.5531 59.2922 40.6518 58.9548 36.5064 58.9548C32.3609 58.9548 23.4469 59.2797 19.7084 57.8302C17.216 56.8555 15.2959 54.9686 14.2913 52.507C12.8035 48.8207 13.1468 40.0736 13.1468 36C13.1468 31.9264 12.8162 23.1668 14.2913 19.493C15.2832 17.0438 17.2033 15.157 19.7084 14.1698C23.4596 12.7078 32.3609 13.0452 36.5064 13.0452C40.6518 13.0452 49.5658 12.7203 53.3044 14.1698C55.7967 15.1445 57.7168 17.0314 58.7214 19.493C60.2092 23.1793 59.8659 31.9264 59.8659 36C59.8659 40.0736 60.2092 48.8332 58.7214 52.507Z" fill="black" />
            </motion.svg>

          </div>

        </ContainerPhoto >

      </HeroBox>

    </section>
  )
}



const HeroBox = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;

  
//box 
  .hero-box_text{
    width: 50%;
    height: 86%;
    margin-left: 2rem;
    /* position: relative; */
    
    svg{
      z-index: 0;
      position: absolute;
      top: 18%;
      left: 50%;
    }
   
    h1{
      /* z-index: 2; */
      font-family: 'Fira Sans', sans-serif;

      font-size: 5rem;
      margin-bottom: 1rem;
    }
    p{
      text-align: start;
        width: 580px;      
        height: 154px;
      letter-spacing: 2px;
      margin-bottom: 2.9rem;
    }
    .imagenes{

      width: 90%;

      img{
        margin-left: 0.2rem;
      }
    }
  }
  .hero-box_photo{
  
   
   
    .foto{
      
    }
    img{
      height: 78%;
    }
  }
`;

const ContainerPhoto = styled.div`

  display: flex;
  flex-direction: column;
 
  align-items: center;
  justify-content: center;
  width: 50%;
    margin-left: 2.5rem;
    height: 100%;
  .iconsvgSociall {
    height: 40%;
    svg{
      margin-left: 1rem;
    }
  }

  .foto{
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
  }
`

const Button = styled(Link)`
  cursor: pointer;
  color: black;
  text-decoration: none;
position: absolute;
left: 46%;
    top: 77%;
padding: 19px 22px;
  transition: all .2s ease;
  &:before{

    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 1rem;
    background: #ffb422;
    width: 100px;
    height: 56px;
    transition: all .3s ease;
  }
  span{
    font-family: 'Fira Sans', sans-serif;
    font-weight: 900;
    position: relative;
    font-size: 1.3rem;
    line-height: 18px;
  
    letter-spacing: .15em;
    text-transform: uppercase;
    vertical-align: middle;
    svg{
      
      position: relative;
      top: 0;
      left: 100%;
      margin-left: 10px;
      font-size: 2rem;
      /* stroke-linecap: round;
      stroke-linejoin: round; */
      stroke: black;
      fill:black;
      stroke-width: 2;
      transform: translateX(-5px);
      transition: all .3s ease;
       
    }
  }
    
  &:hover{

    &:before{

      width: 100%;
      background: rgba(#ffb422,1);
      svg{
        transform: translateX(0)}
    }
  &:active{
    transform: scale(.96); }
  }

`

export default Hero