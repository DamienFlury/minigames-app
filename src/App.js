import React from 'react'
import { 
  MuiThemeProvider, 
  CssBaseline, 
  createMuiTheme } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Minesweeper from './components/minesweeper/Minesweeper'
import NavBar from './NavBar'
import { blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    fontFamily: 'montserrat',
    useNextVariants: true
  }
})

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/minesweeper" component={Minesweeper} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}


export default App
