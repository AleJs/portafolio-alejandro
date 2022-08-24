import styled from 'styled-components'
import './App.css'
import Hero from '../Components/Hero'
import Slider from '../Components/Slider'
import Navbar from './../Components/Navbar';

function App() {

  return (
    <Container className="App">
      <Navbar/>
      <Hero/>
      {/* <Slider/> */}
    </Container>
  )
}

const Container = styled.section`

margin: 0 auto;
height: 793px;
max-width: 1440px;
padding: 2rem;
margin-top: 2rem;
background-color: #EEEAE9;
/* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset, rgb(38, 57, 77) 0px 20px 30px -10px;; */
border-radius: 1rem;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; 
`;

export default App
