import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/Dashboard";
import Preorder from "./pages/Preorder";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path="/login" element= {<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element= {<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element= {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>
        <Route path="/preorder" element= {<Preorder/>}/>
      </Routes>
    </div>
  );
}

export default App;