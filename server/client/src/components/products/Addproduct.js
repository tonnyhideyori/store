import React,{Component} from 'react'
import {reduxForm,Field} from "redux-form"
import * as actions from "../../actions"
import {compose} from "redux"
import {connect} from "react-redux"
import  requireAuth from "../requireAuth"
import {Link} from "react-router-dom"

class Addproduct extends Component{
    onSubmit=(formProps)=>{
        this.props.addProduct(formProps,()=>{
            this.props.history.push("/home")
        })
    }
    render(){
        const {handleSubmit}=this.props
        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                 <div className="form-group">
                 <label><b>Product Name</b></label>
                  <Field
                    name="name"
                    type="text"
                    component="input"
                    autoComplete="none"
                    placeHolder="write the name of the product"
                    className = "form-control"
                  />
                 </div>
                 <div className="form-group">
                 <label><b>Category</b></label>
                  <Field
                    name="category"
                    type="text"
                    placeHolder="write the category of the product"
                    component="input"
                    autoComplete="none"
                    className = "form-control"
                  />
                 </div>
                 <div className="form-group">
                 <label><b>Quantity</b></label>
                  <Field
                    name="quantity"
                    type="number"
                    placeHolder="write the quantity of the product"
                    component="input"
                    autoComplete="none"
                    className = "form-control"
                  />
                 </div>
                 <div className="form-group">
                 <label><b>Price</b></label>
                  <Field
                    name="price"
                    type="number"
                    component="input"
                    placeHolder="write the price of the product"
                    autoComplete="none"
                    className="form-control"
                  />
                  {this.props.add.prodAddError}
                 </div>
                 
                 < button className = "w3-button w3-blue w3-xlarge  w3-left" > Add Product </button>
                 <Link to="/home">
                 <button
                 className = "w3-button w3-red w3-xlarge  w3-right">Back</button>
                 </Link>
            </form>
        )
    }
 
}
function mapStateToProps(state){
return{add:state.add}
}

export default compose(
    connect(mapStateToProps,actions),
     reduxForm({form:"addProduct"})
    ,requireAuth)(Addproduct)