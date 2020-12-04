import convertUnits from "convert-units";

export const toCelsius = (temp) => +(convertUnits(temp).from('K').to('C').toFixed(0))


export const getCountryNameByCountryCode = (cities, countryCode) => (
  cities.filter(c => c.countryCode === countryCode)[0].country
)