import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

const Toast = ({ style, message }) => {
  const classes = useStyles()

  return (
      <Alert variant="filled" severity={style} className={classes.root}>
        {message}
      </Alert>
  )
}

export default Toast