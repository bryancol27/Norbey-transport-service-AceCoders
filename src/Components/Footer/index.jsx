import React from 'react';

//Import custom styles
import { FooterContainer } from './styles.js';

const Footer = () => {
    return (
        <FooterContainer>
            <div className='secondaryContainer'>
                <h2>Social Network</h2>

                <div>
                    <a href="https://wa.link/ivzdo7">
                        <img src="/RRSS/Vector-1.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/transportnorbey/">
                        <img src="/RRSS/Vector-2.png" alt="" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100089788216695">
                        <img src="/RRSS/Vector.png" alt="" />
                    </a>
                </div>
            </div>
            <p className='copy'>Maded by <span><img src="/Copy/Blanca 1.png" alt="logo AceCoders" /></span>ce Coders</p>
        </FooterContainer>
    );
};

export { Footer };