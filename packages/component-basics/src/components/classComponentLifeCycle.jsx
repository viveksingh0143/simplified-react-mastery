import React, { Component } from 'react';

class ClassComponentLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    console.log('Constructor: Component is being constructed');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Updating state based on props');
    return null; // Returning null means no update to the state
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted');
    // Simulate an API call to fetch user data
    setTimeout(() => {
      this.setState({ user: 'Vivek' });
    }, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Deciding whether to update');
    return true; // Returning true means continue with the update
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component has been updated');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component will be unmounted');
  }

  render() {
    console.log('render: Rendering component');
    return (
      <div>
        <h1>User Profile</h1>
        {this.state.user ? <p>Welcome, {this.state.user}!</p> : <p>Loading...</p>}
      </div>
    );
  }
}

export default ClassComponentLifeCycle;
