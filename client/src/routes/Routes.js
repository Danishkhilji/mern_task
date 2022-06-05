import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import { PublicRoute,PrivateRoute } from './RouteAuth';
const AppRoutes = () => {
  return (
    <Routes>
          <Route exact  element={<PrivateRoute/>}>    
            <Route path="/" element={<Home />} />
          </Route>
          <Route exact  element={<PublicRoute/>}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
    </Routes>
  )
}

export default AppRoutes