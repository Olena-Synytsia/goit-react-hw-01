import FriendList from "./components/FriendList/FriendList";
import FriendListItem from "./components/FriendListItem/FriendListItem";
import Profile from "./components/Profile/Profile";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./components/Profile/UserData.json";
import "./App.css";

function App() {
  return (
    <div>
      <FriendList />
      <FriendListItem />
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <TransactionHistory />
    </div>
  );
}

export default App;
