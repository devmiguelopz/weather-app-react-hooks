import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const errorBoundaryComponent = {
  title: "ErrorBoundary",
  component: ErrorBoundary,
};
export default errorBoundaryComponent;

export const ErrorBoundaryWithExample = () => (
  <ErrorBoundary>
    <h1>{(undefined).test}</h1>
  </ErrorBoundary>
);

export const ErrorBoundaryWithoutErrorExample = () => (
  <ErrorBoundary>
    <h1>Success!!!!</h1>
  </ErrorBoundary>
);
