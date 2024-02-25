import React from "react";
import Header from "../HeaderComponent/Header";
import { Outlet } from "react-router-dom";

function RootLayout(){
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        </>

    );
}

export default RootLayout;