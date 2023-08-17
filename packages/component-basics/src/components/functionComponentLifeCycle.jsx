import React, { useState, useEffect } from 'react';

function FunctionComponentLifeCycle(props) {
  const [user, setUser] = useState(null);

  // Equivalent to componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log('Component has been mounted or updated');

    // Simulate an API call to fetch user data
    setTimeout(() => {
      setUser('Vivek');
    }, 5000);

    return () => {
      console.log('Component will be unmounted'); // Equivalent to componentWillUnmount
    };
  }, []); // The empty array makes this effect run only on mount and unmount

  // Equivalent to componentDidUpdate
  useEffect(() => {
    if (!user) return;
    console.log('User Updated');
  }, [user]);
  // This effect run only when user updated

  return (
    <div>
      <h1>User Profile</h1>
      {user ? <p>Welcome, {user}!</p> : <p>Loading...</p>}
    </div>
  );
}

export default FunctionComponentLifeCycle;
