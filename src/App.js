 import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
 
import ResetPassword from "./components/Auth/ResetPassword";
import ForgetPassword from "./components/Auth/ForgotPassword";
import Register from './components/Auth/Register';  
import Login from './components/Auth/Login';  
 

function App() { 
  
  return (
    <Router> 
         
          <Routes>
 
          <Route path="/register" element={<Register />} />
             <Route path="/" element={<Login />} />
             <Route path="/forgetpassword" element={<ForgetPassword />} />
             <Route path="/changepassword" element={<ResetPassword />} />
             
           
          </Routes>
           
    </Router>
  );
}
export default App;
