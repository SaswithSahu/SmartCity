import {Component} from "react"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import LoginForm from "./Login"
import RegistrationForm from "./Registration"
import UserDashboard from "./UserDashboard"
import Home from "./Home"
import ComplaintForm from "./ComplaintForm"
import MyComplaints from "./Mycomplaints"
import AdminDashboard from "./AdminDashboard"
class App extends Component{
  render(){
    return(
     <BrowserRouter>
     <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/login" element = {<LoginForm/>}/>
      <Route path = "/registration" element = {<RegistrationForm/>}/>
      <Route path = "/user-dashboard" element = {<UserDashboard/>}/>
      <Route path="/user-complaints" element = {<MyComplaints/>}/>
      <Route path = "/complaint-form" element = {<ComplaintForm/>}/>
      <Route path="/admin-dashboard" element = {<AdminDashboard/>}/>
     </Routes>
     </BrowserRouter>
   
    )
  }
}

export default App
