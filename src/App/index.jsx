//import Globalstyles
import { GlobalStyles } from "../Styles/GlobalStyles";
//import Components
import { Navbar } from "../Components/Navbar";
//import Templates
import { Header } from "../Templates";
import React from "react";

//UI Aplication
const App = () => {

    return(
        <React.Fragment>
            <GlobalStyles/>
            <Navbar/>
            <Header/>
        </React.Fragment>
    );
};

export {App};