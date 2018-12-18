import axios from "axios"
import {
  FETCH_USER,
  AUTH_USER,
  AUTH_ERROR
} from "./types"
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
export const signin=(formProps,callback)=>async(dispatch)=>{
  try{
    const res=await axios.post("/api/auth/manager",formProps)
    dispatch({
      type:AUTH_USER,
      payload:res.data.token
    })
    localStorage.setItem("token",res.data.token)
    callback()
  }
  catch(e){
    dispatch({
      type:AUTH_ERROR,
      payload:"invalid email or password"
    })
  }
}