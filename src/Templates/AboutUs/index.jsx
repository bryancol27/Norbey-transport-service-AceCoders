import React from 'react';
import { AboutUsTemplate } from './styles';

const AboutUS = () => {
    return (
        <AboutUsTemplate id="about">
            <div>
                <h1>SOBRE NOSOTROS</h1>
                <p>
                Nuestro servicio de viajes en coche ofrece una experiencia de viaje cómoda. Con vehículos de alta calidad y conductores profesionales y amables, nos aseguramos de que nuestros clientes lleguen a su destino de manera segura y puntual. Ofrecemos servicios personalizados para adaptarnos a las necesidades de cada viajero, ya sea para viajes de negocios o turismo. Ofrecemos servicios de tour privado. Además, ofrecemos un buen vehículo para adaptarse a diferentes tamaños de grupo. Si buscas comodidad, flexibilidad en tus viajes, nuestro servicio de viajes en vehículo es la elección perfecta.
                </p>
            </div>
            <figure>
                <img src="https://internet.com.co/wp-content/uploads/2017/03/28-man-png-image.png" alt="Man" />
            </figure>
        </AboutUsTemplate>
    );
};

export { AboutUS };
