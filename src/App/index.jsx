import React from "react";
//import Globalstyles
import { GlobalStyles } from "../Styles/GlobalStyles";
//import Components
import { Navbar } from "../Components/Navbar";
//import Templates
import { Header } from "../Templates/Header";
import { AboutUS } from "../Templates/AboutUs";
import { Experience } from "../Templates/Experience";

//UI Aplication
const App = () => {

    return(
        <React.Fragment>
            <GlobalStyles/>
            <Navbar/>
            <Header/>
            <AboutUS/>
            <Experience/>
        </React.Fragment>
    );
};

export {App};