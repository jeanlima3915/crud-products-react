import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/Register'
import List from './pages/List'
import Edit from './pages/Edit'

import './App.css'


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/edit/:id">
          <Edit />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
