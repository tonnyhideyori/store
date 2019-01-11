import axios from "axios";
import {
  FETCH_USER,
  AUTH_USER,
  AUTH_ERROR,
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  EDIT_PRODUCT,
  EDIT_PRODUCT_ERROR,
  CART
} from "./types";

  axios.defaults.headers.common["x"] = localStorage.getItem("token")

axios.defaults.headers.post["Content-Type"] = "application/json";
export const fetchUser = () => {
  return async function (dispatch) {
    const res = await axios.get("/api/me_manager");
    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
  };
};
export const signup = (formProps, callback) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "/api/manager/registration",
        formProps
      );

      dispatch({
        type: AUTH_USER,
        payload: response.data
      });
      localStorage.setItem("full", JSON.stringify(response.data))
      localStorage.setItem("token", response.data.token);
      callback();
    } catch (e) {
      dispatch({
        type: AUTH_ERROR,
        payload: e.response.data
      });
    }
  };
};
export const signout = () => {
  localStorage.removeItem("full")
  localStorage.removeItem("token")
  return {
    type: AUTH_USER,
    payload: null
  };
};
export const signin = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post(
      "/api/auth/manager",
      formProps
    );
    //console.log(res.data);
    dispatch({
      type: AUTH_USER,
      payload: res.data
    });
    localStorage.setItem("full", JSON.stringify(res.data))
    localStorage.setItem("token", res.data.token);
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: e.response.data
    });
  }
};
export const products = () => async dispatch => {
  try {
    const res = await axios.get("/api/product");
    dispatch({
      type: FETCH_PRODUCT,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: FETCH_PRODUCT_ERROR,
      payload: e.response.data
    });
  }
};
export const addProduct = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post(
      "/api/product",
      formProps
    );
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    });
    callback();
  } catch (e) {
    dispatch({
      type: ADD_PRODUCT_ERROR,
      payload: e.response.data
    });
  }
};
export const editProduct = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.put(
      "/api/product/",
      formProps
    );
    dispatch({
      type: EDIT_PRODUCT,
      payload: res.data
    });
    callback();
  } catch (e) {
    dispatch({
      type: EDIT_PRODUCT_ERROR,
      payload: e.response.data
    });
  }
};
export const user = () => {
  if (localStorage.getItem("user") === null) {
    return "";
  }
  localStorage.getItem("user");
};

export const edit = data => dispatch => {
  dispatch({
    type: EDIT_PRODUCT,
    payload: data
  });
};
var item = [];
export const cart = data => dispatch => {
  let tocart = {
    id: data._id,
    name: data.name,
    price: data.price,
    quantity: 1
  }
  console.log(item.length)
  if (JSON.parse(localStorage.getItem("cart")) !== null) {
    item = JSON.parse(localStorage.getItem("cart"))
  }
  let filtered = item.filter(article => article.id === tocart.id)
  if (filtered.length !== 0) {
    let index = item.findIndex(ind => ind.id === tocart.id)
    item[index].quantity += 1
  } else {
    item.push(tocart);
  }

  dispatch({
    type: CART,
    payload: item
  });
  localStorage.setItem("cart", JSON.stringify(item))
};
export const empty = () => dispatch => {
  item = []
  dispatch({
    type: CART,
    payload: item
  })
  localStorage.removeItem("cart")
}
export const sell = (data, callback) => dispatch => {
  item = []
  dispatch({
    type: CART,
    payload: item
  })
  callback()
  axios.post("/api/sell", data)
  localStorage.removeItem("cart")
}