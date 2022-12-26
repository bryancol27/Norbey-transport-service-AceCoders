import React from 'react';
//import Globalstyles
import { GlobalStyles } from '../Styles/GlobalStyles';
//import Components
import { Navbar } from '../Components/Navbar';
//import Templates
import { Header } from '../Templates/Header';
import { AboutUS } from '../Templates/AboutUs';
import { Footer } from '../Components/Footer';

//UI Aplication
const App = () => {

    return(
        <React.Fragment>
            <GlobalStyles/>
            <Navbar/>
            <Header/>
            <AboutUS/>
            <Footer/>
        </React.Fragment>
    );
};

export {App};