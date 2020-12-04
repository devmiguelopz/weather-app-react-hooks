import { toCelsius } from "../library";

const getAllWeather = (data, cities) =>
  data.map(({ data: weather }, index) =>
    Object.assign(cities[index], {
      data: {
        temperature: toCelsius(weather.main.temp),
        state: weather.weather[0].main.toLowerCase(),
        humidity: weather.main.humidity,
        wind: weather.wind.speed,
      },
    })
  );

export default getAllWeather;
