const express = require("express");
const router = express.Router();
const User = require('../model/friendship');
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Add a friend
router.post("/add-friend", catchAsyncErrors(async (req, res) => {
  const { userId, friendId } = req.body;

  try {
    // Update user's friend list
    await User.findByIdAndUpdate(userId, { $addToSet: { friends: friendId } });
    
    // Update friend's friend list
    await User.findByIdAndUpdate(friendId, { $addToSet: { friends: userId } });

    res.status(200).json({ message: 'Friend added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding friend' });
  }
}));

// Remove a friend
router.post("/remove-friend", catchAsyncErrors(async (req, res) => {
  const { userId, friendId } = req.body;

  try {
    // Update user's friend list
    await User.findByIdAndUpdate(userId, { $pull: { friends: friendId } });

    // Update friend's friend list
    await User.findByIdAndUpdate(friendId, { $pull: { friends: userId } });

    res.status(200).json({ message: 'Friend removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing friend' });
  }
}));
router.get("/get-friends-list/:userId", catchAsyncErrors(async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const user = await User.findById(userId).populate("friends", "name email");
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ friends: user.friends });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching friends list' });
    }
  }));

module.exports = router;
