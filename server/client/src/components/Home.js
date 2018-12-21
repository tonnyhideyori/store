import React,{Component} from "react"
import requireAuth from "./requireAuth"
import {compose} from "redux"
import {connect} from "react-redux"
import {products} from "../actions/index"
class Home extends Component{
componentDidMount() {
  this.props.products()
}
renderContent(){
    var i=-1;
     let u=(this.props.prod).map(product=>{
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
              <footer className="w3-container">
                < button className = "btn btn-primary"
                id = {product._id} >
                  <b>sell</b>
                </button>
                <br />
              </footer>
            </div>
          </div>;
    }
    )
    console.log(u)
    return u
    
}
   render(){
       return <div className="row">{this.renderContent()}</div>
       
   }
}
function mapStateToProps(state) {
    return {
        prod:state.prod
    }
}

export default compose(connect(mapStateToProps,{products}),requireAuth)(Home)