import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Home from "./pages/Dashboard/Home"; 
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import Authentication from "./pages/Auth/Authentication";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}/>
          <Route path="/signin" element={<Authentication/>} />
          <Route path="/signup" element={<Authentication/>} />
          <Route path="/dashboard" element={<Home/>} />
          <Route path="/income" element={<Income/>} />
          <Route path="/expense" element={<Expense/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App;

const Root = () => {
  //To check if token exist in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  //Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (<Navigate to="/dashboard" />) : (<Navigate to="/login" />);

}