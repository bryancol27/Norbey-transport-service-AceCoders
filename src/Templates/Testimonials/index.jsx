import React from 'react';

// Import custom styles
import { TestimonialsContainer } from './styles';
//import data testimonial
import { Testimonial } from '@utils/dataTestimonial'; 

const Testimonials = () => {


    return (
        <TestimonialsContainer id="testimonials">
            <h2>Testimonios</h2>

            <div className='testimonials__cards'>

                {/* Comillas components */}

                <div className='testimonials__cards'>
                    
                    {/* Example container */}

                    { Testimonial.map((item, i) => (
                        <div className='testimonials__cards__card' key={i}>
                            <h4 className='nameTestimonial_desktop'>{item.name}</h4>
                            <img 
                                className='comment-img' 
                                src="/ContentPage/iconComillas.png" 
                                alt="Comment log" 
                            />   

                            <img  
                                className="person-img" 
                                src={item.img} 
                                alt="Person testimonial" 
                            />

                            <div className='texts'>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )) }


                </div>
            </div>
        </TestimonialsContainer>
    );
};

export { Testimonials };