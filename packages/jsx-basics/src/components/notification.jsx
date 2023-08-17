export default function Notification(props) {
  return (
    <div>
      {props.hasNotifications && <h1>You have new notifications!</h1>}
    </div>
  );
}