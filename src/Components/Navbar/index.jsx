import React, { useState } from 'react';
//import icons
import { AlignRight } from 'react-feather';
import { Nav } from './styles';

const Navbar = () => {

    const [toggle,setToggle] = useState(false);

    const toggleClickNav = () =>{
        setToggle(!toggle);
    };

    return(
        <Nav>
            <div>
                <figure>
                    <img src="https://png.pngtree.com/templates/20181023/travel-logo-template-png_37514.jpg" alt="" />
                </figure>
                <AlignRight color="#fff" size={40} onClick={toggleClickNav}/>
            </div>
            <div className={(toggle) ? 'vissible' : 'hidden' }>
                <a href="">INICIO</a>
                <a href="">ABOUT US</a>
                <a href="">EXPERIENCE</a>
                <a href="">TESTIMONIALS</a>
                <a href="">SERVICES</a>
            </div>
        </Nav>
    );
};

export {Navbar};