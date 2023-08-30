// VideoCallControls.jsx

import React from "react";

const VideoCallControls = ({ onMuteToggle, onEndCall, onInvite }) => {
  return (
    <div>
      <button onClick={onMuteToggle}>Mute</button>
      <button onClick={onEndCall}>End Call</button>
      <button onClick={() => onInvite("recipientUserId")}>Invite</button>
    </div>
  );
};

export default VideoCallControls;
