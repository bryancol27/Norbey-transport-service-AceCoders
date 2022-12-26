import React from 'react';

//Import custom styles
import { FooterContainer } from './styles.js';

const Footer = () => {
    return (
        <FooterContainer>
            <div className='secondaryContainer'>
                <h2>Social Network</h2>

                <div>
                    <img src="/RRSS/Vector-1.png" alt="" />
                    <img src="/RRSS/Vector-2.png" alt="" />
                    <img src="/RRSS/Vector.png" alt="" />
                </div>
            </div>
            <p className='copy'>Maded by <span><img src="/Copy/Blanca 1.png" alt="logo AceCoders" /></span>ce Coders</p>
        </FooterContainer>
    );
};

export { Footer };