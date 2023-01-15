import React from 'react';
//import components globals
import { Navbar } from '@components/Navbar';
import { Footer } from '@components/Footer';

//import router global
import { Outlet, useLocation } from 'react-router-dom';
import { ButtonFix } from '@components/ButtonFix';

const ShareComponent = () => {
    const { pathname } = useLocation();

    return (
        <React.Fragment>
            {pathname == '/' && <Navbar />}
            <Outlet />
            <ButtonFix />
            <Footer />
        </React.Fragment>
    );
};

export { ShareComponent };
