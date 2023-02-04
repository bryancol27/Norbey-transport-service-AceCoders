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
                <p>Nuestro conductor Norbey, es un profesional experimentado y altamente capacitado. Es un conductor seguro y responsable, con un amplio conocimiento de las carreteras y las rutas de viaje. Está comprometido con proporcionar un servicio de alta calidad, asegurando que los clientes lleguen a su destino de manera segura y puntual, Norbey es la elección perfecta.</p>
                <h2>⭐⭐⭐⭐⭐</h2>
            </div>
            <div>
                <h1>Our Car</h1>
                <ul>
                    <li>Comodidad</li>
                    <li>Seguridad</li>
                    <li>Planeación</li>
                    <li>Experiencia</li>
                    <li>Capacitación</li>
                </ul>
            </div>
            <figure>
                <img src="/Car/car.svg" alt="car" />
            </figure>

        </ContainOurCar>
    );
};

export { OurCar };