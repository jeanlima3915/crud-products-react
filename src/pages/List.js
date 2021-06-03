import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'

import axios from 'axios'

import Header from '../partials/Header'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'


const Title = styled.h1`
  text-align: center;
  margin: 20px 0 30px 0;
`

const ListProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`

const ListItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0 0 3px gray;
`

const Div = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 5px;
`

const Label = styled.label`
  font-size: 12px;
`


const List = () => {

  const history = useHistory()

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://jeanlima3915-api-rest-mongodb.herokuapp.com/api/products/list')
      .then((response) => {
        setProducts(response.data)
      })
  },[])

  const handleEditIconClick = route => {
    history.push(route)
  }

  const handleDeleteIconClick = async id => {
    const confirmation = window.confirm('Tem certeza que deseja excluir este produto?')

    if (confirmation === true) {
      await axios.delete(`https://jeanlima3915-api-rest-mongodb.herokuapp.com/api/products/${id}`)
      window.location.reload()
    }
  }

  return (
    <>
      <Header />
      <Title>Listagem de Produtos</Title>
      <ListProducts>
        {
          products.map(item => (
            <ListItem>

              <Div>
                <Label>Nome:</Label>
                {item.name}
              </Div>

              <Div>
                <Label>Marca:</Label>
                {item.brand}
              </Div>

              <Div>
                <Label>Custo:</Label>
                ${item.cost}
              </Div>

              <Div>
                <Label>Disponível:</Label>
                {item.avaliable === true ? 'Sim' : 'Não'}
              </Div>

              <EditIcon cursor="pointer" onClick={() => handleEditIconClick(`edit/${item._id}`)} />
              <DeleteIcon cursor="pointer" onClick={() => handleDeleteIconClick(item._id)} />

            </ListItem>
          ))
        }
      </ListProducts>
    </>
  )
}

export default List