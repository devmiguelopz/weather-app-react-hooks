import { createContext, useCallback, useReducer } from "react";
import cities from "./data/cities.json";
const WeatherStateContext = createContext();
const WeatherDispatchContext = createContext();
const WeatherContext = ({children}) => {
  const initialValue = {
    allWeather: cities,
    allChartData: {},
    allForecastItemList: {},
  };

  const reducer = useCallback((state, action) => {
    switch (action.type) {
      case "SET_ALL_WEATHER":
        const weatherCity = action.payload;
        return { ...state, allWeather: [...weatherCity] };
      case "SET_CHART_DATA":
        const chartDataCity = action.payload;
        const newAllChartData = { ...state.allChartData, ...chartDataCity };
        return { ...state, allChartData: newAllChartData };
      case "SET_FORECAST_ITEM_LIST":
        const forecastItemListCity = action.payload;
        const newAllForecastItemListCity = {
          ...state.allForecastItemList,
          ...forecastItemListCity,
        };
        return { ...state, allForecastItemList: newAllForecastItemListCity };
      default:
        return state;
    }
  }, []);
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <WeatherDispatchContext.Provider value={dispatch}>
      <WeatherStateContext.Provider value={state}>
        {children}
      </WeatherStateContext.Provider>
    </WeatherDispatchContext.Provider>
  );
};

export { WeatherContext, WeatherStateContext, WeatherDispatchContext };
