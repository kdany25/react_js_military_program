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
import SignUp from "./Pages/SignUp/SignUp";
import RoadList from "./Pages/RoadsList/RoadList";
import Road from "./Pages/Road/RoadPro";
import NewRoad from "./Pages/newRoad/NewRoad";
import NewHealthplan from "./Pages/HealthPlan/NewHealthPlan";
import NewHousePlan from "./Pages/HousePlan/NewHousePlan";
import NewRoadPlan from "./Pages/RoadPlan/NewRoadPlan";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/patients">
              <PatientList />
            </Route>
            <Route exact path="/roads">
              <RoadList />
            </Route>
            <Route path="/Health/:userId">
              <Patient />
            </Route>
            <Route path="/roads/:userId">
              <Road />
            </Route>
            <Route path="/house/:Id">
              <HousePro />
            </Route>
            <Route path="/new">
              <NewP />
            </Route>
            <Route path="/newroad">
              <NewRoad />
            </Route>
            <Route path="/houses">
              <Houses />
            </Route>
            <Route path="/newHouse">
              <NewHouse />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="/newUser">
              <SignUp />
            </Route>
            <Route path="/newHealthPlan">
              <NewHealthplan />
            </Route>
            <Route path="/newHousePlan">
              <NewHousePlan />
            </Route>

            <Route path="/newR">
              <NewRoadPlan />
            </Route>
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
