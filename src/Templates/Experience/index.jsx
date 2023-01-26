import React from 'react';

// Import custom styles
import { ExperienceTemplate } from './styles';

// Import Icons
import * as Icon from 'react-feather';

const Experience = () => {

    const dummyObject = [1,1,1,1,1];

    return(
        <ExperienceTemplate id="experience">
            <article className='experience__content'>
                <h2>Experiencia</h2>

                <div className='list-experience'>

                    { dummyObject.map((e, i) => (
                        <div className='list-experience-buble' key={i}>
                            <Icon.CheckCircle color='white' size={53}/>
                            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nih</p>
                        </div>
                    )) }

                </div>
            </article>

            <figure className='experience__image'>
                <img src="/ContentPage/Airplane around Earth.png" alt="Airplane around the wolld" />
            </figure>
        </ExperienceTemplate>
    );
};

export {Experience};