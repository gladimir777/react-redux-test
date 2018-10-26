import {
  FETCHING_PRODUCT,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART
} from "./types";

const defaultState = {
  products: [],
  cart: []
};

const productReducer = (state = defaultState, action) => {
  //console.log(action.payload);y
  switch (action.type) {
    case FETCHING_PRODUCT:
      return { ...state, products: action.payload };

    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          ...state.products.filter(prod => prod.id === action.payload)
        ]
      };
    case REMOVE_PRODUCT_FROM_CART: {
      let newCart = [...state.cart];
      return {
        ...state,
        cart: newCart.filter(
          (product, index) => index !== parseInt(action.payload)
        )
      };
    }

    default:
      return state;
  }
};

export default productReducer;
