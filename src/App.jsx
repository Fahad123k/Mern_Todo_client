import React from "react";
import { Route, Routes } from "react-router";
import Todolist from "./pages/Todo/Todolist";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify
import Navbar from "./components/Navbar";
import Context from "./context";
import { useDispatch } from "react-redux";

import { setUserDetails } from "./store/UserSlice";

function App() {

  const dispatch=useDispatch();

  // const fethuserDetails()
  return (
    <>
      <ToastContainer
      />
       <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/to-do-list" element={<Todolist />} />
      </Routes>
    </>
  );
}

export default App;
