// import axios from "axios";
// import { server } from "../../server";

// // load user
// export const loadUser = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "LoadUserRequest",
//     });
//     const { data } = await axios.get(`${server}/user/getuser`, {
//       withCredentials: true,
//     });
//     dispatch({
//       type: "LoadUserSuccess",
//       payload: data.user,
//     });
//   } catch (error) {
//     dispatch({
//       type: "LoadUserFail",
//       payload: error.response.data.message,
//     });
//   }
// };

// // load seller
// export const loadSeller = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "LoadSellerRequest",
//     });
//     const { data } = await axios.get(`${server}/shop/getSeller`, {
//       withCredentials: true,
//     });
//     dispatch({
//       type: "LoadSellerSuccess",
//       payload: data.seller,
//     });
//   } catch (error) {
//     dispatch({
//       type: "LoadSellerFail",
//       payload: error.response.data.message,
//     });
//   }
// };

// // user update information
// export const updateUserInformation =
//   (name, email, phoneNumber, password) => async (dispatch) => {
//     try {
//       dispatch({
//         type: "updateUserInfoRequest",
//       });

//       const { data } = await axios.put(
//         `${server}/user/update-user-info`,
//         {
//           email,
//           password,
//           phoneNumber,
//           name,
//         },
//         {
//           withCredentials: true,
//           headers: {
//             "Access-Control-Allow-Credentials": true,
//           },
//         }
//       );

//       dispatch({
//         type: "updateUserInfoSuccess",
//         payload: data.user,
//       });
//     } catch (error) {
//       dispatch({
//         type: "updateUserInfoFailed",
//         payload: error.response.data.message,
//       });
//     }
//   };

// // update user address
// export const updatUserAddress =
//   (country, city, address1, address2, zipCode, addressType) =>
//   async (dispatch) => {
//     try {
//       dispatch({
//         type: "updateUserAddressRequest",
//       });

//       const { data } = await axios.put(
//         `${server}/user/update-user-addresses`,
//         {
//           country,
//           city,
//           address1,
//           address2,
//           zipCode,
//           addressType,
//         },
//         { withCredentials: true }
//       );

//       dispatch({
//         type: "updateUserAddressSuccess",
//         payload: {
//           successMessage: "User address updated succesfully!",
//           user: data.user,
//         },
//       });
//     } catch (error) {
//       dispatch({
//         type: "updateUserAddressFailed",
//         payload: error.response.data.message,
//       });
//     }
//   };

// // delete user address
// export const deleteUserAddress = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "deleteUserAddressRequest",
//     });

//     const { data } = await axios.delete(
//       `${server}/user/delete-user-address/${id}`,
//       { withCredentials: true }
//     );

//     dispatch({
//       type: "deleteUserAddressSuccess",
//       payload: {
//         successMessage: "User deleted successfully!",
//         user: data.user,
//       },
//     });
//   } catch (error) {
//     dispatch({
//       type: "deleteUserAddressFailed",
//       payload: error.response.data.message,
//     });
//   }
// };

// // get all users --- admin
// export const getAllUsers = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "getAllUsersRequest",
//     });

//     const { data } = await axios.get(`${server}/user/admin-all-users`, {
//       withCredentials: true,
//     });

//     dispatch({
//       type: "getAllUsersSuccess",
//       payload: data.users,
//     });
//   } catch (error) {
//     dispatch({
//       type: "getAllUsersFailed",
//       payload: error.response.data.message,
//     });
//   }
// };


import axios from "axios";
import { server } from "../../server";

// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};

// load seller
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadSellerRequest",
    });
    const { data } = await axios.get(`${server}/shop/getSeller`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadSellerSuccess",
      payload: data.seller,
    });
  } catch (error) {
    dispatch({
      type: "LoadSellerFail",
      payload: error.response.data.message,
    });
  }
};

// user update information
export const updateUserInformation =
  (name, email, phoneNumber, password) => async (dispatch) => {
    try {
      dispatch({
        type: "updateUserInfoRequest",
      });

      const { data } = await axios.put(
        `${server}/user/update-user-info`,
        {
          email,
          password,
          phoneNumber,
          name,
        },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": true,
          },
        }
      );

      dispatch({
        type: "updateUserInfoSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "updateUserInfoFailed",
        payload: error.response.data.message,
      });
    }
  };

// update user address
export const updatUserAddress =
  (country, city, address1, address2, zipCode, addressType) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "updateUserAddressRequest",
      });

      const { data } = await axios.put(
        `${server}/user/update-user-addresses`,
        {
          country,
          city,
          address1,
          address2,
          zipCode,
          addressType,
        },
        { withCredentials: true }
      );

      dispatch({
        type: "updateUserAddressSuccess",
        payload: {
          successMessage: "User address updated succesfully!",
          user: data.user,
        },
      });
    } catch (error) {
      dispatch({
        type: "updateUserAddressFailed",
        payload: error.response.data.message,
      });
    }
  };

// delete user address
export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteUserAddressRequest",
    });

    const { data } = await axios.delete(
      `${server}/user/delete-user-address/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: "deleteUserAddressSuccess",
      payload: {
        successMessage: "User deleted successfully!",
        user: data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: "deleteUserAddressFailed",
      payload: error.response.data.message,
    });
  }
};

// get all users --- admin
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllUsersRequest",
    });

    const { data } = await axios.get(`${server}/user/admin-all-users`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "getAllUsersFailed",
      payload: error.response.data.message,
    });
  }
};


export const addFriend = (friendId) => async (dispatch) => {
  try {
    dispatch({ type: "addFriendRequest" });

    const { data } = await axios.post(
      `${server}/friends/add-friend`,
      {
        friendId,
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

// You can also create actions to fetch the user's friend list
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




