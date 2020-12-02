import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'
import Grid from '@material-ui/core/Grid'

const App = props => {
  return (
    <Grid container justify="center" direction="row">
      <Router>
        <Grid item xs={12} sm={11} md={10} lg={8}>
          <Switch>
            <Route exact path="/">
              <WelcomePage></WelcomePage>
            </Route>
            <Route exact path="/main">
              <MainPage></MainPage>
            </Route>
            <Route exact path="/city">
              <CityPage></CityPage>
            </Route>
            <Route>
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
        </Grid>
      </Router>
    </Grid>
  )
}


export default App

