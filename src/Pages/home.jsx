import React from "react";

//import Components
import { Navbar } from '../Components/Navbar';
import { Footer } from '@components/Footer';

//import Templates
import { Header } from '../Templates/Header';
import { AboutUS } from '../Templates/AboutUs';
import { Experience } from '@templates/Experience';
import { Testimonials } from '@templates/Testimonials';
import { Services } from '@templates/Services';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <AboutUS />
            <Experience />
            <Testimonials />
            <Services />
        </React.Fragment>
    )
}

export { Home };