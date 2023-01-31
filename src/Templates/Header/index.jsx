import React from 'react';
import { HeaderStyle } from './styles';

const Header = () => {
    return (
        <HeaderStyle id="inicio">
            <div>
                <h1>Comienza a viajar hoy</h1>
                <p>
                Norby Transport tiene como finalidad brindar a nuestro cliente seguridad en su trayecto además de la experiencia de todo el personal que se involucrara directamente en tus recorridos.
                </p>
                <a href="#services">
                    <button>Viaja hoy</button>  
                </a>
            </div>
        </HeaderStyle>
    );
};

export { Header };
