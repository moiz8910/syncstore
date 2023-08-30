// VideoCallInterface.jsx

import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import VideoCallRoom from "./VideoCallRoom";
import ConnectedUsersList from "./ConnectedUsersList";
import InvitationModal from "./InvitationModal";
import VideoCallControls from "./VideoCallControls";

const VideoCallInterface = ({ currentUser, roomId }) => {
  const [socket, setSocket] = useState(null);
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [showInvitationModal, setShowInvitationModal] = useState(false);

  useEffect(() => {
    // Initialize the WebSocket connection
    const newSocket = socketIOClient("http://localhost:5000");
    setSocket(newSocket);

    // Handle WebSocket events here
    newSocket.on("connect", () => {
      console.log("WebSocket connected!");
      // Join the video call room after connecting
      newSocket.emit("joinRoom", { roomId, userId: currentUser.id });
    });

    newSocket.on("userJoined", (userId) => {
      // Update the list of connected users when someone joins the room
      setConnectedUsers((prevUsers) => [...prevUsers, userId]);
    });

    newSocket.on("userLeft", (userId) => {
      // Update the list of connected users when someone leaves the room
      setConnectedUsers((prevUsers) => prevUsers.filter((id) => id !== userId));
    });

    // Cleanup WebSocket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, [roomId, currentUser]);

  // Function to handle sending video call invitations
  const sendInvitation = (recipientUserId) => {
    // Implement sending video call invitation to the recipient user
    // Show the InvitationModal to indicate the invitation status
  };

  // Function to handle accepting/rejecting video call invitations
  const handleInvitationResponse = (response, senderUserId) => {
    // Implement handling the recipient's response to the invitation
    // Accept or reject the invitation based on the response
  };

  // Function to end the video call and disconnect from the room
  const endVideoCall = () => {
    // Implement ending the video call and disconnecting from the room
  };

  return (
    <div>
      <h2>Video Call Interface</h2>
      <VideoCallRoom roomId={roomId} currentUser={currentUser} />
      <ConnectedUsersList users={connectedUsers} />
      <VideoCallControls
        onInvite={sendInvitation}
        onEndCall={endVideoCall}
      />
      {showInvitationModal && (
        <InvitationModal
          onClose={() => setShowInvitationModal(false)}
          onRespond={handleInvitationResponse}
          // Pass the required props to the InvitationModal component
        />
      )}
    </div>
  );
};

export default VideoCallInterface;
