import type { NextPage } from 'next'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <Container>
      My Next WebApp
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
  font-size:18px;
` 

export default Home