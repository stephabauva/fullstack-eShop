import * as actionTypes from "../constants/cartConstants";

// const CART_INITIAL_STATE = {
//   cartItems: [],
// };

// export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    export const cartReducer = (state = cartItems, action) => {
    //the actions to dispatch:
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
        //get the item that we want to add to the cart
      const item = action.payload;

      //check if the item is already in the cart: compare its product id against the ids of those already in the cart 
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
            //from the old cart, create a new cart
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
          //add the new item to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
        //from the old cart, create a new cart by adding only the items different from the one in the payload
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
