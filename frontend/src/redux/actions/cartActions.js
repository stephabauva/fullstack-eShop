import * as actionsTypes from './constants/cartConstants';
import axios from 'axios' //helps make the ajax request , and allows compatibility with several browsers

export const addToCart = (id, qty) => async (dispatch, getState) => { //that's why we use thunk: to make asynchronous requests
 //destructure the data out of our axios request
 const { data } = await axios.get(`/api/products/${id}`);

 dispatch({
     type: actionsTypes.ADD_TO_CART,
     //create the paylaod
     payload: {
        product: data._id,
        name: data.name,
        imageUrl: data.imageUrl,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
 })
//sve to local storage
 localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));

}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: id,
    });
  
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  };
  