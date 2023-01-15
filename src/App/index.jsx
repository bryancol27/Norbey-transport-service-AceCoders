import React from 'react';
//import Globalstyles
import { GlobalStyles } from '../Styles/GlobalStyles';
//import Pages
import { Home } from '@pages/home';
import { Car } from '@pages/car';

//import react router
import { Route, Routes } from 'react-router-dom';
import { ShareComponent } from '@pages/shareComponents';


//UI Aplication

const App = () => {

    return (
        <React.Fragment>
            <GlobalStyles />
            <Routes>

                <Route path="/" element={<ShareComponent />}>
                    <Route index element={<Home />} />
                    <Route path="/car" element={<Car />} />
                    {/* <Route path='*' element={<Error/>} /> */}
                </Route>

            </Routes>
        </React.Fragment>
    );
};

export { App };