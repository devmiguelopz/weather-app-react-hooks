import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const errorBoundaryComponent = {
  title: "ErrorBoundary",
  component: ErrorBoundary,
};
export default errorBoundaryComponent;

const ComponentWithoutError = () => <h1>No error</h1>;

const prop = {};
const ComponentWithError = () => <h1>{prop.test.test}</h1>;

export const ErrorBoundaryWithError = () => (
  <ErrorBoundary>
    <ComponentWithError />
  </ErrorBoundary>
);

export const ErrorBoundaryWithoutError = () => (
  <ErrorBoundary>
    <ComponentWithoutError />
  </ErrorBoundary>
);
