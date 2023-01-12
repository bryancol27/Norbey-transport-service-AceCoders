import React from 'react';
//import Globalstyles
import { GlobalStyles } from '../Styles/GlobalStyles';

//import Components
import { Navbar } from '../Components/Navbar';
import { Footer } from '@components/Footer';

//import Templates
import { Header } from '../Templates/Header';
import { AboutUS } from '../Templates/AboutUs';
import { Experience } from '@templates/Experience';
import { Testimonials } from '@templates/Testimonials'; 
import { Services } from '@templates/Services';

//UI Aplication
const App = () => {

    return(
        <React.Fragment>
            <GlobalStyles/>
            <Navbar/>
            <Header/>
            <AboutUS/>
            <Experience/>
            <Testimonials/>
            <Services/>
            <Footer/>
        </React.Fragment>
    );
};

export {App};