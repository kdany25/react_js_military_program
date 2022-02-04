import React from 'react'
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        
      </Switch>
    </div>
  </Router>
  );
}

export default App;
