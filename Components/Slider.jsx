import React from 'react'
import  styled  from 'styled-components'
const Slider = () => {
  return (
    <Content>
      <h1>Proyectos</h1>
      {/* <SplideSlide>
                <Card>
                  <Link to={"/recipe-example/" + recipes.id}>
                  
                  <p>{recipes.title}</p>
                  <img src={recipes.image} alt="" />
                  <Gradient/>
                  
                  </Link>
                </Card>
              </SplideSlide> */}

    </Content>
  )
}

const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr ;
  
grid-template-areas:"logo logo nav";

`


export default Slider