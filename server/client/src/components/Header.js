import React,{Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

class Header extends Component{
    renderUser(){
            return this.props.authenticated.user.name
    }
    componentDidUpdate(){

    }
    renderLink(){
       if (!this.props.authenticated) {
           return (
                <div className = "collapse navbar-collapse"
                   id = "myNavbar" > 
                   < ul className = "nav navbar-nav navbar-right" >
                   <li> 
                       < Link to="/signup"> < span className = "glyphicon glyphicon-shopping-cart" > </span> Create a shop 
                       </Link>
                    </li> 
                   <li> 
                       <Link to="/signin" > < span className = "glyphicon glyphicon-log-in" > </span > Login 
                       </Link > 
                    </li>   
                   </ul>  
                   </div>
                   )
       }else{
           return(
               <div className = "collapse navbar-collapse"
                   id = "myNavbar" > 
                   < ul className = "nav navbar-nav navbar-right" >
                   <li> 
                       < Link to="/cart"> < span className = "glyphicon glyphicon-shopping-cart" > </span> cart 
                       </Link>
                    </li> 
                   <li> 
                       < Link to = "/" > < i className = "glyphicon glyphicon-user" > </i>  {this.renderUser()}
                       </Link>
                    </li> 
                   <li> 
                       < Link to = "/signout" > < i className = "glyphicon glyphicon-log-out" > </i> Logout
                       </Link> 
                    </li>   
                   </ul>  
                   </div>
           )
       }
    }
    render(){
        return(
            < nav className = "navbar navbar-inverse">
                <div className = "container-fluid" >
                <div className = "navbar-header" >
                < button
                type = "button"
                className = "navbar-toggle"
                data-toggle = "collapse"
                data-target = "#myNavbar">
                    <span className = "icon-bar"/>
                    <span className = "icon-bar"/>
                    <span className = "icon-bar"/>
                    </button>
                <Link to="/home" className = "navbar-brand"
             > Duka App </Link> </div> <ul className = "nav navbar-nav" >
                </ul> 
                {this.renderLink()}
                                 
            </div> 
             </nav>
        )
    }
}
function mapStateToProps(state){
    return{
        authenticated:state.auth
    }
}
export default connect(mapStateToProps)(Header)