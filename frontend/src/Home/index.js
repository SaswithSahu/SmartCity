import { Component } from "react";
import "./index.css"
class Home extends Component{
    render(){
        return(
            <div className="home-container">
                <div className="home-page-buttons-container">
                    <a href="registration"><button className="register-button">Register</button></a>
                    <a href = "login">
                    <button className="login-button">Login</button>
                    </a>
                </div>
                <h1 className="home-page-content">
                    Enough About Smart App's, Let's talk<br/> about Smart Cities
                </h1>
            </div>
        )
    }
}

export default Home