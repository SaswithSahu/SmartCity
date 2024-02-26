// import {Link} from "react-router-dom"
import "./index.css"
const DashboardHeader =() =>(
    (
        <nav className="nav-header">
          <div className="nav-content">
            <div className="nav-bar-large-container">
               Your LOgo
              <ul className="nav-menu">
              <a href = "/user-dashboard" className="nav-menu-item">
                    Home
                </a>
                <a href = "user-complaints" className="nav-menu-item">
                    MyComplaints
                </a>
              </ul>
              <button
                type="button"
                className="logout-desktop-btn"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      )

)

export default DashboardHeader