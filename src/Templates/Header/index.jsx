import React from 'react';
import { HeaderStyle } from './styles';

const Header = () => {
    return (
        <HeaderStyle id="inicio">
            <div>
                <h1>Comienza a viajar hoy</h1>
                <p>
                ¡Comienza hoy a viajar y descubre el mundo! Ya sea que estés buscando unas vacaciones relajantes ,tenemos la solución perfecta para ti. Ofrecemos una amplia variedad de opciones de viajes ¡No pierdas más tiempo y comienza hoy a planificar tu próximo viaje!
                </p>
                <a href="#services">
                    <button>Viaja hoy</button>  
                </a>
            </div>
        </HeaderStyle>
    );
};

export { Header };
