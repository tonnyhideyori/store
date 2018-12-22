import React,{Component} from 'react'
import {reduxForm,Field} from "redux-form"
import * as actions from "../../actions"
import {compose} from "redux"
import {connect} from "react-redux"
import  requireAuth from "../requireAuth"

class Editproduct extends Component{
    onSubmit=(formProps)=>{
        this.props.editProduct(formProps,()=>{
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
                    className = "form-control"
                  />
                 </div>
                 <div className="form-group">
                 <label><b>Category</b></label>
                  <Field
                    name="category"
                    type="text"
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
                    autoComplete="none"
                    className="form-control"
                  />
                 </div>
                 <button className="btn btn-primary">Add Product</button>
                 
            </form>
        )
    }

}


export default compose(
    connect(null,actions),
     reduxForm({form:"editProduct"})
    ,requireAuth)(Editproduct)