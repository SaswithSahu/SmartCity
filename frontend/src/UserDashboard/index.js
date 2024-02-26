
import { Component  } from "react";
import DashboardHeader from "../Navbar";

import "./index.css"

class UserDashboard extends Component{
    render(){
        return(
            <>
            <DashboardHeader/>
            <div className="user-dashboard-container">
                <h1 className="user-dashboard-content">Welcome to Smart City Application<br/> Raise your complaint here...</h1>
                <a href="complaint-form">
                <button className="register-">Register complaint</button>
                </a>
            </div>
            </>
            
        )
    }
}

export default UserDashboard