import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ErrorInfo", errorInfo);
  }

  render() {
    console.info("render");
    return this.state.hasError ? (
      <h1>Error</h1>
    ) : (
      <div>{this.props.children}</div>
    );
  }
}

export default ErrorBoundary;
