import React from "react";
import { useSelector } from "react-redux";
import FriendCard from "./FriendCard"; // Create this component

const FriendList = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <h2>Friends List</h2>
      {user.friends.map((friendId) => (
        <FriendCard key={friendId} friendId={friendId} />
      ))}
    </div>
  );
};

export default FriendList;
