import React from 'react';
//import Globalstyles
import { GlobalStyles } from '../Styles/GlobalStyles';
//import Pages
import { Home } from '@pages/home';

//import react router
import { Route } from 'react-router-dom';

//UI Aplication
const App = () => {

    return(
        <React.Fragment>
            <GlobalStyles/>
            <Route path="/" element={<Home/>}/>
        </React.Fragment>
    );
};

export {App};