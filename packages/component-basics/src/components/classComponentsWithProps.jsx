import React from 'react';

export default class ClassComponentsWithProps extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <h1>Hello, {this.props.name}! Your date of birth is {this.props.dob}</h1>;
  }
}

