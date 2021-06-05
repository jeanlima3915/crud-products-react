import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import axios from 'axios'

import styled from 'styled-components'

import Header from '../partials/Header'


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))


const FormRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 30px;
  margin: 0 auto;
  box-shadow: 0 0 10px gray;
  border-radius: 10px;
`

const Title = styled.h1`
  text-align: center;
  margin: 20px 0 30px 0;
`

const Register = () => {

  const { id } = useParams()

  const classes = useStyles()

  const history = useHistory()

  const [form, setForm] = useState({
    name: '',
    brand: '',
    cost: '',
    avaliable: false,
  })

  useEffect(() => {
    axios.get(`https://jeanlimadev-api-rest-mongodb.herokuapp.com/api/products/list/${id}`)
    .then(response => {
      const data = response.data[0]
      setForm({
        name: data.name,
        brand: data.brand,
        cost: data.cost,
        avaliable: data.avaliable,
      })
    })
  }, [])

  const handleInputChange = e => {
    const { name, value, checked } = e.target

    setForm({
      ...form,
      [name]: value,
      avaliable: checked
    })
  }

  const handleRegisterButton = (e) => {
    axios.put(`https://jeanlimadev-api-rest-mongodb.herokuapp.com/api/products/${id}`, form)
      .then((response) => {
        if (response.status === 200) {
          alert(`Produto ${form.name} ${form.brand} alterado com sucesso!`)
        }
      })
      .then(() => {
        history.push('/list')
      })
  }

  return (
    <>
      <Header />

      <Title>Cadastro de Produtos</Title>

      <FormRegister className={classes.root}>

        <TextField
          label="Descrição"
          name="name"
          variant="outlined"
          value={form.name}
          onChange={handleInputChange}
        />

        <TextField
          variant="outlined"          
          label="Marca"
          name="brand"
          value={form.brand}
          onChange={handleInputChange}
        />

        <TextField
          variant="outlined"
          type="number"       
          label="Custo"
          name="cost"
          value={form.cost}
          onChange={handleInputChange}
        />

        <FormControlLabel
          label="Disponível em estoque"
          control= {
            <Checkbox
            checked={form.avaliable}
            onChange={handleInputChange}
            name="avaliable"
            color="primary"
          />
          }
        />

      <Button color="primary" variant="contained" onClick={handleRegisterButton}>Salvar</Button>
        
      </FormRegister>

    </>
  )
}

export default Register