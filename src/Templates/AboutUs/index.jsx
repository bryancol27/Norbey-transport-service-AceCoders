import React from 'react';
import { AboutUsTemplate } from './styles';

const AboutUS = () => {
    return (
        <AboutUsTemplate id="about">
            <div>
                <h1>SOBRE NOSOTROS</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore quia voluptatibus culpa debitis cumque magni quam
                    suscipit ratione cum, quas nam quisquam unde!
                </p>
            </div>
            <figure>
                <img src="https://internet.com.co/wp-content/uploads/2017/03/28-man-png-image.png" alt="Man" />
            </figure>
        </AboutUsTemplate>
    );
};

export { AboutUS };
