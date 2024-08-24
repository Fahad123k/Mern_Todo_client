import React from "react";
import { Route, Routes } from "react-router"
import Todolist from "./pages/Todo/Todolist";
import Landing from "./pages/Landing/Landing"
import Login from "./pages/Auth/Login";
import Register from './pages/Auth/Register';


function App() {
  return (<Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/to-do-list" element={<Todolist/>}/>
  </Routes>)
}

export default App;