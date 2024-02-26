import { Component } from "react";
//import DashboardHeader from "../Navbar";
import AdminDashboardHeader from "../DashboardHeaderAdmin";
import { FaDroplet } from "react-icons/fa6";
import { MdOutlineElectricBolt } from "react-icons/md";
import { GiNuclearWaste } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";



import "./index.css"

class AdminDashboard extends Component{
    render(){
        return(
            <div>
                <AdminDashboardHeader/>
                <h1 className="admin-dashboard-content">Hello Admin !</h1>
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
                            <div className="buttons-container">
                            <button className="assigned-button">Assign</button>
                            <button>Completed</button>
                            </div>
                            </div>
                        </li>
                        <li className="each-notification">
                            <MdOutlineElectricBolt className="notification-icon"/>
                            <div className="notification-data">
                            <h3>Waste</h3>
                            <div className="buttons-container">
                            <button className="assigned-button">Assign</button>
                            <button>Completed</button>
                            </div>
                            </div>
                        </li>
                        <li className="each-notification">
                            <GiNuclearWaste className="notification-icon"/>
                            <div className="notification-data">
                            <h3>Waste</h3>
                            <div className="buttons-container">
                            <button className="assigned-button">Assign</button>
                            <button>Completed</button>
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AdminDashboard