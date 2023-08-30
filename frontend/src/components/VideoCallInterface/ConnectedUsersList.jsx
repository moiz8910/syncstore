// ConnectedUsersList.jsx

import React from "react";

const ConnectedUsersList = ({ users }) => {
  return (
    <div>
      <h3>Connected Users:</h3>
      <ul>
        {users.map((userId) => (
          <li key={userId}>{userId}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConnectedUsersList;
