// socket.js

const socketIo = require('socket.io');

// Assume you have a list of connected users and their respective rooms
const connectedUsers = new Map();

function handleWebSocket(server) {
  const io = socketIo(server);

  // WebSocket connection handling
  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Handle new user joining a room
    socket.on('joinRoom', ({ roomId, userId }) => {
      // Add the user to the room
      socket.join(roomId);
      connectedUsers.set(userId, roomId);

      // Notify the room about the new user's presence
      io.to(roomId).emit('userJoined', userId);
    });

    // Handle signaling for WebRTC
    socket.on('signal', ({ userId, signalData }) => {
      // Get the room for the user
      const roomId = connectedUsers.get(userId);
      if (roomId) {
        // Send the signaling data to other users in the room
        socket.to(roomId).emit('signal', { userId, signalData });
      }
    });

    // Handle user leaving a room
    socket.on('disconnect', () => {
      const userId = [...connectedUsers].find(([key, value]) => value === socket.id)?.[0];
      if (userId) {
        connectedUsers.delete(userId);
        // Notify the room about the user leaving
        io.to(socket.id).emit('userLeft', userId);
      }
    });
  });
}

module.exports = handleWebSocket;
