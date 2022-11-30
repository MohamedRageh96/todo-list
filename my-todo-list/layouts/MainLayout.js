import React, {useState} from "react";
import Navbar from "../components/Navbar";

// main layout which contains navbar used across the app.
const MainLayout = ({children}) => {
    return (
        <>
        <Navbar />
         <main>{children}</main>
        </>
    )
}

export default MainLayout