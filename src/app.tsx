import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./app.css";
 import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home";

export function App() {

  // useEffect(() => {
  //   fetch("/api/v1")
  //     .then((data) => data.json())
  //     .then((data) => setApiInfo(data));
  // }, []);

  return (
    <>
    <Router basename="ui">
      <Routes>
        <Route path="home/*" element={<Home/>}/>
        <Route path="login" element={<h2>Login</h2>}/>
        <Route path="signup" element={<h2>signup</h2>}/>
        <Route path="*" element={<h2>defualt</h2>}/>
        <Route path="activity" element={<h2>activity</h2>}/>
      </Routes>
    </Router>
    </>
  );
}
