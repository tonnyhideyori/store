import axios from "axios"
import {
  FETCH_USER,
  AUTH_USER,
  AUTH_ERROR,
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR
} from "./types"
axios.defaults.baseURL="/api/*"
axios.defaults.headers.common['x']=localStorage.getItem("token")
axios.defaults.headers.post["Content-Type"]="application/json"
export const fetchUser = () => {
  return async function (dispatch) {
    const res = await axios.get('/api/me_manager')
    dispatch({
      type: FETCH_USER,
      payload: res.data
    })

  }
}
export const signup = (formProps, callback) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/api/manager/registration", formProps)
      dispatch({
        type: AUTH_USER,
        payload: response.data.token
      })
      localStorage.setItem("token", response.data.token)
      callback()
    } catch (e) {
      dispatch({
        type: AUTH_ERROR,
        payload: "email in use"
      })
    }
  }
}
export const signout = () => {
  localStorage.removeItem('token')
  return {
    type: AUTH_USER,
    payload: ''
  }
}
export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/manager", formProps)
    console.log(res)
    dispatch({
      type: AUTH_USER,
      payload: res.data
    })
    localStorage.setItem("token", res.data.token)
    localStorage.setItem("manager",res.data.manager)
    callback()
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: "invalid email or password"
    })
  }

}
export const products = () => async dispatch => {
  try {
    const res = await axios.get("/api/product")
    dispatch({
      type: FETCH_PRODUCT,
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: FETCH_PRODUCT_ERROR,
      payload: "No product in stored yet!! and new  product"
    })
  }
}
export const addProduct = (formProps, callback) => async (dispatch) => {
  try {
    const res = await axios.post("/api/product", formProps )
    dispatch({
      type: FETCH_PRODUCT,
      payload: res.data
    })
    callback()
  } catch (e) {
    dispatch({
      type:FETCH_PRODUCT_ERROR,
      payload: e
    })
  }
}