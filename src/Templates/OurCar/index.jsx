import React from 'react';
//import styles
import { ContainOurCar } from './styles';

//import navigate for the change route
import { useNavigate } from 'react-router-dom';

const OurCar = () => {

    const redirect = useNavigate();

    const goHome = () =>{
        redirect('/');
    };

    return (
        <ContainOurCar>
            <button onClick={goHome}>Go To Home</button>
            <div>
                <h1>Our Driver</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. binterpe specimen book. It has survived not.</p>
                <h2>⭐⭐⭐⭐⭐</h2>
            </div>
            <div>
                <h1>Our Car</h1>
                <ul>
                    <li>The most faster</li>
                    <li>The most faster</li>
                    <li>The most faster</li>
                    <li>The most faster</li>
                    <li>The most faster</li>
                    <li>The most faster</li>
                </ul>
            </div>
            <figure>
                <img src="/Car/car.svg" alt="car" />
            </figure>

        </ContainOurCar>
    );
};

export { OurCar };