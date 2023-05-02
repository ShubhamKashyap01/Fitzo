import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./app.css";
 import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Slots from './components/Slots/Slots'

export function App() {

  return (
    <>
    <Router basename="ui">
      <Routes>
        <Route path="home/*" element={<Home/>}/>
        <Route path="login" element={<h2>Login</h2>}/>
        <Route path="signup" element={<h2>signup</h2>}/>
        <Route path="*" element={<h2>defualt</h2>}/>
        <Route path=":location" >
          <Route path="" element={<Home/>}/>
          <Route path=":activity" element={<Slots/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}
