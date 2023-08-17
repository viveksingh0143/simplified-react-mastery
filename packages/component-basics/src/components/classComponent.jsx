import React from "react";

export default class ClassComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}! Welcome to Class based Component!</h1>;
  }
}