import {
    combineReducers
} from 'redux'
import authReducer from './authReducer'
import prodReducer from "./prodReducer"
import editReducer from "./editReducer"
import cartReducer from './cartReducer';
import {
    reducer as formReducer
} from "redux-form"
import addReducer from './addReducer';


export default combineReducers({
    auth: authReducer,
    form: formReducer,
    prod: prodReducer,
    edit: editReducer,
    cart:cartReducer,
    add:addReducer
})