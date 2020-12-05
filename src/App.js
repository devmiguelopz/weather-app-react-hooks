import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'
import cities from "./data/cities.json";


const App = props => {
  const initialValue = {
    allWeather: cities,
    allChartData: {},
    allForecastItemList: {}
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_ALL_WEATHER':
        const weatherCity = action.payload
        return { ...state, allWeather: [...weatherCity] }
      case 'SET_CHART_DATA':
        const chartDataCity = action.payload
        const newAllChartData = { ...state.allChartData, ...chartDataCity }
        return { ...state, allChartData: newAllChartData }
      case 'SET_FORECAST_ITEM_LIST':
        const forecastItemListCity = action.payload
        const newAllForecastItemListCity = { ...state.allForecastItemList, ...forecastItemListCity }
        return { ...state, allForecastItemList: newAllForecastItemListCity }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage></WelcomePage>
        </Route>
        <Route exact path="/main">
          <MainPage data={state} actions={dispatch}></MainPage>
        </Route>
        <Route exact path="/city/:countryCode/:city">
          <CityPage data={state} actions={dispatch}></CityPage>
        </Route>
        <Route>
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
    </Router>
  )
}


export default App

