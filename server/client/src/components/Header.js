import React,{Component} from "react"

class Header extends Component{
    render(){
        return(
            < nav className = "navbar navbar-inverse" >
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
                <a className = "navbar-brand"
            href = "#" > Duka App </a> </div> <ul className = "nav navbar-nav" >
                </ul> <div className="collapse navbar-collapse" id="myNavbar"><ul className = "nav navbar-nav navbar-right" >
                < li > < a href = "#" > < span className = "glyphicon glyphicon-shopping-cart" > </span> Create a shop </a > </li> <li> <a  href = "#" > < span className = "glyphicon glyphicon-log-in" > </span > Login as Manager </a >
                 </li> 
                  < li > 
                  < a href = "#" > 
                  < span className = "glyphicon glyphicon-log-in" > </span> Login as seller</a >
                      </li>
                 </ul> </div>
                 </div> 
                 </nav>
        )
    }
}

export default Header