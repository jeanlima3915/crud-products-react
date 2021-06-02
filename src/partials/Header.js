import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core'

import { useHistory } from 'react-router-dom'

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ListIcon from '@material-ui/icons/List';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))


const Header = () => {

  const classes = useStyles()
  const history = useHistory()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = route => {
    history.push(route)
    handleToggleMenu()
  }

  return (
    <>
      <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => handleToggleMenu()}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                CRUD Produtos React
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>

            <ListItem button onClick={() => handleMenuClick('/')}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText>Página Inicial</ListItemText>
              </ListItem>

              <ListItem button onClick={() => handleMenuClick('/register')}>
                <ListItemIcon>
                  <AddCircleIcon />
                </ListItemIcon>
                <ListItemText>Cadastro de Produtos</ListItemText>
              </ListItem>

              <ListItem button onClick={() => handleMenuClick('/list')}>
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText>Listagem de Produtos</ListItemText>
              </ListItem>

          </Drawer>
        </div>
      </>
  )
}

export default Header