import React from 'react'
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PatientList from './Pages/PatientList/Patientlist'
function App() {
  return (
    <Router>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/patient">
          <PatientList />
        </Route>
        
      </Switch>
    </div>
  </Router>
  );
}

export default App;
