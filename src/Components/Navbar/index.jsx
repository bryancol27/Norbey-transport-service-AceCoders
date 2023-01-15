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
            {/* nabmar desktop version */}



            {/* navbar mobli version  */}
            <div className='NavMobile'>
                <figure>
                    <img src="https://png.pngtree.com/templates/20181023/travel-logo-template-png_37514.jpg" alt="" />
                </figure>
                <AlignRight color="#fff" size={40} onClick={toggleClickNav}/>
            </div>
            <div className={(toggle) ? 'vissible' : 'hidden'}>
                <a href="#inicio">INICIO</a>
                <a href="#about">ABOUT US</a>
                <a href="#experience">EXPERIENCE</a>
                <a href="#testimonials">TESTIMONIALS</a>
                <a href="#services">SERVICES</a>
            </div>
        </Nav>
    );
};

export {Navbar};