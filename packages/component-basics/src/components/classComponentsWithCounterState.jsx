import React from 'react';

export default class ClassComponentsWithCounterState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.increment()}>Click me</button>
      </div>
    );
  }
}