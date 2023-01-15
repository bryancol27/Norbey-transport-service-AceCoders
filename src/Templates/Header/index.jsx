import React from 'react';
import { HeaderStyle } from './styles';

const Header = () => {
    return (
        <HeaderStyle id="inicio">
            <div>
                <h1>TITLE TRAVEL</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facilis dicta officiis quae, sint a pariatur doloremque
                    molestiae. Consequatur a sed labore.
                </p>
                <button>View More</button>
            </div>
        </HeaderStyle>
    );
};

export { Header };
