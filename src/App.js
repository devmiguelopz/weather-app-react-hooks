import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'

const App = props => {
  return (
    <Router>
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
    </Router>
  )
}


export default App

