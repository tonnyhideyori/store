import {
    combineReducers
} from 'redux'
import authReducer from './authReducer'
import prodReducer from "./prodReducer"
import editReducer from "./editReducer"
import {
    reducer as formReducer
} from "redux-form"

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    prod: prodReducer,
    edit: editReducer
})