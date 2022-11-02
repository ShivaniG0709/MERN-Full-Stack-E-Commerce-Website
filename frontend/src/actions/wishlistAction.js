import { ActionTypes } from "../constants/wishlistConstants";
export const addToWishlist = (product) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.ADD_TO_WISHLIST,
    payload: product,
  });
  localStorage.setItem(
    "wishList",
    JSON.stringify(getState().wishlist.wishList)
  );
};

export const removeFromWishlist = (product) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.REMOVE_FROM_WISHLIST,
    payload: product,
  });
  localStorage.setItem(
    "wishList",
    JSON.stringify(getState().wishlist.wishList)
  );
};
