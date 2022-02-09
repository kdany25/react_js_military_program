import React from "react";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PatientList from "./Pages/PatientList/Patientlist";
import Patient from "./Pages/Patient/PatientPro";
import NewP from "./Pages/NewPatient/NewPatient";
import ContactUs from "./Pages/ContactUs/Contact";
import Houses from "./Pages/House/House";
import NewHouse from "./Pages/NewHouse/NewHouse";
import HousePro from "./Pages/UpdateHouse/HousePro";
import Login from "./Pages/Login/Login";
function App() {
  return (
    // <Router>
    //   <Topbar />
    //   <div className="container">
    //     <Sidebar />
    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route exact path="/patients">
    //         <PatientList />
    //       </Route>
    //       <Route path="/user/:userId">
    //         <Patient />
    //       </Route>
    //       <Route path="/house/:Id">
    //         <HousePro/>
    //       </Route>
    //       <Route path="/new">
    //         <NewP />
    //       </Route>
    //       <Route path="/houses">
    //         <Houses />
    //       </Route>
    //       <Route path="/newHouse">
    //         <NewHouse />
    //       </Route>
    //       <Route path="/contact">
    //         <ContactUs />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <Login />
  );
}

export default App;
