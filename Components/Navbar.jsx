import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const Navbar = () => {
  return (
    
    <Bar>
    <div className='email'>
      <FiMail viewBox="0 -1 24 24"/> <h1>    Alejscript@gmail.com</h1>
    </div>
    
    <div className="title">

      <h1>Developer guy</h1>
    </div>
   
    <motion.div
            whileHover={{
              scale: 1.06,
              rotate:[0,5,-5,0],
              transition: { duration: 0.52 },
            }}
            whileTap={{ scale: 0.9 }}
            className="cv"
          >
            <a href="https://cv-ale24.herokuapp.com/pdf">CV</a>
          </motion.div>
  </Bar>
  )
}
const Bar = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */

  .email{
    margin-left: 1rem;
    display: flex;
    h1{

      
      margin-left: 1rem;
      text-align: center;
    }
    svg{
      
      width: 100%;
height: 100%;
      font-size:2rem ;
    }

  }
  .title{
    h1{
      font-family: 'Fira Sans', sans-serif;
      font-weight: 500;
    font-size: 2.3rem;
    }

  }
  .cv{
    text-align: right;
    width:280.828px;
    font-weight: 500;
    font-size: 2rem;
    margin-right: 1rem;
    a{
        color: black;
        text-decoration: none;
    }
  }
  

`


export default Navbar