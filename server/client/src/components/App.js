import React,{Component} from "react"
import Landing from "./Landing"
import Header from  "./Header"
import Home from "./Home"
import {connect} from "react-redux"
import * as actions from "../actions"
import {BrowserRouter,Route} from "react-router-dom"
import Signup from "./auth/Signup"
import Signout from "./auth/Signout"
import Signin from "./auth/Signin"
import Addproduct from "../components/products/Addproduct"
import Editproduct from "./products/Editproduct";
class App extends Component{
    
render(){
    return (
        < div className = "container" >
         <BrowserRouter>
         <div>
            <Header/>
            <Route exact path="/signup"component={Signup}/>
             <Route exact path="/" component={Landing}/>
             <Route exact path="/home" component={Home}/>
             <Route exact path="/signout" component={Signout}/>
             <Route exact path="/signin" component={Signin}/>
             <Route exact path='/addproduct' component={Addproduct}/>
             <Route exact path="/editproduct" component={Editproduct}/>
             </div>
         </BrowserRouter>
         </div>
            
    )  
}
}

export default connect(null,actions)(App)