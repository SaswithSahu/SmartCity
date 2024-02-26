import { Component } from "react";
import DashboardHeader from "../Navbar";
import { FaDroplet } from "react-icons/fa6";
import { MdOutlineElectricBolt } from "react-icons/md";
import { GiNuclearWaste } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";


import "./index.css"

class MyComplaints extends Component{
    render(){
        return(
            <div>
                <DashboardHeader/>
                <div className="search-container">
                    <input type="text" placeholder="Search..." className="search-input"/>
                    <CiSearch className="search-icon"/>
                </div>
                <div className="notification-body">
                    <ul className="list-of-notification">
                        <li className="each-notification">
                            <FaDroplet className="notification-icon"/>
                            <div className="notification-data">
                            <h3>Waste</h3>
                            <p style={{"color":"green"}}>Completed</p>
                            </div>
                        </li>
                        <li className="each-notification">
                            <MdOutlineElectricBolt className="notification-icon"/>
                            <div className="notification-data">
                            <h3>Waste</h3>
                            <p style={{"color":"red"}}>Pending</p>
                            </div>
                        </li>
                        <li className="each-notification">
                            <GiNuclearWaste className="notification-icon"/>
                            <div className="notification-data">
                            <h3>Waste</h3>
                            <p style={{"color":"green"}}>Completed</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MyComplaints