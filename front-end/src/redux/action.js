import {
  FETCHING_PRODUCT,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART
} from "./types";

const fetchProduct = () => dispatch => {
  fetch("http://localhost:3001/product")
    .then(Response => Response.json())
    .then(products =>
      dispatch({
        type: FETCHING_PRODUCT,
        payload: products
      })
    );
};

const addProductToCart = id => dispatch => {
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: id
  });
};

const removeProductFromCart = index => dispatch => {
  dispatch({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: index
  });
};

export { fetchProduct, addProductToCart, removeProductFromCart };
