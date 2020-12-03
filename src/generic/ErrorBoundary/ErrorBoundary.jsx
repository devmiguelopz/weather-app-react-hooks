import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  IsActive = () => {
    return this.state.active ? "Active" : "No active";
  };

  onClickHandler = () => {
    this.setState({ active: !this.state.active });
  };

  componentDidMount() {
    console.log("The component has been assembled");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Preview state:", prevState.active);
    console.log("New state:", this.state.active);
    console.log("The component has been updated");
  }

  componentWillUnmount() {
    console.log("The component has been dismount");
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickHandler}>Activar</button>
        <h1>
          ErrorBoundary {this.props.say} -{this.IsActive()}
        </h1>
      </div>
    );
  }
}

export default ErrorBoundary;
