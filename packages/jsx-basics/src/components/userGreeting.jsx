export default function UserGreeting(props) {
  function renderGreeting() {
    if (props.isAdmin) {
      return <h1>Welcome, Admin!</h1>;
    } else if (props.isLoggedIn) {
      return <h1>Welcome, User!</h1>;
    } else {
      return <h1>Please log in.</h1>;
    }
  }

  return <div>{renderGreeting()}</div>;
}