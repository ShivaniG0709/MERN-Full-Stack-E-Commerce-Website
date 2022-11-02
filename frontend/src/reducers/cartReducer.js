import { ActionTypes } from "../constants/cartConstants";
const INIT_STATE = {
  cartItems: [],
  shippingInfo: {},
};

export const cartReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      //if item is already present in cart
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qnty += 1;
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      } else {
        const temp = { ...payload, qnty: 1 };
        return {
          ...state,
          cartItems: [...state.cartItems, temp],
        };
      }
    // return {
    //   ...state,
    //   cartItems: [...state.cartItems, payload],
    // };
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== payload._id),
      };
    //decrease quantity
    case ActionTypes.REMOVE_ONE:
      const itemIndex_dec = state.cartItems.findIndex(
        (item) => item._id === payload._id
      );

      if (state.cartItems[itemIndex_dec].qnty >= 1) {
        const dltItems = (state.cartItems[itemIndex_dec].qnty -= 1);
        // console.log([...state.cartItems, dltItems]);
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      } else if (state.cartItems[itemIndex_dec].qnty === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item._id !== payload._id),
        };
      }

    case ActionTypes.SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: payload,
      };

    default:
      return state;
  }
};
