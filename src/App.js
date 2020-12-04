import React, { useState, useMemo, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'
import cities from "./data/cities.json";


const App = props => {
  const [allWeather, setAllWeather] = useState(cities);
  const [allChartData, setAllChartData] = useState({});
  const [allForecastItemList, setForecastItemList] = useState({});





  const onSetAllWeather = useCallback((weather) => setAllWeather(() => weather), [setAllWeather])
  const onSetChartData = useCallback((chartData) => setAllChartData(chartDataItem => ({ ...chartDataItem, ...chartData })), [setAllChartData])
  const onSetForecastItemList = useCallback((forecast) => setForecastItemList(forecastItem => ({ ...forecastItem, ...forecast })), [setForecastItemList])





  const actions = useMemo(() => (
    {
      onSetAllWeather,
      onSetChartData,
      onSetForecastItemList
    }
  ), [onSetAllWeather, onSetChartData, onSetForecastItemList])


  const data = useMemo(() => (
    {
      allWeather,
      allChartData,
      allForecastItemList,

    }
  ), [allWeather, allChartData, allForecastItemList])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage></WelcomePage>
        </Route>
        <Route exact path="/main">
          <MainPage data={data} actions={actions}></MainPage>
        </Route>
        <Route exact path="/city/:countryCode/:city">
          <CityPage data={data} actions={actions}></CityPage>
        </Route>
        <Route>
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
    </Router>
  )
}


export default App

