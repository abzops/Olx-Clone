import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import "./App.css";
import firebase from "firebase";
import Home from "./Pages/Home";
import Signup from "../src/Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Components/Create/Create";
import { AuthContext, FirebaseContext } from "./store/Context";
import View from "./Components/View/View";
import Post from "./store/PostContext";
import EditProfilePage from "./Pages/EditProfile";
function App() {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Login" element={((<Home />), (<Login />))}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/viewPost" element={<View />}></Route>
            <Route path="/editprofile" element={<EditProfilePage />}></Route>
          </Routes>
        </Router>
      </Post>
    </div>
  );
}

export default App;
