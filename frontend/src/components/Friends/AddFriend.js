import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFriend } from "../../redux/actions/user"; // Create this action

const AddFriend = () => {
  const [friendId, setFriendId] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFriend(friendId));
    setFriendId("");
  };

  return (
    <div>
      <h2>Add Friend</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={friendId}
          onChange={(e) => setFriendId(e.target.value)}
          placeholder="Friend's ID"
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriend;
