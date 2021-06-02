import React from 'react'
import styled from 'styled-components'

import Header from '../partials/Header'

const Title = styled.h1`
  text-align: center;
  margin: 20px 0 30px 0;
`

const Home = () => {

  return (
    <>
      <Header />
      <Title>Página Inicial</Title>
    </>
  )
}

export default Home