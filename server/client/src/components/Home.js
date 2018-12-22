import React,{Component} from "react"
import requireAuth from "./requireAuth"
import {compose} from "redux"
import {connect} from "react-redux"
import {products} from "../actions/index"
import {Link} from "react-router-dom"
class Home extends Component{
componentDidMount() {
  this.props.products()
}
renderContent(){
     let product=(this.props.prod).map(product=>{
         return <div className="col-sm-4" key={product._id}>
            <div className="w3-card-4" style={{ marginRight: "2px", marginBottom: "10px" }} key={product._id}>
              <header className="w3-container w3-red">
                <span>
                  <h5>{product.name}</h5>
                </span>
              </header>
              <div className="w3-container w3-khaki">
                <p>Category:{product.category}</p>
                <p>Qunatity remained:{product.quantity}</p>
                <p>
                  Price:<b>{product.price}</b>
                </p>
              </div>
              <footer className="w3-container w3-orange w3-centered">
                < button className = "w3-button w3-green w3-xlarge w3-left"
                id = {product._id} >
                  <b>Sell</b>
                </button>
                <Link to="/editproduct"> <button className = "w3-button w3-red w3-xlarge  w3-right"
                id = {product._id} >
                  <b>edit</b>
                </button>
                </Link>
                <br />
              </footer>
            </div>
          </div>;
    }
    )
    console.log(product)
    return product
    
}
   render(){
       return <div className="row">{this.renderContent()}
         <Link to="/addproduct"><button className="w3-button w3-circle w3-black w3-xxxlarge" style={{ position: "fixed", bottom: "5px", right:"1px"}}><b>+</b></button></Link>
       </div>
       
   }
}
function mapStateToProps(state) {
    return {
        prod:state.prod
    }
}

export default compose(connect(mapStateToProps,{products}),requireAuth)(Home)