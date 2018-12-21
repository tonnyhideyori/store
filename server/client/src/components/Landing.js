import React,{Component} from "react"

class  Landing extends Component{
    render(){
        return(
            <div>
        <div style={{textAlign:"center"}}>
            <div className="w3-card-4">
            <header className="w3-container w3-red">
            <h1>WELCOME TO DUKA APP!</h1>
            </header>
            <div className="w3-container w3-pink">
            <h5>
                <p style={{textAlign:"left"}}>
                Duka app helps to manage inventory and sales in your small/mid-size shop.You want to try signUp if you don't have a free account or you can login as a manager or seller of the shop.
                </p>
            </h5>
            </div>
            
            </div>
        </div>
        </div>
        )

    }
}
export default Landing