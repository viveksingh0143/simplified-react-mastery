export default function Greeting(props) {
  return (
    <div>
      {props.isLoggedIn ? <h1>Welcome, Vivek!</h1> : <h1>Please log in.</h1>}
    </div>
  );
}