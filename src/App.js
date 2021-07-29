import React from 'react';
import './App.css';
import Home from "./Home";
import Services from "./Services";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div  className="app">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;