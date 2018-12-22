import React, {
    Component
} from "react"
import {
    reduxForm,
    Field
} from "redux-form"
import {
    compose
} from "redux"
import {
    connect
} from "react-redux"
import * as actions from "../../actions"

class Signin extends Component {
    onSubmit = (formProps) => {
        this.props.signin(formProps, () => {
            this.props.history.push("/home")
        })
    }
    render() {
        const {
            handleSubmit
        } = this.props
        return ( 
        <form onSubmit = {
                handleSubmit(this.onSubmit)
            } >

            < fieldset className = "form-group" >
            <label > Shop Name </label> <Field 
            name = "name"
            type = "text"
            component = "input"
            autoComplete = "none" 
            className = "form-control"
            />
            </fieldset> 
            < fieldset className = "form-group" >
            <label > Telephone </label> 
            <Field 
            name = "phone"
            type = "number"
            component = "input"
            autoComplete = "none" 
            className = "form-control"
            />
            </fieldset>

            < fieldset className = "form-group" >
            <label > Password </label> 
            <Field 
            name = "password"
            type = "password"
            component = "input"
            autoComplete = "none" 
            className = "form-control"
            />
            </fieldset> <div> {
                this.props.errorMessage
            } </div> <button className="btn btn-danger btn-lg"> signin </button> </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    }
}
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: "signin"
    })
)(Signin)