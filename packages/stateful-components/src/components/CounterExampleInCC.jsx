import React, { Component } from 'react';

class CounterExampleInCC extends Component {
  // Initialize the state with a 'count' property set to 0
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Method to increment the count
  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  // Render the component
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button type="button" className="rounded bg-red-500 px-2 py-2 text-xs font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default CounterExampleInCC;