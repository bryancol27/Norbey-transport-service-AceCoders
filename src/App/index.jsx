import React from 'react';
//import Globalstyles
import { GlobalStyles } from '../Styles/GlobalStyles';
//import Components
import { Navbar } from '../Components/Navbar';
import { Footer } from '@components/Footer';
//import Templates
import { Header } from '../Templates/Header';
import { AboutUS } from '../Templates/AboutUs';

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