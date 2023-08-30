// videoCall.js

const express = require("express");
const router = express.Router();

// Import necessary controllers for video call feature
const {
  createRoom,
  joinRoom,
  getConnectedUsers,
  sendInvitation,
  respondToInvitation,
} = require("../controllers/videoCallController");

// API routes for video call feature
router.post("/create-room", createRoom);
router.post("/join-room", joinRoom);
router.get("/connected-users/:roomId", getConnectedUsers);
router.post("/send-invitation", sendInvitation);
router.post("/respond-to-invitation", respondToInvitation);

module.exports = router;
