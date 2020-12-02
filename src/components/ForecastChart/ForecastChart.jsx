import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ForecastChart = ({ data }) => {
  return (
    <ResponsiveContainer
      data-testid={"forecastChart-container"}
      height={250}
      width={"95%"}
    >
      <LineChart
        margin={{ top: 20, bottom: 20, left: 50, right: 50 }}
        data={data}
      >
        <XAxis dataKey="dayHour"></XAxis>
        <YAxis></YAxis>
        <CartesianGrid></CartesianGrid>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Line type="monotone" dataKey="max" stroke="#FF0000"></Line>
        <Line type="monotone" dataKey="min" stroke="#000FFF"></Line>
      </LineChart>
    </ResponsiveContainer>
  );
};

ForecastChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dayHour: PropTypes.string.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ForecastChart;
