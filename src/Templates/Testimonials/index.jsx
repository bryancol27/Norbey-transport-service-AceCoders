import React from 'react';

// Import custom styles
import { TestimonialsContainer } from './styles';

// Import data
import { dataTestimonials } from '@utils/dataTestimonials';

const Testimonials = () => {

    return (
        <TestimonialsContainer id="testimonials">
            <h2>Testimonios</h2>

            <p className='title'>
                Conoce un poco sobre lo que piensan nuestros clientes sobre nosotros: 
            </p>

            <div className='testimonials__cards'>

                {/* Comillas components */}

                <div className='testimonials__cards'>
                    
                    {/* Example container */}

                    { dataTestimonials.map((e, i) => (
                        <div className='testimonials__cards__card' key={i}>
                            <h4 className='nameTestimonial_desktop'>{e.name}</h4>
                            <img 
                                className='comment-img' 
                                src="/ContentPage/iconComillas.png" 
                                alt="Comment log" 
                            />   

                            <img  
                                className="person-img" 
                                src={e.imgUrl}
                                alt="Person testimonial" 
                            />

                            <div className='texts'>
                                <h4>{e.name}</h4>
                                <p>{e.description}</p>
                            </div>
                        </div>
                    )) }


                </div>
            </div>
        </TestimonialsContainer>
    );
};

export { Testimonials };