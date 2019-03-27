import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
        Home
      </Typography>
      <Button color="inherit" component={Link} to="/minesweeper">
        Minesweeper
      </Button>
    </Toolbar>
  </AppBar>
)

export default NavBar