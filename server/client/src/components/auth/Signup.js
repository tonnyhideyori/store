import React,{Component} from "react"
import {reduxForm,Field} from "redux-form"
import {compose} from "redux"
import {connect} from "react-redux"
import * as actions from "../../actions"

class Signup extends Component{
    onSubmit=(formProps)=>{
    this.props.signup(formProps,()=>{
        this.props.history.push("/home")
    })
    }
    render(){
        const {handleSubmit}=this.props
        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
               
                < fieldset className = "form-group" >
                    <label>Shop Name</label>
                    <Field
                    name="name"
                    type="text"
                    component="input"
                    autoComplete="none"
                    placeHolder="Write the name of the Shop"
                    className="form-control"
                    />
                </fieldset>
                < fieldset className = "form-group" >
                    <label>Your Name</label>
                    <Field
                    name="user"
                    type="text"
                    component="input"
                    autoComplete="none"
                    placeholder="your Name"
                    className="form-control"
                    />
                </fieldset>
                <fieldset>
                    <label>Telephone</label>
                    <Field
                    name="phone"
                    type="number"
                    component="input"
                    autoComplete= "none"
                    className="form-control"
                    />
                </fieldset>

                < fieldset className = "form-group" >
                    <label>Password</label>
                    <Field
                    name="password"
                    type="password"
                    component="input"
                    autoComplete = "none"
                    className="form-control"
                    />
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button className="btn btn-danger btn-lg">signUp</button>
            </form>
        )
    }
}
function mapStateToProps(state){
    return{errorMessage:state.auth.errorMessage}
}
export default compose(
    connect(mapStateToProps,actions),
reduxForm({
    form: "signup"
})
)(Signup)