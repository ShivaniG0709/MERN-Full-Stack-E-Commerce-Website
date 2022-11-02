import { ActionTypes } from "../constants/wishlistConstants";
const INIT_STATE = {
  wishList: [],
};

export const wishlistReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_WISHLIST:
      //if item is already present in cart
      const itemIndex = state.wishList.findIndex(
        (item) => item._id === payload._id
      );
      if (itemIndex >= 0) {
        //   state.cartItems[itemIndex].qnty += 1;
        alert("item already present in the wishlist");
        return {
          ...state,
          wishList: [...state.wishList],
        };
      } else {
        const temp = { ...payload };
        return {
          ...state,
          wishList: [...state.wishList, temp],
        };
      }

    case ActionTypes.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishList: state.wishList.filter((item) => item._id !== payload._id),
      };

    default:
      return state;
  }
};
