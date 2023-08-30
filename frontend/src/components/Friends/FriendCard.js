import React from "react";

const FriendCard = ({ friendId }) => {
  // Fetch friend details using friendId (e.g., API call)

  return (
    <div>
      {/* Display friend's information */}
      <p>Friend ID: {friendId}</p>
      {/* Additional friend information */}
      {/* Remove friend button */}
      <button>Remove Friend</button>
    </div>
  );
};

export default FriendCard;
