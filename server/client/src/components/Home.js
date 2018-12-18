import React,{Component} from "react"
import requireAuth from "./requireAuth"
class Home extends Component{

   render(){
       return(<div>
           this is where product will be displayed
       </div>)
   }

}
export default requireAuth(Home)