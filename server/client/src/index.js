import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import "./css/w3.css"
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from "redux"
import reducers from "./reducer"
import reduxThunk from 'redux-thunk'
const store=createStore(reducers,{
    auth: {
        authenticated: {auth:localStorage.getItem("token"),userName:localStorage.getItem("user"),
      userID:localStorage.getItem("userID")
    }
    }
},applyMiddleware(reduxThunk))

ReactDOM.render(
<Provider store={store}><App/></Provider>,
 document.getElementById('root'));



