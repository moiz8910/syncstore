// InvitationModal.jsx

import React, { useState } from "react";

const InvitationModal = ({ onClose, onRespond, senderUserId }) => {
  const [invitationResponse, setInvitationResponse] = useState(null);

  // Function to handle the user's response to the invitation
  const handleResponse = (response) => {
    setInvitationResponse(response);
    onRespond(response, senderUserId);
    onClose();
  };

  return (
    <div>
      <h3>Video Call Invitation</h3>
      <p>You have received a video call invitation from User {senderUserId}.</p>
      <div>
        <button onClick={() => handleResponse("accept")}>Accept</button>
        <button onClick={() => handleResponse("reject")}>Reject</button>
      </div>
    </div>
  );
};

export default InvitationModal;
