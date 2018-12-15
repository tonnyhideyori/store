import axios from "axios"
import {FETCH_USER,AUTH_USER} from "./types"
export const fetchUser=()=>{
    return async function(dispatch){
      const res=await  axios.get('./api/me_manager')
      dispatch({type:FETCH_USER,payload:res.data})
    
    }
}
export const signup=(formProps)=>
   {return async function(dispatch){
   await axios.post("http://localhost:4500/api/manager/registration", formProps)
 } }
