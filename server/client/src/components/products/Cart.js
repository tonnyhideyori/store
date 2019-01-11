import React,{Component} from "react"
import * as actions from "../../actions"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {compose} from "redux"
import requireAuth from "../requireAuth";
class Cart extends Component{
renderContent(){
      if(this.props.CART===null){return;}
            else{let item=(this.props.CART).map(product=>{
                let total=product.price*product.quantity
               return <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    < td > 
                    {total}
                    </td>
                </tr>
            })
     
     return item  
    }
   }
   renderGrandTotal(){
       if (this.props.CART === null) {
           return <div style={{textAlign:"right"}}><h4><em><i>grand Total</i> <b>:</b> </em><strong className="w3-text-teal">0</strong></h4></div>;
       }
     else  {let total=(this.props.CART).map(item=>item.quantity*item.price).reduce((a,b)=>a+b,0)
       
       return <div style={{textAlign:"right"}}><h4><em><i>grand Total</i> <b>:</b> </em><strong className="w3-text-teal">{total}</strong></h4></div>}
   }

    render(){
        return (<div className="w3-responsive">
            <table className="w3-table-all w3-card-4">
                <thead >
                < tr className = "w3-pale-red" >
                    <th><b>Product</b></th>
                    <th><b>Quantity</b></th>
                    <th><b>Price</b></th>
                    <th><b>Total</b></th>
                </tr>
                </thead>
                <tbody>{this.renderContent()}</tbody>
                
            </table>
            {this.renderGrandTotal()}
        <div className="w3-bar">
                <Link to="/home"> <button className="w3-button w3-orange w3-round-large w3-margin">Back</button></Link>
                <button className="w3-button w3-red w3-round-large w3-margin" onClick={e=>this.props.empty()}>Empty Cart</button>
                <button className="w3-button w3-green w3-round-large w3-margin" onClick={e=>this.props.sell(this.props.CART,()=>{this.props.history.push("/home");})}>Sell</button>
        </div>
        </div>
        )
    }

}
function mapStateToProps(state){
    return{CART:state.cart}
}
export default compose(connect(mapStateToProps,actions),requireAuth) (Cart)