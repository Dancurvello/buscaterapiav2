import { Navbar } from "../components/navbar";
import React from "react";

const MyAccount = () => {
    return (
        <>
        <Navbar/>
        <h1> Seus dados:</h1>
        <label> Nome: Daniel Curvello</label>
        <br></br>
        <br></br>
        <label> Email: curvellodaniel@gmail.com</label>
        </>
        
    )
}

export default MyAccount