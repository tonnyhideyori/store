import React,{Component} from "react"
import * as actions from "../../actions"
import {connect} from "react-redux"

class Cart extends Component{

   renderContent(){
            let item=(this.props.CART).map(product=>{
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
   renderGrandTotal(){
       let total=(this.props.CART).map(item=>item.quantity*item.price).reduce((a,b)=>a+b,0)
       
       return <div style={{textAlign:"right"}}><h4><em><i>grand Total</i> <b>:</b> </em><strong className="w3-text-teal">{total}</strong></h4></div>
   }

    render(){
        console.log(this.props.CART)
        return (<div>
            <table className="w3-table-all">
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
        </div>)
    }

}
function mapStateToProps(state){
    return{CART:state.cart}
}
export default connect(mapStateToProps,actions) (Cart)