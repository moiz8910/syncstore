import axios from "axios";
import { server } from "../../server";

// Add friend
export const addFriend = (friendId) => async (dispatch) => {
  try {
    dispatch({ type: "addFriendRequest" });

    const { data } = await axios.post(
      `${server}/friends/add-friend`,
      {
        friendId,
        userId: getState().user.user._id, // Replace this with the proper way to get the user's ID from your state
      },
      { withCredentials: true }
    );

    dispatch({
      type: "addFriendSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "addFriendFailed",
      payload: error.response.data.message,
    });
  }
};

// Remove friend
export const removeFriend = (friendId) => async (dispatch) => {
  try {
    dispatch({ type: "removeFriendRequest" });

    const { data } = await axios.post(
      `${server}/friends/remove-friend`,
      {
        friendId,
        userId: getState().user.user._id, // Replace this with the proper way to get the user's ID from your state
      },
      { withCredentials: true }
    );

    dispatch({
      type: "removeFriendSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "removeFriendFailed",
      payload: error.response.data.message,
    });
  }
};

// Fetch friend list
export const fetchFriendList = () => async (dispatch) => {
  try {
    dispatch({ type: "fetchFriendListRequest" });

    const { data } = await axios.get(`${server}/friends/get-friend-list`, {
      withCredentials: true,
    });

    dispatch({
      type: "fetchFriendListSuccess",
      payload: data.friends,
    });
  } catch (error) {
    dispatch({
      type: "fetchFriendListFailed",
      payload: error.response.data.message,
    });
  }
};
