import './App.css';
import Welcome from './components/welcome';
import Greeting from './components/greeting';
import Notification from './components/notification';
import UserGreeting from './components/userGreeting';


function App() {
  return (
    <div className="App">
      {/* <Greeting isLoggedIn={true} />
      <Notification hasNotifications={true} />
      <UserGreeting isAdmin={true} isLoggedIn={true} /> */}
      <Welcome name="Vivek" />
      <p>Have a great day!</p>
    </div>
  );
}

export default App;
