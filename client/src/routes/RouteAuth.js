import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    
    const user =localStorage.getItem("user")
    return user ? <Outlet /> : <Navigate to="/login" />;
}
const PublicRoute = () => {
   
 const user =localStorage.getItem("user")
 
    return !user ? <Outlet /> : <Navigate to="/" />;
}



export { PrivateRoute, PublicRoute }



