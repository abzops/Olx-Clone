import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import "./App.css";
import firebase from "firebase";
import Home from "./Pages/Home";
import Signup from "../src/Pages/Signup";
import Login from "./Pages/Login";
import AddTutorial from "./Components/Signup/add-tutorial.component";
import { AuthContext, FirebaseContext } from "./store/Context";
function App() {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/AddTutorial" element={<AddTutorial />}></Route>
          <Route path="/Login" element={((<Home />), (<Login />))}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;